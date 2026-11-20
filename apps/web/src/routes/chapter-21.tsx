import type { Route } from './+types/chapter-21';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-21';
import { Hero } from '@/components/chapter-21/hero';
import { ChapterGuide } from '@/components/chapter-21/chapter-guide';
import { Symbols } from '@/components/chapter-21/symbols';
import { Reflection } from '@/components/chapter-21/reflection';
import { Endurance } from '@/components/chapter-21/endurance';
import { WhereItFits } from '@/components/chapter-21/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-21';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 21 Explained: New Heaven, New Earth, New Jerusalem',
		description: 'A Catholic reading of Revelation 21: a new heaven and a new earth, every tear wiped away, and the new Jerusalem, the Bride of the Lamb.',
		image: heroImage,
		alt: 'Symbolic illustration of a radiant golden city with pearl gates and jeweled foundations descending from the sky onto a renewed earth',
		path: '/chapter-21',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 21', path: '/chapter-21' }],
	});
}

export default function Chapter21Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
