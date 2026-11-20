import type { Route } from './+types/chapter-4';
import { studyMeta } from '@/lib/page-meta';
import { Hero } from '@/components/chapter-4/hero';
import { ChapterGuide } from '@/components/chapter-4/chapter-guide';
import { Symbols } from '@/components/chapter-4/symbols';
import { Reflection } from '@/components/chapter-4/reflection';
import { Endurance } from '@/components/chapter-4/endurance';
import { WhereItFits } from '@/components/chapter-4/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-4';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 4 Explained: The Throne Room of Heaven',
		description: 'A Catholic reading of Revelation 4: John’s vision of God’s throne, the twenty-four elders, the four living creatures and the endless song “Holy, holy, holy.”',
		image: 'https://images.hostinger.com/7bede589-2163-47ca-9a94-877e18aa7409.png',
		alt: 'Symbolic illustration of a radiant throne with an emerald rainbow, seven torches and a sea of glass, with elders in white casting down golden crowns',
		path: '/chapter-4',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 4', path: '/chapter-4' }],
	});
}

export default function Chapter4Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
