import type { Route } from './+types/how-this-site-is-made';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { HowThisSiteIsMade } from '@/components/how-this-site-is-made/how-this-site-is-made';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: "How This Site Is Made — The Lamb's Victory",
		description: "How The Lamb's Victory is made: Fr. John directs, Claude researches and writes, within seven rules. How sources are checked and how to report a mistake.",
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'How This Site Is Made',
				description: "How The Lamb's Victory is made: Fr. John directs, Claude researches and writes, within seven rules. How sources are checked and how to report a mistake.",
				path: '/how-this-site-is-made',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'How This Site Is Made', path: '/how-this-site-is-made' },
			]),
		],
	});
}

export default function HowThisSiteIsMadePage() {
	return <HowThisSiteIsMade />;
}
