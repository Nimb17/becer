import {
  isSessionTokenValid,
  loadContent,
  normalizeContent,
  persistContent,
} from './_shared.js';

export const config = {
  runtime: 'nodejs',
};

function parseBody(req: any) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      const content = await loadContent();
      return res.status(200).json({ content });
    } catch {
      return res.status(500).json({ error: 'No se pudo cargar contenido.' });
    }
  }

  if (req.method === 'POST') {
    const sessionSecret = process.env.EDITOR_SESSION_SECRET;
    if (!sessionSecret) {
      return res.status(503).json({ error: 'Falta EDITOR_SESSION_SECRET en Vercel.' });
    }

    const authorization = req.headers?.authorization ?? '';
    const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';

    if (!isSessionTokenValid(token, sessionSecret)) {
      return res.status(401).json({ error: 'Sesion invalida. Inicia sesion nuevamente.' });
    }

    const body = parseBody(req) as { content?: unknown };
    const safeContent = normalizeContent(body.content);

    try {
      await persistContent(safeContent);
      return res.status(200).json({ content: safeContent });
    } catch {
      return res.status(500).json({ error: 'No se pudo persistir el contenido.' });
    }
  }

  return res.status(405).json({ error: 'Metodo no permitido.' });
}
