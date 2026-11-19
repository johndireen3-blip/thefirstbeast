import type { Route } from './+types/revelation-and-the-mass';
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
} from '@/data/revelation-and-the-mass';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Revelation and the Mass: The Heavenly Liturgy',
		description: 'Why Catholics hear the Mass in Revelation: the Lord\u2019s Day, the altar, incense, the Sanctus, the Lamb of God, the wedding supper and Maranatha.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/revelation-and-the-mass',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Revelation and the Mass', path: '/topics/revelation-and-the-mass' }],
	});
}

export default function RevelationAndTheMassPage() {
	return (
		<>
			<TopicHero
				eyebrowH1Text="Revelation and the Mass: The Heavenly Liturgy"
				eyebrowParts={['TOPICS', 'LITURGY']}
				h1Lines={['HOLY.', 'LAMB.', 'SUPPER.']}
				lead="John’s vision takes place on the Lord’s Day. What he sees in heaven, the Church celebrates at every altar."
				sourceUrl={sourceUrl}
				sourceLabel="Read Revelation 4–5"
				heroImage={heroImage}
				alt={heroAlt}
				meta="THE HEAVENLY LITURGY IN THE BOOK OF REVELATION"
				anchorLabel="Explore the parallels"
			/>
			<TopicIntro heading={intro.heading} paragraphs={intro.paragraphs} />
			<TopicSymbols
				heading="Heaven and the altar."
				tagline="HEAVEN MEETS EARTH"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={sourceUrl} watermark="LAMB" />
			<TopicRelated links={related} />
		</>
	);
}
