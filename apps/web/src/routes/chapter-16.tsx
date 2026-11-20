import type { Route } from './+types/chapter-16';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-16';
import { Hero } from '@/components/chapter-16/hero';
import { ChapterGuide } from '@/components/chapter-16/chapter-guide';
import { Symbols } from '@/components/chapter-16/symbols';
import { Reflection } from '@/components/chapter-16/reflection';
import { Endurance } from '@/components/chapter-16/endurance';
import { WhereItFits } from '@/components/chapter-16/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-16';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 16 Explained: The Seven Bowls and Armageddon',
		description: 'A Catholic reading of Revelation 16: the seven bowls of God’s wrath, the plagues of Egypt retold, the meaning of Armageddon, and the call to stay awake.',
		image: heroImage,
		alt: 'Symbolic illustration of seven angels pouring golden bowls from a stormy sky onto a dark earth with a dried river and a distant mountain',
		path: '/chapter-16',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 16', path: '/chapter-16' }],
	});
}

export default function Chapter16Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
