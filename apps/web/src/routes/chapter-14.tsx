import type { Route } from './+types/chapter-14';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-14';
import { Hero } from '@/components/chapter-14/hero';
import { ChapterGuide } from '@/components/chapter-14/chapter-guide';
import { Symbols } from '@/components/chapter-14/symbols';
import { Reflection } from '@/components/chapter-14/reflection';
import { Endurance } from '@/components/chapter-14/endurance';
import { WhereItFits } from '@/components/chapter-14/where-it-fits';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 14 Explained: The Lamb on Mount Zion',
		description: 'A Catholic reading of Revelation 14: the Lamb and the 144,000 on Mount Zion, the three angels’ messages, the blessed dead, and the harvest of the earth.',
		image: heroImage,
		alt: 'Symbolic illustration of a white lamb on a mountain summit with a robed crowd, three angels in flight, and a field of ripe wheat',
		path: '/chapter-14',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 14', path: '/chapter-14' }],
	});
}

export default function Chapter14Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits /></>;
}
