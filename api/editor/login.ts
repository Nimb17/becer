import { createSessionToken, jsonResponse, readJsonBody } from './_shared';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Metodo no permitido.' }, 405);
  }

  const editorPassword = process.env.EDITOR_PASSWORD;
  const sessionSecret = process.env.EDITOR_SESSION_SECRET;

  if (!editorPassword || !sessionSecret) {
    return jsonResponse(
      { error: 'Faltan variables EDITOR_PASSWORD y/o EDITOR_SESSION_SECRET en Vercel.' },
      503
    );
  }

  const body = (await readJsonBody(request)) as { password?: string };
  if (body.password !== editorPassword) {
    return jsonResponse({ error: 'Clave invalida.' }, 401);
  }

  const token = createSessionToken(sessionSecret);
  return jsonResponse({ token }, 200);
}
