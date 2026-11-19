# The Lamb's Victory (thelambsvictory.org): coded site

Exported from the Hostinger AI Builder on Nov 18, 2026 (first commit on this branch is the unmodified export).
Converted the same day to a static site: every page is prerendered to HTML and served as plain files.

- Source: `apps/web/src` (React Router; one folder of components per page under `src/components`).
- Build: `cd apps/web && npm install && NODE_ENV=production npx react-router build` -> `apps/web/build/client`.
- Publish: copy `apps/web/build/client/.` onto branch `lambsvictory-main` and push (same pattern as the other sites).
- `public/.htaccess` handles the www redirect, five old addresses, and serving `/name` from `name/index.html`.
- `public/sitemap.xml` and `public/robots.txt` are static files; add new pages to the sitemap by hand.
- The Discussion and Contribute forms were replaced by email invitations (frjohn@thelambsvictory.org); nothing uses the
  builder's database any more. `apps/pocketbase`, `apps/web/server*`, `apps/web/plugins` and `src/lib/*.server.ts` are unused leftovers.
- Social-card images (og:image) still point at images.hostinger.com; copy them into `public/` before the builder project is deleted.
