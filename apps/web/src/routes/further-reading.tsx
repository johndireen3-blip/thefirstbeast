import type { Route } from './+types/further-reading';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { FurtherReading } from '@/components/further-reading/further-reading';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'Revelation Commentaries: Annotated Reading List',
		description: 'Trusted commentaries and studies on Revelation, Catholic and other traditions, with notes on approach and level for each.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'Further Reading on the Book of Revelation',
				description: 'Trusted commentaries and studies on Revelation, Catholic and other traditions, with notes on approach and level for each.',
				path: '/further-reading',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'Further Reading', path: '/further-reading' },
			]),
		],
	});
}

export default function FurtherReadingPage() {
	return <FurtherReading />;
}
