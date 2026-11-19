import type { Route } from './+types/about';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, aboutPageJsonLd } from '@/lib/structured-data';
import { AboutStudy } from '@/components/about/about-study';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: "About The Lamb's Victory",
		description: "The Lamb's Victory, founded and directed by Fr. John, a Catholic diocesan priest, is a chapter-by-chapter Catholic study of the Book of Revelation.",
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: aboutPageJsonLd('/about'),
	});
}

export default function AboutPage() {
	return <AboutStudy />;
}
