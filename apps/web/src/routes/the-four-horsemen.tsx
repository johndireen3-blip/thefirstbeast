import type { Route } from './+types/the-four-horsemen';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { TheFourHorsemen } from '@/components/the-four-horsemen/the-four-horsemen';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Four Horsemen of the Apocalypse: A Catholic Answer',
		description: 'Who are the four horsemen of Revelation 6? Conquest, war, famine and death, what the Fathers said about the white rider, and what the text leaves open.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/the-four-horsemen',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Four Horsemen', path: '/topics/the-four-horsemen' }],
	});
}

export default function TheFourHorsemenPage() {
	return <TheFourHorsemen />;
}
