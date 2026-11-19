import type { Route } from './+types/forty-two-months';
import { studyMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE } from '@/lib/structured-data';
import { FortyTwoMonths } from '@/components/forty-two-months/forty-two-months';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Forty-Two Months in Revelation: What Does It Mean?',
		description: 'The 42 months, 1,260 days, and \u2018time, times and half a time\u2019 in Daniel and Revelation: a limited season of trial, not a countdown.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		path: '/topics/forty-two-months',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Forty-Two Months', path: '/topics/forty-two-months' }],
	});
}

export default function FortyTwoMonthsPage() {
	return <FortyTwoMonths />;
}
