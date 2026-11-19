import type { Route } from './+types/how-catholics-read-revelation';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { HowCatholicsRead } from '@/components/how-to-read/how-catholics-read';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'How Catholics Read the Book of Revelation',
		description: 'How the Catholic Church reads the Apocalypse: the literal and spiritual senses, the Church Fathers, and why it is not a code for predicting dates.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'How Catholics Read the Book of Revelation',
				description: 'How the Catholic Church reads the Apocalypse: the literal and spiritual senses, the Church Fathers, and why it is not a code for predicting dates.',
				path: '/how-catholics-read-revelation',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'How Catholics Read Revelation', path: '/how-catholics-read-revelation' },
			]),
		],
	});
}

export default function HowToReadPage() {
	return <HowCatholicsRead />;
}
