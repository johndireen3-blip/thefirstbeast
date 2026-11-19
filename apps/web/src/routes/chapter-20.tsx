import type { Route } from './+types/chapter-20';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-20';
import { Hero } from '@/components/chapter-20/hero';
import { ChapterGuide } from '@/components/chapter-20/chapter-guide';
import { Symbols } from '@/components/chapter-20/symbols';
import { Reflection } from '@/components/chapter-20/reflection';
import { Endurance } from '@/components/chapter-20/endurance';
import { WhereItFits } from '@/components/chapter-20/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-20';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 20 Explained: The Millennium and Last Judgment',
		description: 'What is the millennium? A Catholic reading of Revelation 20: Satan bound, the thousand-year reign, Gog and Magog, and the last judgment.',
		image: heroImage,
		alt: 'Symbolic illustration of an angel with a key and chain binding a dragon in an abyss, beneath a great white throne with open scrolls',
		path: '/chapter-20',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 20', path: '/chapter-20' }],
	});
}

export default function Chapter20Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
