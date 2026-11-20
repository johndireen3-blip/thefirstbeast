import type { Route } from './+types/chapter-10';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-10';
import { Hero } from '@/components/chapter-10/hero';
import { ChapterGuide } from '@/components/chapter-10/chapter-guide';
import { Symbols } from '@/components/chapter-10/symbols';
import { Reflection } from '@/components/chapter-10/reflection';
import { Endurance } from '@/components/chapter-10/endurance';
import { WhereItFits } from '@/components/chapter-10/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-10';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 10 Explained: The Angel and the Little Scroll',
		description: 'A Catholic reading of Revelation 10: the mighty angel, the little scroll sweet in the mouth and bitter in the stomach, and John’s call to prophesy again.',
		image: heroImage,
		alt: 'Symbolic illustration of a colossal angel wrapped in cloud with a rainbow, one foot on the sea and one on the land, holding a small open scroll',
		path: '/chapter-10',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 10', path: '/chapter-10' }],
	});
}

export default function Chapter10Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
