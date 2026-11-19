import type { Route } from './+types/chapter-8';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-8';
import { Hero } from '@/components/chapter-8/hero';
import { ChapterGuide } from '@/components/chapter-8/chapter-guide';
import { Symbols } from '@/components/chapter-8/symbols';
import { Reflection } from '@/components/chapter-8/reflection';
import { Endurance } from '@/components/chapter-8/endurance';
import { WhereItFits } from '@/components/chapter-8/where-it-fits';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 8 Explained: Silence and the First Trumpets',
		description: 'A Catholic reading of Revelation 8: the seventh seal, half an hour of silence, the prayers of the saints rising as incense, and the first four trumpets.',
		image: heroImage,
		alt: 'Symbolic illustration of an angel with a gold censer at a golden altar, incense rising, and seven angels holding trumpets',
		path: '/chapter-8',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 8', path: '/chapter-8' }],
	});
}

export default function Chapter8Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits /></>;
}
