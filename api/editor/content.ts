import {
  isSessionTokenValid,
  jsonResponse,
  loadContent,
  normalizeContent,
  persistContent,
  readJsonBody,
} from './_shared';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'GET') {
    try {
      const content = await loadContent();
      return jsonResponse({ content }, 200);
    } catch {
      return jsonResponse({ error: 'No se pudo cargar contenido.' }, 500);
    }
  }

  if (request.method === 'POST') {
    const sessionSecret = process.env.EDITOR_SESSION_SECRET;
    if (!sessionSecret) {
      return jsonResponse({ error: 'Falta EDITOR_SESSION_SECRET en Vercel.' }, 503);
    }

    const authorization = request.headers.get('authorization') ?? '';
    const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
    if (!isSessionTokenValid(token, sessionSecret)) {
      return jsonResponse({ error: 'Sesion invalida. Inicia sesion nuevamente.' }, 401);
    }

    const body = (await readJsonBody(request)) as { content?: unknown };
    const safeContent = normalizeContent(body.content);

    try {
      await persistContent(safeContent);
      return jsonResponse({ content: safeContent }, 200);
    } catch {
      return jsonResponse({ error: 'No se pudo persistir el contenido.' }, 500);
    }
  }

  return jsonResponse({ error: 'Metodo no permitido.' }, 405);
}
