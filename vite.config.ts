import fs from 'node:fs/promises';
import path from 'path';
import crypto from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const sessionStore = new Map<string, number>();
const SESSION_TTL_MS = 1000 * 60 * 60 * 8;

type ContentMap = Record<string, string>;

function sendJson(response: ServerResponse, statusCode: number, payload: unknown) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const body = Buffer.concat(chunks).toString('utf-8');
  if (!body) {
    return {};
  }
  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}

function sanitizeServerText(value: string): string {
  return value.replace(/\r/g, '').replace(/</g, '').replace(/>/g, '').slice(0, 5000);
}

function normalizeContent(input: unknown): ContentMap {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {};
  }

  const safeEntries = Object.entries(input as Record<string, unknown>).slice(0, 600);
  const output: ContentMap = {};

  for (const [key, value] of safeEntries) {
    if (typeof key !== 'string' || typeof value !== 'string') {
      continue;
    }
    output[key] = sanitizeServerText(value);
  }

  return output;
}

function isTokenValid(token: string): boolean {
  const expiresAt = sessionStore.get(token);
  if (!expiresAt) {
    return false;
  }
  if (Date.now() > expiresAt) {
    sessionStore.delete(token);
    return false;
  }
  return true;
}

function editorApiPlugin(editorPassword?: string): Plugin {
  const contentFilePath = path.resolve(__dirname, 'public/content/siteContent.json');

  return {
    name: 'editor-api',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (!request.url?.startsWith('/api/editor/')) {
          next();
          return;
        }

        const requestUrl = new URL(request.url, 'http://localhost');

        if (request.method === 'GET' && requestUrl.pathname === '/api/editor/content') {
          try {
            const fileContent = await fs.readFile(contentFilePath, 'utf-8');
            const parsed = JSON.parse(fileContent) as ContentMap;
            sendJson(response, 200, { content: parsed });
            return;
          } catch {
            sendJson(response, 200, { content: {} });
            return;
          }
        }

        if (request.method === 'POST' && requestUrl.pathname === '/api/editor/login') {
          if (!editorPassword) {
            sendJson(response, 503, { error: 'Define EDITOR_PASSWORD en .env para habilitar el editor.' });
            return;
          }

          const body = (await readJsonBody(request)) as { password?: string };
          if (body.password !== editorPassword) {
            sendJson(response, 401, { error: 'Clave invalida.' });
            return;
          }

          const token = crypto.randomBytes(24).toString('hex');
          sessionStore.set(token, Date.now() + SESSION_TTL_MS);
          sendJson(response, 200, { token });
          return;
        }

        if (request.method === 'POST' && requestUrl.pathname === '/api/editor/content') {
          const auth = request.headers.authorization ?? '';
          const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
          if (!isTokenValid(token)) {
            sendJson(response, 401, { error: 'Sesion invalida. Inicia sesion nuevamente.' });
            return;
          }

          const body = (await readJsonBody(request)) as { content?: unknown };
          const safeContent = normalizeContent(body.content);

          try {
            await fs.mkdir(path.dirname(contentFilePath), { recursive: true });
            await fs.writeFile(contentFilePath, `${JSON.stringify(safeContent, null, 2)}\n`, 'utf-8');
            sendJson(response, 200, { content: safeContent });
            return;
          } catch {
            sendJson(response, 500, { error: 'No se pudo guardar el contenido en disco.' });
            return;
          }
        }

        sendJson(response, 404, { error: 'Endpoint no encontrado.' });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), editorApiPlugin(env.EDITOR_PASSWORD)],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
