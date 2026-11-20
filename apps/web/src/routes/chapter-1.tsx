import type { Route } from './+types/chapter-1';
import { studyMeta } from '@/lib/page-meta';
import { Hero } from '@/components/chapter-1/hero';
import { ChapterGuide } from '@/components/chapter-1/chapter-guide';
import { Symbols } from '@/components/chapter-1/symbols';
import { Reflection } from '@/components/chapter-1/reflection';
import { Endurance } from '@/components/chapter-1/endurance';
import { WhereItFits } from '@/components/chapter-1/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-1';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 1 Explained: The Son of Man Among the Lampstands',
		description: 'A Catholic reading of Revelation 1: John on Patmos, the Lord’s Day vision of the risen Christ, and the seven lampstands and seven stars.',
		image: 'https://images.hostinger.com/f609b2fd-167b-489c-8e0d-f66aa0387a1d.png',
		alt: 'Symbolic illustration of the risen Christ in a long robe and golden sash among seven golden lampstands, holding seven stars',
		path: '/chapter-1',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 1', path: '/chapter-1' }],
	});
}

export default function Chapter1Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
