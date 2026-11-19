import type { Route } from './+types/faq';
import { siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { faqEntries } from '@/data/faq';
import { Faq } from '@/components/faq/faq';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, location.pathname);

	return socialMeta({ matches, location }, {
		title: 'Book of Revelation FAQ: Catholic Answers to Common Questions',
		description: 'Catholic answers to common questions about Revelation: the rapture, the 144,000, the mark of the beast, 666, Armageddon, Babylon and the millennium.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqEntries.map(entry => ({
				'@type': 'Question',
				name: entry.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: entry.answer,
				},
			})),
			url,
		},
	});
}

export default function FaqPage() {
	return <Faq />;
}
