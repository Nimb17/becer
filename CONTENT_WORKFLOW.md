# Content Workflow (Blob Source of Truth)

## Objetivo
Mantener el contenido editable sincronizado entre desarrollo y producción sin perder cambios.

## Regla principal
- `Vercel Blob` es la **fuente de verdad** del contenido editable.

## Flujo recomendado
1. Antes de empezar a programar:
   - Ejecuta: `npm run content:pull`
   - Esto baja el contenido real de producción a `public/content/siteContent.json`.

2. Desarrolla normal:
   - Ejecuta: `npm run dev`
   - Cambia UI/componentes sin desalinearte del contenido real.

3. Respeta las keys existentes:
   - No renombres `contentKey` ya publicadas.
   - Solo agrega nuevas keys cuando haga falta.
   - Si renombraras una key, el contenido viejo puede dejar de mostrarse.

4. Publicar contenido manual (solo si corresponde):
   - Si editaste contenido local en JSON y quieres subirlo a Blob:
   - Ejecuta: `npm run content:push`

5. Deploy de código:
   - `git push` para subir cambios de UI/lógica a producción.

## Diferencia entre acciones
- `content:pull` = Producción -> Local (contenido)
- `content:push` = Local -> Producción (contenido)
- `deploy` (`git push`) = Local -> Producción (código)

## Buenas prácticas
- Ejecuta `content:pull` antes de cada sesión de trabajo.
- Evita editar contenido en varios entornos al mismo tiempo.
- Si hay cambios grandes de estructura, agrega nuevas keys en vez de reemplazar las antiguas.
- Mantén secretos fuera de Git (`BLOB_READ_WRITE_TOKEN`, etc.).

## Variables importantes
- `BLOB_READ_WRITE_TOKEN`
- `EDITOR_PASSWORD`
- `EDITOR_SESSION_SECRET`
- `ALLOW_LOCAL_CONTENT_FALLBACK` (solo para desarrollo aislado)

