import type { Route } from './+types/chapter-13';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter';
import { Hero } from '@/components/chapter-13/hero';
import { ChapterGuide } from '@/components/chapter-13/chapter-guide';
import { Symbols } from '@/components/chapter-13/symbols';
import { Reflection } from '@/components/chapter-13/reflection';
import { Endurance } from '@/components/chapter-13/endurance';
import { WhereItFits } from '@/components/chapter-13/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-13';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 13 Explained: The Two Beasts, the Mark and 666',
		description: 'A Catholic reading of Revelation 13: the beast from the sea, the beast from the earth, the mark of the beast and 666, each a counterfeit of the Lamb.',
		image: heroImage,
		alt: 'Artistic interpretation of a many-headed beast rising from a dark, storm-driven sea',
		path: '/chapter-13',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 13', path: '/chapter-13' }],
	});
}

export default function Chapter13Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
