import type { Route } from './+types/mark-of-the-beast';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { MarkOfTheBeast } from '@/components/mark-of-the-beast/mark-of-the-beast';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Mark of the Beast: A Catholic Explanation',
		description: 'What is the mark of the beast in Revelation 13? A Catholic reading of the mark, the seal of God, and allegiance in daily life.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/chapter-13/mark-of-the-beast',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 13', path: '/chapter-13' }, { name: 'The Mark of the Beast', path: '/chapter-13/mark-of-the-beast' }],
	});
}

export default function MarkOfTheBeastPage() {
	return <MarkOfTheBeast />;
}
