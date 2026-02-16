import fs from 'node:fs/promises';
import path from 'node:path';
import { list } from '@vercel/blob';

const token = process.env.BLOB_READ_WRITE_TOKEN;
const blobPathname = process.env.CONTENT_BLOB_PATHNAME || 'editor/siteContent.json';
const localPath = path.resolve(process.cwd(), 'public/content/siteContent.json');

if (!token) {
  console.error('Falta BLOB_READ_WRITE_TOKEN para sincronizar desde Blob.');
  process.exit(1);
}

const result = await list({ token, prefix: blobPathname, limit: 1 });
const blob = result.blobs[0];

if (!blob) {
  console.error(`No se encontro contenido en Blob para ${blobPathname}.`);
  process.exit(1);
}

const response = await fetch(blob.url);
if (!response.ok) {
  console.error('No se pudo descargar el JSON desde Blob.');
  process.exit(1);
}

const json = await response.json();
await fs.mkdir(path.dirname(localPath), { recursive: true });
await fs.writeFile(localPath, `${JSON.stringify(json, null, 2)}\n`, 'utf-8');
console.log(`Contenido sincronizado desde Blob a ${localPath}`);
