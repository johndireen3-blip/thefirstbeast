import type { Route } from './+types/chapter-3';
import { studyMeta } from '@/lib/page-meta';
import { Hero } from '@/components/chapter-3/hero';
import { ChapterGuide } from '@/components/chapter-3/chapter-guide';
import { Symbols } from '@/components/chapter-3/symbols';
import { Reflection } from '@/components/chapter-3/reflection';
import { Endurance } from '@/components/chapter-3/endurance';
import { WhereItFits } from '@/components/chapter-3/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-3';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 3 Explained: Sardis, Philadelphia and Laodicea',
		description: 'A Catholic reading of Revelation 3: Christ’s letters to Sardis, Philadelphia and lukewarm Laodicea, and his promise to stand at the door and knock.',
		image: 'https://images.hostinger.com/91c7432f-c342-43c4-8819-81090d8b8281.png',
		alt: 'Symbolic illustration of a robed figure knocking at a weathered wooden door at dusk, warm light behind it',
		path: '/chapter-3',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 3', path: '/chapter-3' }],
	});
}

export default function Chapter3Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
