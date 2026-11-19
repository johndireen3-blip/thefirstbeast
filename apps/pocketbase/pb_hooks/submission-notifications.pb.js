/// <reference path="../pb_data/types.d.ts" />

// Email the site owner whenever a new proposal or discussion submission is
// saved. Submissions are still stored in PocketBase as before; this only
// adds an email notification. The owner's address is kept server-side and
// never appears in the page source.
//
// IMPORTANT: this hook runs inside the createRecord request, so any uncaught
// throw here surfaces as an HTTP 500 to the visitor even though the record
// was already committed. The entire body is wrapped in try/catch so a
// notification failure is only logged and never breaks the form submission.
// The platform mail relay does not honor a custom Reply-To header (the reply
// address comes back as the relay's sending address), so the visitor's email
// is also placed as a mailto link at the very top of the email body.
// Helpers are defined inside each callback because PB runs every hook in an
// isolated VM where file-level bindings are undefined.

onRecordAfterCreateSuccess(function (e) {
  var OWNER_ADDRESS = "frjohn@thelambsvictory.org";
  var FROM_NAME = "The Lamb's Victory";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildRows(record, fields) {
    return fields
      .map(function (f) {
        var raw = record.get(f[1]);
        var value =
          f[1] === "standards" || f[1] === "publish"
            ? raw
              ? "Yes"
              : "No"
            : raw == null
              ? ""
              : raw;
        return (
          '<tr><th style="text-align:left;vertical-align:top;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;">' +
          escapeHtml(f[0]) +
          '</th><td style="vertical-align:top;padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap;">' +
          escapeHtml(value) +
          "</td></tr>"
        );
      })
      .join("");
  }

  try {
    var fields = [
      ["Name or pen name", "name"],
      ["Email", "email"],
      ["Background", "background"],
      ["Proposed title", "title"],
      ["Summary", "summary"],
      ["Read the standards", "standards"],
    ];
    var rows = buildRows(e.record, fields);

    var submitterEmail = e.record.get("email");
    var emailLine =
      submitterEmail
        ? '<p style="font-size:14px;font-family:Arial,sans-serif;">Visitor\'s email: <a href="mailto:' +
          escapeHtml(String(submitterEmail)) +
          '">' +
          escapeHtml(String(submitterEmail)) +
          "</a></p>"
        : "";

    var html =
      emailLine +
      "<h2>New Contribute proposal</h2>" +
      "<p>A new proposal was submitted through the /contribute form.</p>" +
      '<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">' +
      rows +
      "</table>";

    var headers = {};
    if (submitterEmail) {
      headers["Reply-To"] = String(submitterEmail);
    }

    var mail = new MailerMessage({
      from: { name: FROM_NAME },
      to: [{ address: OWNER_ADDRESS }],
      subject: "New Contribute proposal",
      html: html,
      headers: headers,
    });

    $app.newMailClient().send(mail);
  } catch (err) {
    $app
      .logger()
      .error(
        "submission notification email failed",
        "collection",
        "proposals",
        "err",
        String(err),
      );
  }
  e.next();
}, "proposals");

onRecordAfterCreateSuccess(function (e) {
  var OWNER_ADDRESS = "frjohn@thelambsvictory.org";
  var FROM_NAME = "The Lamb's Victory";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildRows(record, fields) {
    return fields
      .map(function (f) {
        var raw = record.get(f[1]);
        var value =
          f[1] === "standards" || f[1] === "publish"
            ? raw
              ? "Yes"
              : "No"
            : raw == null
              ? ""
              : raw;
        return (
          '<tr><th style="text-align:left;vertical-align:top;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;">' +
          escapeHtml(f[0]) +
          '</th><td style="vertical-align:top;padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap;">' +
          escapeHtml(value) +
          "</td></tr>"
        );
      })
      .join("");
  }

  try {
    var fields = [
      ["First name or initials", "name"],
      ["Email", "email"],
      ["Question or reflection", "message"],
      ["May publish", "publish"],
    ];
    var rows = buildRows(e.record, fields);

    var submitterEmail = e.record.get("email");
    var emailLine =
      submitterEmail
        ? '<p style="font-size:14px;font-family:Arial,sans-serif;">Visitor\'s email: <a href="mailto:' +
          escapeHtml(String(submitterEmail)) +
          '">' +
          escapeHtml(String(submitterEmail)) +
          "</a></p>"
        : "";

    var html =
      emailLine +
      "<h2>New Discussion question</h2>" +
      "<p>A new question or reflection was submitted through the /discussion form.</p>" +
      '<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">' +
      rows +
      "</table>";

    var headers = {};
    if (submitterEmail) {
      headers["Reply-To"] = String(submitterEmail);
    }

    var mail = new MailerMessage({
      from: { name: FROM_NAME },
      to: [{ address: OWNER_ADDRESS }],
      subject: "New Discussion question",
      html: html,
      headers: headers,
    });

    $app.newMailClient().send(mail);
  } catch (err) {
    $app
      .logger()
      .error(
        "submission notification email failed",
        "collection",
        "discussions",
        "err",
        String(err),
      );
  }
  e.next();
}, "discussions");
