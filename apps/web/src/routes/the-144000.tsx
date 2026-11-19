import type { Route } from './+types/the-144000';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { The144000 } from '@/components/the-144000/the-144000';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Who Are the 144,000 in Revelation? A Catholic Answer',
		description: 'The 144,000 of Revelation 7 and 14 are the whole people of God, counted as his complete Israel. The number is a symbol of fullness, not a limit.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/the-144000',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The 144,000', path: '/topics/the-144000' }],
	});
}

export default function The144000Page() {
	return <The144000 />;
}
