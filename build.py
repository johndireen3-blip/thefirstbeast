#!/usr/bin/env python3
"""Build thefirstbeast.com, "The First Beast" (The Ephesus Challenge).

src/<slug>.md holds each page: a JSON front-matter line, then Markdown (raw HTML allowed).
  <!--{"title":..., "description":..., "kicker":..., "h1":..., "lead":..., "crumbs":[...], "credit":..., "reviewed":...}-->
Shortcodes: [[auth:scripture]] (authority tags), [[st:partly]] (standing badges).
Output:
  dist/     production files, clean URLs, served by .htaccess; published to the main branch
  preview/  same pages with .html links, for previews
Adapted from the apocalypse12.org and agreatsign.si build scripts. The part above "# ---- core" is this
site's configuration; the core is shared with apocalypse13.org.
"""
import pathlib

CONFIG = {
    "site": "https://thefirstbeast.com",
    "name": "The First Beast",
    "tagline": "Revelation 13 in depth",
    "about_blurb": ("What Scripture and the Church have revealed about the beasts of Revelation and Daniel, "
                    "set out mark by mark with its texts and its authority, so readers can know them and keep watch "
                    "without guessing who they are."),
    "contact_email": None,   # Fr. John to choose; pages say it is coming
    "default_credit": "claude",
    "nav": [("/", "Home"), ("/revelation-13", "Revelation 13"), ("/the-beast-from-the-sea", "The Beasts"),
            ("/marks", "The Marks"), ("/about", "About"), ("/contact", "Contact")],
    # Linking rule (brief): this site links to the Church's-reading sites only, never to
    # apocalypse13.org, apocalypse12.org or revelation13.blog.
    "family": [("https://thelambsvictory.org/", "The Lamb's Victory", "Revelation chapter by chapter"),
               ("https://agreatsign.si/", "A Great Sign", "prophecy across the whole Bible")],
    "family_soon": [("apocalypse12.com", "Revelation 12 in depth, the partner to this site")],
    "logo": ('<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#3a1414"/>'
             '<circle cx="32" cy="32" r="25" fill="none" stroke="#c9a243" stroke-width="1.5"/>'
             '<text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#e3c47a">XIII</text></svg>'),
}

# ---- core (shared with apocalypse13.org)
import json, re, shutil, datetime, hashlib, html as _html
import markdown

ROOT = pathlib.Path(__file__).parent
SRC, DIST, PREV = ROOT / "src", ROOT / "dist", ROOT / "preview"
SITE, SITE_NAME = CONFIG["site"], CONFIG["name"]
DOMAIN = SITE.split("//")[1]
# Until launch the site lives at a temporary address: not indexed, and every page says it is a work in progress.
PRELAUNCH = True
TODAY = datetime.date.today().isoformat()
CSS_VERSION = hashlib.md5((ROOT / "assets" / "style.css").read_bytes()).hexdigest()[:8]

def email_html():
    e = CONFIG["contact_email"]
    return (f'<a href="mailto:{e}">{e}</a>' if e
            else "the address on this site's Contact page (coming soon)")

# Charter rule 7 (truthful about who did what).
CREDITS = {
    "claude": "Researched and written with Claude, an AI model made by Anthropic. Directed by Fr. John.",
    "with": "Written by Fr. John, with research and drafting by Claude, an AI model made by Anthropic.",
    "fr-john": "Written by Fr. John.",
}
INDEPENDENCE = ("An independent project, part of The Ephesus Challenge. Fr. John is a Catholic diocesan priest, but this "
                "site is his own and is not affiliated with or endorsed by his diocese, the USCCB, Anthropic, or any other "
                "organization.")
FOUNDER = {"@type": "Person", "name": "Fr. John", "jobTitle": "Catholic diocesan priest"}
SITE_ORG = {"@type": "Organization", "name": SITE_NAME, "url": SITE + "/", "founder": FOUNDER}

def credit_of(meta):
    return CREDITS.get(meta.get("credit", CONFIG["default_credit"]), CREDITS["claude"])

REVIEWED = "✓ Reviewed by Fr. John"
def reviewed_mark(meta):
    d = meta.get("reviewed")
    if not d:
        return ""
    nice = datetime.date.fromisoformat(d).strftime("%B %-d, %Y")
    return f'<span class="reviewed" title="Read and approved by Fr. John on {nice}">{REVIEWED}</span>'

# Authority levels (framework, Layer 1) and standings (Scorecard).
AUTH = {"scripture": "Scripture", "church": "Church teaching", "fathers": "Fathers in agreement",
        "father": "A Father or Doctor", "theologian": "A theologian", "apparition": "Approved apparition (aid)",
        "disputed": "Disputed", "proposal": "Fr. John's proposal", "literature": "Literature"}
STAND = {"seen": "Seen", "partly": "Partly seen", "not": "Not yet seen", "against": "Against", "assess": "To assess",
         "met": "Met", "unmet": "Not met", "na": "Not claimed"}
def shortcodes(text):
    text = re.sub(r"\[\[auth:(\w+)\]\]", lambda m: f'<span class="auth a-{m.group(1)}">{AUTH[m.group(1)]}</span>', text)
    text = re.sub(r"\[\[st:(\w+)\]\]", lambda m: f'<span class="st st-{m.group(1)}">{STAND[m.group(1)]}</span>', text)
    return text

# Scripture references -> bible.usccb.org (from the apocalypse12.org build).
BOOKS = {"Genesis":"genesis","Exodus":"exodus","Leviticus":"leviticus","Numbers":"numbers","Deuteronomy":"deuteronomy",
"Joshua":"joshua","Judges":"judges","Ruth":"ruth","1 Samuel":"1samuel","2 Samuel":"2samuel","1 Kings":"1kings","2 Kings":"2kings",
"1 Chronicles":"1chronicles","2 Chronicles":"2chronicles","Ezra":"ezra","Nehemiah":"nehemiah","Tobit":"tobit","Judith":"judith",
"Esther":"esther","1 Maccabees":"1maccabees","2 Maccabees":"2maccabees","Job":"job","Psalms":"psalms","Psalm":"psalms",
"Proverbs":"proverbs","Ecclesiastes":"ecclesiastes","Wisdom":"wisdom","Sirach":"sirach",
"Isaiah":"isaiah","Jeremiah":"jeremiah","Lamentations":"lamentations","Baruch":"baruch","Ezekiel":"ezekiel","Daniel":"daniel",
"Hosea":"hosea","Joel":"joel","Amos":"amos","Micah":"micah","Zechariah":"zechariah","Malachi":"malachi",
"Matthew":"matthew","Mark":"mark","Luke":"luke","John":"john","Acts":"acts","Romans":"romans","1 Corinthians":"1corinthians",
"2 Corinthians":"2corinthians","Galatians":"galatians","Ephesians":"ephesians","Philippians":"philippians","Colossians":"colossians",
"1 Thessalonians":"1thessalonians","2 Thessalonians":"2thessalonians","1 Timothy":"1timothy","2 Timothy":"2timothy","Titus":"titus",
"Hebrews":"hebrews","James":"james","1 Peter":"1peter","2 Peter":"2peter","1 John":"1john","2 John":"2john",
"3 John":"3john","Jude":"jude","Revelation":"revelation",
"Gen":"genesis","Deut":"deuteronomy","Ezek":"ezekiel","Dan":"daniel","Matt":"matthew","Rev":"revelation","Rom":"romans",
"Col":"colossians","1 Macc":"1maccabees","1 Cor":"1corinthians","1 Tim":"1timothy","1 Pet":"1peter","2 Pet":"2peter"}
_names = sorted(BOOKS, key=len, reverse=True)
REF = re.compile(r"(?<![\w])(" + "|".join(re.escape(n) for n in _names) + r")\s(\d{1,3})(?:[:.](\d{1,3}[a-z]{0,2}(?:[–-]\d{1,3}[a-z]{0,2})?))?(?:[–-]\d{1,3}(?::\d{1,3})?)?(?!\w|:\d)")
REF_ABBR = re.compile(r"(?<![\w])(1|2) Thess\s(\d{1,2})(?::(\d{1,2}(?:[–-]\d{1,2})?))?")
SKIP = {"a", "h1", "h2", "h3", "title", "script", "style", "head", "button"}

def _walk(html, fn):
    out, depth = [], 0
    for part in re.split(r"(<[^>]+>)", html):
        if part.startswith("<"):
            m = re.match(r"<(/?)([a-zA-Z0-9]+)", part)
            if m and m.group(2).lower() in SKIP and not part.endswith("/>"):
                depth += -1 if m.group(1) else 1
            out.append(part)
        elif depth > 0 or not part.strip():
            out.append(part)
        else:
            out.append(fn(part))
    return "".join(out)

def _sref(slug, ch, text):
    return f'<a class="sref" href="https://bible.usccb.org/bible/{slug}/{ch}" target="_blank" rel="noopener">{text}</a>'

def link_scripture(html):
    def fn(part):
        part = REF_ABBR.sub(lambda m: _sref(f"{m.group(1)}thessalonians", m.group(2), m.group(0)), part)
        pieces = re.split(r"(<a [^>]+>.*?</a>)", part)
        return "".join(p if p.startswith("<a ") else REF.sub(lambda m: _sref(BOOKS[m.group(1)], m.group(2), m.group(0)), p)
                       for p in pieces)
    return _walk(html, fn)

_CCC = json.load(open(ROOT / "ccc_pages.json"))
def ccc_page(n):
    for a, z, pid in _CCC:
        if a <= n <= z:
            return f"https://www.vatican.va/archive/ENG0015/__P{pid}.HTM"
CCC_REF = re.compile(r"\b(CCC|Catechism)(\s|&nbsp;)(\d{1,4}(?:[–-]\d{1,4})?(?:,\s?\d{1,4}(?:[–-]\d{1,4})?)*)")
def _ccc_rep(m):
    word, sp, nums = m.group(1), m.group(2), m.group(3)
    n = int(re.match(r"\d+", nums).group(0))
    url = ccc_page(n) if 1 <= n <= 2865 else None
    return f'<a class="cref" href="{url}" target="_blank" rel="noopener">{word}{sp}{nums}</a>' if url else m.group(0)
def link_catechism(html):
    return _walk(html, lambda part: CCC_REF.sub(_ccc_rep, part))

def external_links(html):
    """Links to other sites open in a new tab."""
    return re.sub(r'<a href="(https?://[^"]+)">', r'<a href="\1" target="_blank" rel="noopener">', html)

MD = markdown.Markdown(extensions=["tables", "attr_list", "md_in_html", "sane_lists"])

def render_body(slug, meta, md_text):
    MD.reset()
    body = MD.convert(shortcodes(md_text))
    body = re.sub(r"<table>", '<div class="table-wrap"><table>', body).replace("</table>", "</table></div>")
    body = external_links(link_catechism(link_scripture(body.replace("<!--EMAIL-->", email_html()))))
    hero = f'<section class="hero"><div class="wrap">\n'
    if meta.get("kicker"):
        hero += f'<p class="kicker">{meta["kicker"]}</p>\n'
    hero += f'<h1>{meta.get("h1", meta["title"].split(" | ")[0])}</h1>\n'
    if meta.get("lead"):
        hero += f'<p class="lead">{meta["lead"]}</p>\n'
    hero += "</div></section>\n"
    crumbs = ""
    if meta.get("crumbs"):
        parts = [f'<a href="{u}">{n}</a>' for n, u in meta["crumbs"][:-1]] + [meta["crumbs"][-1][0]]
        crumbs = f'<p class="crumbs">{" › ".join(parts)}</p>\n'
    review = ""
    if meta.get("reviewed"):
        review = f'<p class="review-line">{reviewed_mark(meta)} <a class="review-how" href="/how-this-site-is-made">How this site is made</a></p>\n'
    elif slug not in ("404",):
        review = '<p class="review-line"><span class="draft-mark">Draft · awaiting Fr. John\'s review</span></p>\n'
    width = "wrap" if meta.get("wide") else "wrap narrow"
    return f'{hero}<div class="{width}">\n{crumbs}{review}{body}\n</div>'

def page(slug, meta, body):
    path = "/" if slug == "index" else f"/{slug}"
    nav = "".join(f'<li><a href="{h}"{" aria-current=page" if h == path else ""}>{t}</a></li>' for h, t in CONFIG["nav"])
    ld = ""
    if meta.get("crumbs"):
        items = [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + u} for i, (n, u) in enumerate(meta["crumbs"])]
        ld += '<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items}) + "</script>"
    art = {"@context": "https://schema.org", "@type": "WebPage", "name": meta["title"], "url": SITE + path,
           "inLanguage": "en", "author": SITE_ORG, "creditText": credit_of(meta)}
    if meta.get("reviewed"):
        art.update(reviewedBy=FOUNDER, lastReviewed=meta["reviewed"])
    ld += '<script type="application/ld+json">' + json.dumps(art) + "</script>"
    title, desc = _html.escape(meta["title"]), _html.escape(meta["description"])
    robots = '<meta name="robots" content="noindex">\n' if PRELAUNCH else ""
    wip = ('<div class="wip"><div class="wrap">Work in progress: this site is being built, and its pages are drafts until '
           'Fr. John has reviewed them.</div></div>\n') if PRELAUNCH else ""
    fam = "".join(f'<li><a href="{u}" target="_blank" rel="noopener">{n}</a>: {d}</li>' for u, n, d in CONFIG["family"])
    fam += "".join(f'<li>{n}: {d} <span class="soon">(coming)</span></li>' for n, d in CONFIG.get("family_soon", []))
    rev = (" " + reviewed_mark(meta)) if meta.get("reviewed") else ""
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
{robots}<link rel="canonical" href="{SITE}{path}">
<meta property="og:type" content="{'website' if slug == 'index' else 'article'}">
<meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{SITE}{path}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css?v={CSS_VERSION}">
{ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
{wip}<header class="site-head"><div class="wrap">
<a class="brand" href="/">{CONFIG['logo']}<span>{SITE_NAME}<small>{CONFIG['tagline']}</small></span></a>
<button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="nav" id="nav" aria-label="Main"><ul>{nav}</ul></nav>
</div></header>
<main id="main">
{body}
</main>
<footer class="site-foot"><div class="wrap">
<div class="cols">
<div><h4>{SITE_NAME}</h4><p>{CONFIG['about_blurb']}</p></div>
<div><h4>Explore</h4><ul>{''.join(f'<li><a href="{h}">{t}</a></li>' for h, t in CONFIG['nav'][1:])}<li><a href="/how-this-site-is-made">How This Site Is Made</a></li></ul></div>
<div><h4>The Ephesus Challenge</h4><ul>{fam}</ul></div>
</div>
<p class="credit">{credit_of(meta)}{rev} <a href="/how-this-site-is-made">How this site is made</a></p>
<p class="fine">{INDEPENDENCE}</p>
<p class="fine">© {datetime.date.today().year} Fr. John · Scripture quotations are from the New American Bible, Revised Edition © 2010, 1991, 1986, 1970 Confraternity of Christian Doctrine, Washington, D.C., used by permission. All rights reserved.</p>
</div></footer>
<script>
document.querySelector('.nav-toggle').addEventListener('click',function(){{var n=document.getElementById('nav');var o=n.classList.toggle('open');this.setAttribute('aria-expanded',o)}});
</script>
</body>
</html>
"""

def to_preview(html):
    def fix(m):
        attr, url = m.group(1), m.group(2)
        if url == "/":
            return f'{attr}="index.html"'
        if url.startswith("/assets/"):
            return f'{attr}="{url[1:]}"'
        frag = ""
        if "#" in url:
            url, frag = url.split("#", 1); frag = "#" + frag
        if url == "/":
            return f'{attr}="index.html{frag}"'
        return f'{attr}="{url[1:]}.html{frag}"'
    return re.sub(r'(href|src)="(/[^"/][^"]*|/|/#[^"]*)"', fix, html)

HTACCESS = """Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html
RewriteEngine On
@REDIRECT@# /page.html -> /page
RewriteCond %{THE_REQUEST} \\s/+(.+?)\\.html[\\s?] [NC]
RewriteRule ^ /%1 [L,R=301]
# /page -> page.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+?)/?$ $1.html [L]
"""
HTACCESS_REDIRECT = """# https and no www
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^ https://@DOMAIN@%{REQUEST_URI} [L,R=301]
""".replace("@DOMAIN@", DOMAIN)

def main():
    for d in (DIST, PREV):
        if d.exists():
            shutil.rmtree(d)
        (d / "assets").mkdir(parents=True)
        for f in (ROOT / "assets").iterdir():
            shutil.copy(f, d / "assets" / f.name)
        (d / "assets" / "favicon.svg").write_text(CONFIG["logo"].replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '))
    urls = []
    for f in sorted(SRC.glob("*.md")):
        text = f.read_text()
        m = re.match(r"<!--(\{.*?\})-->\n", text, re.S)
        meta = json.loads(m.group(1))
        html = page(f.stem, meta, render_body(f.stem, meta, text[m.end():]))
        (DIST / f"{f.stem}.html").write_text(html)
        (PREV / f"{f.stem}.html").write_text(to_preview(html))
        if f.stem != "404":
            urls.append("/" if f.stem == "index" else f"/{f.stem}")
    (DIST / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        "".join(f"  <url><loc>{SITE}{u}</loc><lastmod>{TODAY}</lastmod></url>\n" for u in urls) + "</urlset>\n")
    (DIST / "robots.txt").write_text("User-agent: *\nDisallow: /\n" if PRELAUNCH
                                     else f"User-agent: *\nAllow: /\nSitemap: {SITE}/sitemap.xml\n")
    (DIST / ".htaccess").write_text(HTACCESS.replace("@REDIRECT@", "" if PRELAUNCH else HTACCESS_REDIRECT))
    print("built", len(urls), "pages:", ", ".join(urls))

if __name__ == "__main__":
    main()
