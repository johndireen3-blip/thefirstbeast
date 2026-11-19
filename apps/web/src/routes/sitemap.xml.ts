import type { Route } from './+types/sitemap.xml';
import { SITE_ORIGIN } from '@/lib/structured-data';

type SitemapEntry = {
	path: string;
	lastmod?: string;
};

const STATIC_PATHS = [
	'/',
	'/chapter-1',
	'/chapter-2',
	'/chapter-3',
	'/chapter-4',
	'/chapter-5',
	'/chapter-6',
	'/chapter-7',
	'/chapter-8',
	'/chapter-9',
	'/chapter-10',
	'/chapter-11',
	'/chapter-12',
	'/chapter-13',
	'/chapter-14',
	'/chapter-15',
	'/chapter-16',
	'/chapter-17',
	'/chapter-18',
	'/chapter-19',
	'/chapter-20',
	'/chapter-21',
	'/chapter-22',
	'/chapter-13/the-first-beast',
	'/chapter-13/the-second-beast',
	'/chapter-13/mark-of-the-beast',
	'/chapter-13/666-number-of-the-beast',
	'/topics/forty-two-months',
	'/topics/numbers-in-revelation',
	'/topics/revelation-and-the-mass',
	'/topics/the-millennium',
	'/topics/babylon',
	'/topics/armageddon',
	'/topics/the-rapture',
	'/topics/the-144000',
	'/topics/the-two-witnesses',
	'/topics/gog-and-magog',
	'/topics/the-four-horsemen',
	'/topics/the-antichrist',
	'/topics/the-seven-churches',
	'/about',
	'/how-this-site-is-made',
	'/how-catholics-read-revelation',
	'/how-to-test-a-reading',
	'/further-reading',
	'/faq',
	'/discussion',
	'/contribute',
	'/all-pages',
];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function toLoc(origin: string, path: string): string {
	return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

function serializeSitemap(origin: string, entries: SitemapEntry[]): string {
	const urls = entries
		.map(entry => {
			const loc = escapeXml(toLoc(origin, entry.path));
			const lastmod = entry.lastmod
				? `\n\t\t<lastmod>${escapeXml(entry.lastmod)}</lastmod>`
				: '';

			return `\t<url>\n\t\t<loc>${loc}</loc>${lastmod}\n\t</url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * Public dynamic URLs (blog posts, PDPs, articles).
 * Return `{ path, lastmod }` in the same change that adds a collection.
 * Return `[]` only while the site has no public records; clear those URLs
 * again in the same change that removes the collection.
 */
async function getDynamicEntries(): Promise<SitemapEntry[]> {
	return [];
}

export async function loader() {
	const origin = SITE_ORIGIN;
	const entries: SitemapEntry[] = [
		...STATIC_PATHS.map(path => ({ path, lastmod: '2026-10-15' })),
		...(await getDynamicEntries()),
	];

	return new Response(serializeSitemap(origin, entries), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
