import type { Route } from './+types/home';
import { siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { socialMeta } from '@/lib/page-meta';
import { organizationJsonLd, DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { Hero } from '@/components/home/hero';
import { WhyVictory } from '@/components/home/why-victory';
import { Hinge } from '@/components/home/hinge';
import { ReadWithCare } from '@/components/home/read-with-care';
import { ChaptersGrid } from '@/components/home/chapters-grid';
import { QuestionsGrid } from '@/components/home/questions-grid';
import { JoinStudy } from '@/components/home/join-study';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, location.pathname);

	return socialMeta({ matches, location }, {
		title: "Revelation Explained: A Catholic Study | The Lamb's Victory",
		description: "A chapter-by-chapter Catholic study of the Book of Revelation: its symbols, its history, and its message of Christ's victory and faithful endurance.",
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: "The Lamb's Victory",
			url,
			description: 'A chapter-by-chapter Catholic study of the Book of Revelation.',
			},
			organizationJsonLd(),
		],
	});
}

export default function HomePage() {
	return <><Hero /><WhyVictory /><Hinge /><ReadWithCare /><ChaptersGrid /><QuestionsGrid /><JoinStudy /></>;
}
