import type { Route } from './+types/all-pages';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { AllPages } from '@/components/all-pages/all-pages';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: "All Pages: A Guide to The Lamb's Victory",
		description: "Every page of The Lamb's Victory in one place: the twenty-two chapters of Revelation, the Chapter 13 studies, and the topic pages.",
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: "All Pages: A Guide to The Lamb's Victory",
				description: "Every page of The Lamb's Victory in one place: the twenty-two chapters of Revelation, the Chapter 13 studies, and the topic pages.",
				path: '/all-pages',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'All Pages', path: '/all-pages' },
			]),
		],
	});
}

export default function AllPagesPage() {
	return <AllPages />;
}
