import type { Route } from './+types/chapter-11';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-11';
import { Hero } from '@/components/chapter-11/hero';
import { ChapterGuide } from '@/components/chapter-11/chapter-guide';
import { Symbols } from '@/components/chapter-11/symbols';
import { Reflection } from '@/components/chapter-11/reflection';
import { Endurance } from '@/components/chapter-11/endurance';
import { WhereItFits } from '@/components/chapter-11/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-11';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 11 Explained: The Two Witnesses',
		description: 'A Catholic reading of Revelation 11: the measured temple, the two witnesses who die and rise, the seventh trumpet, and the ark of the covenant seen in heaven.',
		image: heroImage,
		alt: 'Symbolic illustration of two robed figures rising on a cloud toward an open heavenly temple where a golden ark glows amid lightning',
		path: '/chapter-11',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 11', path: '/chapter-11' }],
	});
}

export default function Chapter11Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
