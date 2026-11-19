import type { Route } from './+types/the-second-beast';
import { studyMeta } from '@/lib/page-meta';
import { TheSecondBeast } from '@/components/the-second-beast/the-second-beast';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Beast from the Earth & the False Prophet',
		description: "Revelation 13:11–17: the lamb-like beast that speaks like a dragon, its signs and image, and why Revelation later calls it the false prophet.",
		image: 'https://images.hostinger.com/18a5de28-4e5b-4275-a809-e3452415c86c.png',
		alt: 'Symbolic illustration of a two-horned creature on a rocky ridge beneath a stormy sky',
		path: '/chapter-13/the-second-beast',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 13', path: '/chapter-13' }, { name: 'The Beast from the Earth', path: '/chapter-13/the-second-beast' }],
	});
}

export default function TheSecondBeastPage() {
	return <TheSecondBeast />;
}
