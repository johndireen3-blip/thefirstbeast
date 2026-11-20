import type { Route } from './+types/chapter-17';
import { studyMeta } from '@/lib/page-meta';
import { heroImage } from '@/data/chapter-17';
import { Hero } from '@/components/chapter-17/hero';
import { ChapterGuide } from '@/components/chapter-17/chapter-guide';
import { Symbols } from '@/components/chapter-17/symbols';
import { Reflection } from '@/components/chapter-17/reflection';
import { Endurance } from '@/components/chapter-17/endurance';
import { WhereItFits } from '@/components/chapter-17/where-it-fits';
import { FathersSection } from '@/components/fathers-section';
import { fathers } from '@/data/fathers/chapter-17';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation 17 Explained: The Whore of Babylon',
		description: 'Who is the Whore of Babylon? A Catholic reading of Revelation 17: the harlot on the scarlet beast, the seven hills, and the Lamb who conquers.',
		image: heroImage,
		alt: 'Symbolic illustration of a robed woman with a golden cup seated on a scarlet seven-headed beast in a desert, with a city on seven hills and a white lamb in the sky',
		path: '/chapter-17',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation 17', path: '/chapter-17' }],
	});
}

export default function Chapter17Page() {
	return <><Hero /><ChapterGuide /><Symbols /><Reflection /><Endurance /><WhereItFits part="top" /><FathersSection data={fathers} /><WhereItFits part="related" /></>;
}
