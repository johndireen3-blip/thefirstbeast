import type { Route } from './+types/chapter-18';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-18';
import { Hero } from '@/components/chapter-18/hero';
import { ChapterGuide } from '@/components/chapter-18/chapter-guide';
import { Symbols } from '@/components/chapter-18/symbols';
import { Reflection } from '@/components/chapter-18/reflection';
import { Endurance } from '@/components/chapter-18/endurance';
import { WhereItFits } from '@/components/chapter-18/where-it-fits';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 18 Explained: The Fall of Babylon',
		description: 'A Catholic reading of Revelation 18: the fall of Babylon, the call to come out of her, the laments of kings and merchants, and the millstone in the sea.',
		image: heroImage,
		alt: 'Symbolic illustration of a great city burning on the horizon, ships watching from the sea, and an angel hurling a millstone into the waves',
		path: '/chapter-18',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 18', path: '/chapter-18' }],
	});
}

export default function Chapter18Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits /></>;
}
