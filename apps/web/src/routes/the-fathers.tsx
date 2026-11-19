import type { Route } from './+types/the-fathers';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { TheFathers } from '@/components/the-fathers/the-fathers';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'Who Are the Fathers Cited Here? | The Lamb\'s Victory',
		description: 'Short notes on the early Christian writers quoted in this study of Revelation: who they were, when they lived, and how much weight they carry.',
		image: DEFAULT_SOCIAL_IMAGE,
		path: '/the-fathers',
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'Who Are the Fathers Cited Here?',
				description: 'Short notes on the early Christian writers quoted in this study of Revelation: who they were, when they lived, and how much weight they carry.',
				path: '/the-fathers',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'The Fathers', path: '/the-fathers' },
			]),
		],
	});
}

export default function TheFathersPage() {
	return <TheFathers />;
}
