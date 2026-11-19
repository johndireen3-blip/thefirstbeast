import type { Route } from './+types/the-first-beast';
import { studyMeta } from '@/lib/page-meta';
import { TheFirstBeast } from '@/components/the-first-beast/the-first-beast';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Beast from the Sea (Revelation 13:1–10)',
		description: "Who is the first beast of Revelation 13? Its roots in Daniel 7, the Roman Empire, the healed wound, and what it means for Christians today.",
		image: 'https://images.hostinger.com/1a06c992-6c8b-4ad5-92b8-cc98f6ffd381.png',
		alt: 'Artistic interpretation of a many-headed beast rising from a dark, storm-driven sea',
		path: '/chapter-13/the-first-beast',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 13', path: '/chapter-13' }, { name: 'The Beast from the Sea', path: '/chapter-13/the-first-beast' }],
	});
}

export default function TheFirstBeastPage() {
	return <TheFirstBeast />;
}
