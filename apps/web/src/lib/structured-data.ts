/**
 * Hard-coded canonical origin and JSON-LD builders shared across the site.
 *
 * The site answers on both https://thelambsvictory.org and its www variant, so
 * every canonical URL, og:url and structured-data URL is pinned to the non-www
 * origin regardless of which host served the request.
 */
export const SITE_ORIGIN = 'https://thelambsvictory.org';

/** Local default social card, used on pages with no illustration of their own. */
export const DEFAULT_SOCIAL_IMAGE = `${SITE_ORIGIN}/social-default.png`;

/** Site logo (the lamb mark) used in Organization/publisher JSON-LD. */
export const SITE_LOGO = `${SITE_ORIGIN}/favicon.svg`;

/** Approximate creation / last-change dates for the study pages. */
export const DATE_PUBLISHED = '2026-10-14';
export const DATE_MODIFIED = '2026-10-15';

/**
 * Charter rule 7 (truthful about who did what): Fr. John founded and directs the
 * study; its pages are researched and written with Claude. He is named as
 * founder, never as the author of pages he did not write.
 */
const FOUNDER = {
	'@type': 'Person',
	name: 'Fr. John',
	url: `${SITE_ORIGIN}/about`,
	jobTitle: 'Catholic diocesan priest',
	description: "Founder and director of The Lamb's Victory",
};

/** The credit line shown in every page footer, repeated in structured data. */
export const CREDIT_LINE = 'Researched and written with Claude, an AI model made by Anthropic. Directed by Fr. John.';

const PUBLISHER = {
	'@type': 'Organization',
	name: "The Lamb's Victory",
	url: `${SITE_ORIGIN}/`,
	logo: { '@type': 'ImageObject', url: SITE_LOGO },
	founder: FOUNDER,
};

export type JsonLdObject = Record<string, unknown>;

export function articleJsonLd(opts: {
	title: string;
	description: string;
	/** Absolute image URL (the page's illustration or the default social image). */
	image: string;
	/** Canonical path, e.g. "/chapter-1". */
	path: string;
	datePublished?: string;
	dateModified?: string;
}): JsonLdObject {
	const url = `${SITE_ORIGIN}${opts.path}`;
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: opts.title,
		description: opts.description,
		image: opts.image,
		datePublished: opts.datePublished ?? DATE_PUBLISHED,
		dateModified: opts.dateModified ?? DATE_MODIFIED,
		inLanguage: 'en',
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		author: PUBLISHER,
		creditText: CREDIT_LINE,
		publisher: PUBLISHER,
		about: { '@type': 'Thing', name: 'Book of Revelation' },
	};
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${SITE_ORIGIN}${item.path}`,
		})),
	};
}

export function webPageJsonLd(opts: {
	name: string;
	description: string;
	/** Canonical path, e.g. "/about". */
	path: string;
}): JsonLdObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: opts.name,
		description: opts.description,
		url: `${SITE_ORIGIN}${opts.path}`,
		inLanguage: 'en',
		isPartOf: {
			'@type': 'WebSite',
			name: "The Lamb's Victory",
			url: `${SITE_ORIGIN}/`,
		},
	};
}

export function organizationJsonLd(): JsonLdObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: "The Lamb's Victory",
		url: `${SITE_ORIGIN}/`,
		logo: SITE_LOGO,
		description: 'An independent Catholic study of the Book of Revelation, chapter by chapter.',
		founder: FOUNDER,
	};
}

export function aboutPageJsonLd(path: string): JsonLdObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		mainEntity: {
			...PUBLISHER,
			description: 'An independent Catholic study of the Book of Revelation, chapter by chapter.',
		},
		creditText: CREDIT_LINE,
		url: `${SITE_ORIGIN}${path}`,
	};
}

/** Absolute image URL for a page's illustration, falling back to the default social image. */
export function pageImage(image: string | undefined): string {
	return image ?? DEFAULT_SOCIAL_IMAGE;
}
