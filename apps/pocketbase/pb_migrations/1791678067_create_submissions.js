/// <reference path="../pb_data/types.d.ts" />

// Private submission collections for /contribute and /discussion.
// createRule: null — nobody can write via the REST API directly. Writes go
// through the route `action` (server-side, superuser client), which validates
// fields and runs a honeypot spam check. Every other rule is null too, so
// submissions are never exposed to the public; the owner reads them in the
// Horizons Data tab.
migrate(
  (app) => {
    const proposals = new Collection({
      type: "base",
      name: "proposals",
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: "name", type: "text", required: true, max: 200 },
        { name: "email", type: "email", required: true },
        { name: "background", type: "text", required: true, max: 600 },
        { name: "title", type: "text", required: true, max: 300 },
        { name: "summary", type: "text", required: true, max: 4000 },
        { name: "standards", type: "bool" },
        { name: "created", type: "autodate", onCreate: true, onUpdate: false },
        { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
      ],
    });
    app.save(proposals);

    const discussions = new Collection({
      type: "base",
      name: "discussions",
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: "name", type: "text", max: 200 },
        { name: "email", type: "email", required: true },
        { name: "message", type: "text", required: true, max: 8000 },
        { name: "publish", type: "bool" },
        { name: "created", type: "autodate", onCreate: true, onUpdate: false },
        { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
      ],
    });
    app.save(discussions);
  },
  (app) => {
    try {
      app.delete(app.findCollectionByNameOrId("proposals"));
    } catch (_) {}
    try {
      app.delete(app.findCollectionByNameOrId("discussions"));
    } catch (_) {}
  },
);
