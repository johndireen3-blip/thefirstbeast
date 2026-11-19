import type { Route } from './+types/numbers-in-revelation';
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
	intro,
	cards,
	readWithCare,
	reflection,
	quote,
	related,
} from '@/data/numbers-in-revelation';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Numbers in Revelation: What 7, 12, 144,000 and 666 Mean',
		description: 'A Catholic guide to the symbolic numbers in Revelation: seven, twelve, four, three and a half, a thousand, 144,000 and 666.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/numbers-in-revelation',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Numbers in Revelation', path: '/topics/numbers-in-revelation' }],
	});
}

export default function NumbersInRevelationPage() {
	return (
		<>
			<TopicHero
				eyebrowH1Text="Numbers in Revelation: What 7, 12, 144,000 and 666 Mean"
				eyebrowParts={['TOPICS', 'NUMBERS']}
				h1Lines={['COUNTED.', 'COMPLETE.', 'KEPT.']}
				lead="In Revelation, numbers are not for calculating dates. They are a language of meaning."
				sourceUrl={sourceUrl}
				sourceLabel="Read the introduction"
				heroImage={heroImage}
				alt={heroAlt}
				meta="A CATHOLIC GUIDE TO REVELATION’S NUMBERS"
				anchorLabel="Explore the numbers"
			/>
			<TopicIntro heading={intro.heading} paragraphs={intro.paragraphs} />
			<TopicSymbols
				heading="The key numbers."
				tagline="MEANING ≠ MATH"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={sourceUrl} watermark="VII" />
			<TopicRelated links={related} />
		</>
	);
}
