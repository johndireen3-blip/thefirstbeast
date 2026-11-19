import type { Route } from './+types/chapter-7';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-7';
import { Hero } from '@/components/chapter-7/hero';
import { ChapterGuide } from '@/components/chapter-7/chapter-guide';
import { Symbols } from '@/components/chapter-7/symbols';
import { Reflection } from '@/components/chapter-7/reflection';
import { Endurance } from '@/components/chapter-7/endurance';
import { WhereItFits } from '@/components/chapter-7/where-it-fits';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 7 Explained: The 144,000 and the Great Multitude',
		description: 'A Catholic reading of Revelation 7: God’s servants sealed, the meaning of the 144,000, and the countless multitude in white washed in the blood of the Lamb.',
		image: heroImage,
		alt: 'Symbolic illustration of a vast multitude in white robes with palm branches before a throne of light, with four angels holding back the winds',
		path: '/chapter-7',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 7', path: '/chapter-7' }],
	});
}

export default function Chapter7Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits /></>;
}
