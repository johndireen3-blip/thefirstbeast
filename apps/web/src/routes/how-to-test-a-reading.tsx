import type { Route } from './+types/how-to-test-a-reading';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { HowToTestAReading } from '@/components/how-to-test-a-reading/how-to-test-a-reading';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'How to Test a Reading of Revelation: Eleven Questions | The Lamb\'s Victory',
		description: 'Eleven questions for testing any reading of the Book of Revelation: the text, the Church, the evidence, and the one who holds it.',
		image: DEFAULT_SOCIAL_IMAGE,
		path: '/how-to-test-a-reading',
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'How to Test a Reading of Revelation: Eleven Questions',
				description: 'Eleven questions for testing any reading of the Book of Revelation: the text, the Church, the evidence, and the one who holds it.',
				path: '/how-to-test-a-reading',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'How to Test a Reading', path: '/how-to-test-a-reading' },
			]),
		],
	});
}

export default function HowToTestAReadingPage() {
	return <HowToTestAReading />;
}
