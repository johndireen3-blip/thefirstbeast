import type { Route } from './+types/chapter-2';
import { studyMeta } from '@/lib/page-meta';
import { Hero } from '@/components/chapter-2/hero';
import { ChapterGuide } from '@/components/chapter-2/chapter-guide';
import { Symbols } from '@/components/chapter-2/symbols';
import { Reflection } from '@/components/chapter-2/reflection';
import { Endurance } from '@/components/chapter-2/endurance';
import { WhereItFits } from '@/components/chapter-2/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-2';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 2 Explained: Letters to the Four Churches',
		description: 'A Catholic reading of Revelation 2: Christ’s letters to four churches, with their praise, warnings and promises to those who are victorious.',
		image: 'https://images.hostinger.com/bb538352-02c0-4987-b00b-e98b4719e69f.png',
		alt: 'Symbolic illustration of four lit oil lamps on golden stands above a map of the cities of Roman Asia along the Aegean coast',
		path: '/chapter-2',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 2', path: '/chapter-2' }],
	});
}

export default function Chapter2Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
