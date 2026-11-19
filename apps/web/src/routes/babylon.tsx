import type { Route } from './+types/babylon';
import { studyMeta } from '@/lib/page-meta';
import { TopicHero } from '@/components/topic/hero';
import { TopicIntro } from '@/components/topic/intro';
import { TopicSymbols } from '@/components/topic/symbols';
import { TopicReflection } from '@/components/topic/reflection';
import { TopicQuote } from '@/components/topic/quote';
import { TopicRelated } from '@/components/topic/related';
import {
	heroImage,
	heroAlt,
	sourceUrl,
	quoteSourceUrl,
	intro,
	cards,
	readWithCare,
	reflection,
	quote,
	related,
} from '@/data/babylon';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Babylon in Revelation: Who Is the Whore of Babylon?',
		description: 'Who is Babylon the great, the harlot of Revelation 17\u201318? A Catholic explanation of the symbol, why it meant Rome, and what it means for Christians today.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/babylon',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Babylon', path: '/topics/babylon' }],
	});
}

export default function BabylonPage() {
	return (
		<>
			<TopicHero
				titleAsH1="Babylon in Revelation: Who Is the Whore of Babylon?"
				h1Lines={['SEDUCTIVE.', 'FALLEN.', 'GONE.']}
				lead="A queen in purple and gold, drunk on the blood of the saints. Then, in a single hour, a city that is never found again."
				sourceUrl={sourceUrl}
				sourceLabel="Read Revelation 17"
				heroImage={heroImage}
				alt={heroAlt}
				meta="A CATHOLIC GUIDE TO BABYLON"
				anchorLabel="Explore Babylon"
			/>
			<TopicIntro heading={intro.heading} paragraphs={intro.paragraphs} />
			<TopicSymbols
				heading="Reading the symbol."
				tagline="TWO CITIES"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={quoteSourceUrl} watermark="XVIII" />
			<TopicRelated links={related} />
		</>
	);
}
