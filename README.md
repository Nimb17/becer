<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1QvChIl84w-gNLHZaF5EZOGlV85pR0j0t

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Inline editor MVP

This project now includes a basic inline editor for text content.

1. Set `EDITOR_PASSWORD` in `.env` (or `.env.local`).
2. Run the app with `npm run dev`.
3. Open the site and use the editor panel at bottom-right.
4. Click `Editar inline`, edit text directly in the page, then click `Guardar`.

Saved content is written to `public/content/siteContent.json` through protected dev endpoints:

- `POST /api/editor/login`
- `GET /api/editor/content`
- `POST /api/editor/content`

## Vercel (persistencia real)

Para que el editor guarde cambios en produccion (Vercel), se usan funciones serverless en:

- `api/editor/login.ts`
- `api/editor/content.ts`

Persistencia:

- Si existe `BLOB_READ_WRITE_TOKEN`, guarda y lee desde Vercel Blob (`editor/siteContent.json`).
- Si no existe, hace fallback a `public/content/siteContent.json` (util para local).

Variables requeridas en Vercel:

- `EDITOR_PASSWORD`
- `EDITOR_SESSION_SECRET`
- `BLOB_READ_WRITE_TOKEN` (recomendada para produccion)

Despues de editar `package.json`, ejecuta:

`npm install`

## Flujo seguro (Blob como fuente de verdad)

Para evitar perder contenido de produccion:

1. Antes de comenzar cambios en desarrollo, sincroniza contenido:
   `npm run content:pull`
2. Trabaja en UI/codigo y prueba con `npm run dev`.
3. Mantén estables las claves (`contentKey`) ya existentes. Evita renombrarlas.
4. Si agregas nuevas secciones editables, agrega nuevas keys en `public/content/siteContent.json`.
5. Si cambias contenido base local y quieres publicarlo directo en Blob:
   `npm run content:push`

Buenas practicas:

- Blob es la fuente de verdad para contenido editable.
- No deployes cambios estructurales sin antes ejecutar `npm run content:pull`.
- Usa `ALLOW_LOCAL_CONTENT_FALLBACK=true` solo para desarrollo aislado sin Blob.
