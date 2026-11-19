import type { Route } from './+types/chapter-19';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-19';
import { Hero } from '@/components/chapter-19/hero';
import { ChapterGuide } from '@/components/chapter-19/chapter-guide';
import { Symbols } from '@/components/chapter-19/symbols';
import { Reflection } from '@/components/chapter-19/reflection';
import { Endurance } from '@/components/chapter-19/endurance';
import { WhereItFits } from '@/components/chapter-19/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-19';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 19 Explained: The Wedding Feast of the Lamb',
		description: 'A Catholic reading of Revelation 19: heaven’s Alleluia, the wedding feast of the Lamb, and the rider on the white horse called the Word of God.',
		image: heroImage,
		alt: 'Symbolic illustration of a crowned rider on a white horse leading armies in white from an opened heaven, above a radiant wedding banquet table and a bride in white',
		path: '/chapter-19',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 19', path: '/chapter-19' }],
	});
}

export default function Chapter19Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
