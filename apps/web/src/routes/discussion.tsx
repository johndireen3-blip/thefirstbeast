import type { Route } from './+types/discussion';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { Discussion } from '@/components/discussion/discussion';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'Questions & Discussion on the Book of Revelation',
		description: 'Submit a question or reflection on the Book of Revelation. Contributions are moderated and selected responses are published.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'Questions & Discussion on the Book of Revelation',
				description: 'Submit a question or reflection on the Book of Revelation. Contributions are moderated and selected responses are published.',
				path: '/discussion',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'Discussion', path: '/discussion' },
			]),
		],
	});
}

export default function DiscussionPage() {
	return <Discussion />;
}
