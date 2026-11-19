import type { Route } from './+types/chapter-22';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-22';
import { Hero } from '@/components/chapter-22/hero';
import { ChapterGuide } from '@/components/chapter-22/chapter-guide';
import { Symbols } from '@/components/chapter-22/symbols';
import { Reflection } from '@/components/chapter-22/reflection';
import { Endurance } from '@/components/chapter-22/endurance';
import { WhereItFits } from '@/components/chapter-22/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-22';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 22 Explained: The River of Life',
		description: 'A Catholic reading of Revelation 22: the river and tree of life, seeing God’s face, and the Bible’s final prayer: Come, Lord Jesus!',
		image: heroImage,
		alt: 'Symbolic illustration of a crystal river flowing from a throne with a white lamb, lined on both banks by fruit-bearing trees of life under a morning star',
		path: '/chapter-22',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 22', path: '/chapter-22' }],
	});
}

export default function Chapter22Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><FathersSection data={fathers} /><WhereItFits /></>;
}
