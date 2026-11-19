import type { Route } from './+types/chapter-5';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-5';
import { Hero } from '@/components/chapter-5/hero';
import { ChapterGuide } from '@/components/chapter-5/chapter-guide';
import { Symbols } from '@/components/chapter-5/symbols';
import { Reflection } from '@/components/chapter-5/reflection';
import { Endurance } from '@/components/chapter-5/endurance';
import { WhereItFits } from '@/components/chapter-5/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-5';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 5 Explained: The Lamb and the Sealed Scroll',
		description: 'A Catholic reading of Revelation 5: the sealed scroll, the Lion of Judah who appears as a slain Lamb, and the hymn of all creation, “Worthy is the Lamb.”',
		image: heroImage,
		alt: 'Symbolic illustration of a white lamb before a throne of light receiving a scroll with seven red seals, with golden bowls of incense',
		path: '/chapter-5',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 5', path: '/chapter-5' }],
	});
}

export default function Chapter5Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
