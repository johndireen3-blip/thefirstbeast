import type { Route } from './+types/the-seven-churches';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { TheSevenChurches } from '@/components/the-seven-churches/the-seven-churches';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Seven Churches of Revelation: What the Letters Say',
		description: 'What are the seven churches of Revelation 2 and 3? A Catholic guide to the seven letters, what Christ praises and rebukes, and how to read them today.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/the-seven-churches',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Seven Churches', path: '/topics/the-seven-churches' }],
	});
}

export default function TheSevenChurchesPage() {
	return <TheSevenChurches />;
}
