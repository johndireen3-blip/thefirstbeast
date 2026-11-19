import type { Route } from './+types/gog-and-magog';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { GogAndMagog } from '@/components/gog-and-magog/gog-and-magog';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Gog and Magog in Revelation 20: What Do They Mean?',
		description: 'Gog and Magog in Revelation 20 are not a country on a map. They stand for all the nations deceived into a last attack on God\'s people, which God himself ends.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/gog-and-magog',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Gog and Magog', path: '/topics/gog-and-magog' }],
	});
}

export default function GogAndMagogPage() {
	return <GogAndMagog />;
}
