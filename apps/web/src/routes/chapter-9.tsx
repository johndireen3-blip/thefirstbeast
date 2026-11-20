import type { Route } from './+types/chapter-9';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-9';
import { Hero } from '@/components/chapter-9/hero';
import { ChapterGuide } from '@/components/chapter-9/chapter-guide';
import { Symbols } from '@/components/chapter-9/symbols';
import { Reflection } from '@/components/chapter-9/reflection';
import { Endurance } from '@/components/chapter-9/endurance';
import { WhereItFits } from '@/components/chapter-9/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-9';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 9 Explained: Locusts, Abaddon and the Euphrates',
		description: 'A Catholic reading of Revelation 9: the locusts from the abyss, their king Abaddon, the army from the Euphrates, and a world that still refuses to repent.',
		image: heroImage,
		alt: 'Symbolic illustration of smoke and shadowy locusts rising from a pit against a dim sun, with figures marked with light standing untouched',
		path: '/chapter-9',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 9', path: '/chapter-9' }],
	});
}

export default function Chapter9Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
