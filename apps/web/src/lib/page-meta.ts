/**
 * Thin wrappers around `seo()` that add the social/structured-data tags every
 * study page shares, so route modules stay short.
 */
import { seo, type SeoArgs, type SeoInput } from '@/lib/seo';
import { articleJsonLd, breadcrumbJsonLd, type JsonLdObject } from '@/lib/structured-data';

export type StudyMetaInput = {
	title: string;
	description: string;
	/** Absolute or root-relative illustration URL. */
	image: string;
	alt: string;
	/** Canonical path, e.g. "/chapter-1". */
	path: string;
	/** Breadcrumb trail, beginning with Home. */
	breadcrumb: { name: string; path: string }[];
	/** Extra JSON-LD blocks beyond the Article + Breadcrumb. */
	extraJsonLd?: JsonLdObject[];
};

/**
 * Article pages (chapters, Chapter 13 symbol pages, /topics/*): builds the
 * Article + BreadcrumbList JSON-LD, the og:image / twitter:image tags, and the
 * og:image:alt tag.
 */
export function studyMeta(args: SeoArgs, input: StudyMetaInput) {
	return [
		...seo(args, {
			title: input.title,
			description: input.description,
			image: input.image,
			jsonLd: [
				articleJsonLd({
					title: input.title,
					description: input.description,
					image: input.image,
					path: input.path,
				}),
				breadcrumbJsonLd(input.breadcrumb),
				...(input.extraJsonLd ?? []),
			],
		}),
		{ property: 'og:image:alt', content: input.alt },
		{ property: 'og:site_name', content: "The Lamb's Victory" },
		{ property: 'og:locale', content: 'en_US' },
	];
}

/**
 * Non-article pages (home, about, FAQ, etc.): keeps any JSON-LD the page already
 * had and adds the og:image / twitter:image / og:image:alt tags.
 */
export function socialMeta(
	args: SeoArgs,
	input: SeoInput & { alt?: string },
) {
	const tags = seo(args, input);
	if (input.image && input.alt) {
		tags.push({ property: 'og:image:alt', content: input.alt });
	}
	tags.push(
		{ property: 'og:site_name', content: "The Lamb's Victory" },
		{ property: 'og:locale', content: 'en_US' },
	);
	return tags;
}
