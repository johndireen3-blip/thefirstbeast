import type { Route } from './+types/666-number-of-the-beast';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { NumberOfTheBeast } from '@/components/666-number-of-the-beast/number-of-the-beast';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: '666: The Number of the Beast Explained',
		description: 'Why 666? Gematria, the Nero reading, the ancient 616 variant, and how the Church Fathers approached the number in Revelation 13:18.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/chapter-13/666-number-of-the-beast',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 13', path: '/chapter-13' }, { name: '666: The Number of the Beast', path: '/chapter-13/666-number-of-the-beast' }],
	});
}

export default function NumberOfTheBeastPage() {
	return <NumberOfTheBeast />;
}
