import type { Route } from './+types/the-two-witnesses';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { TheTwoWitnesses } from '@/components/the-two-witnesses/the-two-witnesses';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Who Are the Two Witnesses in Revelation 11? A Catholic Answer',
		description: 'The two witnesses of Revelation 11: what John sees, what the Fathers said about Elijah and Enoch, what the Church has left open, and how to keep watch.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/the-two-witnesses',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Two Witnesses', path: '/topics/the-two-witnesses' }],
	});
}

export default function TheTwoWitnessesPage() {
	return <TheTwoWitnesses />;
}
