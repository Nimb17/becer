import fs from 'node:fs/promises';
import path from 'node:path';
import { put } from '@vercel/blob';

const token = process.env.BLOB_READ_WRITE_TOKEN;
const blobPathname = process.env.CONTENT_BLOB_PATHNAME || 'editor/siteContent.json';
const localPath = path.resolve(process.cwd(), 'public/content/siteContent.json');

if (!token) {
  console.error('Falta BLOB_READ_WRITE_TOKEN para subir contenido a Blob.');
  process.exit(1);
}

const raw = await fs.readFile(localPath, 'utf-8');
JSON.parse(raw);

await put(blobPathname, raw, {
  token,
  access: 'public',
  addRandomSuffix: false,
  contentType: 'application/json',
  allowOverwrite: true,
});

console.log(`Contenido local subido a Blob en ${blobPathname}`);
