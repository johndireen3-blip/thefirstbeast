import type { Route } from './+types/chapter-15';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-15';
import { Hero } from '@/components/chapter-15/hero';
import { ChapterGuide } from '@/components/chapter-15/chapter-guide';
import { Symbols } from '@/components/chapter-15/symbols';
import { Reflection } from '@/components/chapter-15/reflection';
import { Endurance } from '@/components/chapter-15/endurance';
import { WhereItFits } from '@/components/chapter-15/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-15';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 15 Explained: The Song of Moses and the Lamb',
		description: 'A Catholic reading of Revelation 15: the victors on the sea of glass, the song of Moses and the Lamb, and the seven angels who receive the bowls of God’s wrath.',
		image: heroImage,
		alt: 'Symbolic illustration of robed figures with harps on a sea of glass mixed with fire, before an open heavenly temple where seven angels carry golden bowls',
		path: '/chapter-15',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 15', path: '/chapter-15' }],
	});
}

export default function Chapter15Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
