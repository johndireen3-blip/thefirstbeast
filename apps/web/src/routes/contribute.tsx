import type { Route } from './+types/contribute';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { Contribute } from '@/components/contribute/contribute';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: "Write for The Lamb's Victory",
		description: 'Guidelines for scholars, clergy and teachers who wish to contribute a reflection or essay on the Book of Revelation.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: "Write for The Lamb's Victory",
				description: 'Guidelines for scholars, clergy and teachers who wish to contribute a reflection or essay on the Book of Revelation.',
				path: '/contribute',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'Contribute', path: '/contribute' },
			]),
		],
	});
}

export default function ContributePage() {
	return <Contribute />;
}
