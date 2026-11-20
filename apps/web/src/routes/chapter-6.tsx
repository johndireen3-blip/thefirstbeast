import type { Route } from './+types/chapter-6';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-6';
import { Hero } from '@/components/chapter-6/hero';
import { ChapterGuide } from '@/components/chapter-6/chapter-guide';
import { Symbols } from '@/components/chapter-6/symbols';
import { Reflection } from '@/components/chapter-6/reflection';
import { Endurance } from '@/components/chapter-6/endurance';
import { WhereItFits } from '@/components/chapter-6/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-6';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 6 Explained: The Four Horsemen and Six Seals',
		description: 'A Catholic reading of Revelation 6: the four horsemen, the martyrs beneath the altar crying “How long?”, and the cosmic signs of the sixth seal.',
		image: heroImage,
		alt: 'Symbolic illustration of four horses, white, red, black and pale green, riding across a darkened plain beneath a scroll with broken seals',
		path: '/chapter-6',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 6', path: '/chapter-6' }],
	});
}

export default function Chapter6Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
