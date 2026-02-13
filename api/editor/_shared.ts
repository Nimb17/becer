import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { list, put } from '@vercel/blob';

export type ContentMap = Record<string, string>;

const SESSION_TTL_SECONDS = 60 * 60 * 8;
const BLOB_PATHNAME = 'editor/siteContent.json';
const LOCAL_CONTENT_PATH = path.resolve(process.cwd(), 'public/content/siteContent.json');

function toBase64Url(value: string): string {
  return Buffer.from(value, 'utf-8').toString('base64url');
}

function fromBase64Url(value: string): string {
  return Buffer.from(value, 'base64url').toString('utf-8');
}

function signPayload(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

export function createSessionToken(secret: string): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = toBase64Url(JSON.stringify({ exp }));
  const signature = signPayload(payload, secret);
  return `${payload}.${signature}`;
}

export function isSessionTokenValid(token: string, secret: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 2) {
    return false;
  }
  const [payload, signature] = parts;
  const expectedSignature = signPayload(payload, secret);
  if (signature !== expectedSignature) {
    return false;
  }
  try {
    const decoded = JSON.parse(fromBase64Url(payload)) as { exp?: number };
    if (!decoded.exp || typeof decoded.exp !== 'number') {
      return false;
    }
    return decoded.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function sanitizeServerText(value: string): string {
  return value.replace(/\r/g, '').replace(/</g, '').replace(/>/g, '').slice(0, 5000);
}

export function normalizeContent(input: unknown): ContentMap {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {};
  }
  const safeEntries = Object.entries(input as Record<string, unknown>).slice(0, 600);
  const output: ContentMap = {};
  for (const [key, value] of safeEntries) {
    if (typeof key === 'string' && typeof value === 'string') {
      output[key] = sanitizeServerText(value);
    }
  }
  return output;
}

export async function readJsonBody(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

async function readFromBlob(token: string): Promise<ContentMap | null> {
  const result = await list({ token, prefix: BLOB_PATHNAME, limit: 1 });
  const blob = result.blobs[0];
  if (!blob) {
    return null;
  }
  const response = await fetch(blob.url);
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as ContentMap;
}

async function writeToBlob(token: string, content: ContentMap): Promise<void> {
  await put(BLOB_PATHNAME, JSON.stringify(content, null, 2), {
    token,
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
    allowOverwrite: true,
  });
}

async function readFromLocalFile(): Promise<ContentMap> {
  try {
    const raw = await fs.readFile(LOCAL_CONTENT_PATH, 'utf-8');
    return JSON.parse(raw) as ContentMap;
  } catch {
    return {};
  }
}

async function writeToLocalFile(content: ContentMap): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_CONTENT_PATH), { recursive: true });
  await fs.writeFile(LOCAL_CONTENT_PATH, `${JSON.stringify(content, null, 2)}\n`, 'utf-8');
}

export async function loadContent(): Promise<ContentMap> {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (blobToken) {
    const blobContent = await readFromBlob(blobToken);
    if (blobContent) {
      return blobContent;
    }
  }
  return await readFromLocalFile();
}

export async function persistContent(content: ContentMap): Promise<void> {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (blobToken) {
    await writeToBlob(blobToken, content);
    return;
  }
  await writeToLocalFile(content);
}
