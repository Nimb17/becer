import crypto from 'node:crypto';

export const config = {
  runtime: 'nodejs',
};

const SESSION_TTL_SECONDS = 60 * 60 * 8;

function toBase64Url(value: string): string {
  return Buffer.from(value, 'utf-8').toString('base64url');
}

function signPayload(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

function createSessionToken(secret: string): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = toBase64Url(JSON.stringify({ exp }));
  const signature = signPayload(payload, secret);
  return `${payload}.${signature}`;
}

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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo no permitido.' });
  }

  const editorPassword = process.env.EDITOR_PASSWORD;
  const sessionSecret = process.env.EDITOR_SESSION_SECRET;

  if (!editorPassword || !sessionSecret) {
    return res.status(503).json({
      error: 'Faltan variables EDITOR_PASSWORD y/o EDITOR_SESSION_SECRET en Vercel.',
    });
  }

  const body = parseBody(req) as { password?: string };

  if (body.password !== editorPassword) {
    return res.status(401).json({ error: 'Clave invalida.' });
  }

  const token = createSessionToken(sessionSecret);
  return res.status(200).json({ token });
}
