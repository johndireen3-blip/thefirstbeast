import type { Route } from './+types/chapter-12';
import { studyMeta } from '@/lib/page-meta';
import { Hero } from '@/components/chapter-12/hero';
import { ChapterGuide } from '@/components/chapter-12/chapter-guide';
import { Symbols } from '@/components/chapter-12/symbols';
import { Reflection } from '@/components/chapter-12/reflection';
import { Endurance } from '@/components/chapter-12/endurance';
import { WhereItFits } from '@/components/chapter-12/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-12';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 12 Explained: The Woman and the Dragon',
		description: 'A Catholic reading of Revelation 12: the woman clothed with the sun, the dragon, Michael’s victory, and God’s protection of his people.',
		image: 'https://images.hostinger.com/84ac0253-2188-479e-af0c-193fa8f9cdc4.png',
		alt: 'Symbolic illustration of a woman crowned with twelve stars above a crescent moon, with a red dragon below',
		path: '/chapter-12',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 12', path: '/chapter-12' }],
	});
}

export default function Chapter12Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
