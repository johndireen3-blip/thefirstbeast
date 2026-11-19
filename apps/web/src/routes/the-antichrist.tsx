import type { Route } from './+types/the-antichrist';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { TheAntichrist } from '@/components/the-antichrist/the-antichrist';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Antichrist: What the Catholic Church Teaches',
		description: 'What the Catholic Church teaches about the Antichrist: a final trial and a religious deception in which man puts himself in the place of God. She names no one and sets no date.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/the-antichrist',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Antichrist', path: '/topics/the-antichrist' }],
	});
}

export default function TheAntichristPage() {
	return <TheAntichrist />;
}
