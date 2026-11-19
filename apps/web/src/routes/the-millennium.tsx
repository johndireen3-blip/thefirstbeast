import type { Route } from './+types/the-millennium';
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
} from '@/data/the-millennium';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'The Millennium in Revelation: What the Thousand Years Mean',
		description: 'What does the thousand-year reign of Revelation 20 mean? A Catholic explanation of the millennium and why the Church rejects millenarianism.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/the-millennium',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Millennium', path: '/topics/the-millennium' }],
	});
}

export default function TheMillenniumPage() {
	return (
		<>
			<TopicHero
				titleAsH1="The Millennium in Revelation: What the Thousand Years Mean"
				h1Lines={['BOUND.', 'REIGNING.', 'COMING.']}
				lead="Revelation 20 speaks of a thousand years. The Church reads them as the age we live in now."
			leadQuestion="What is the millennium, from a Catholic perspective?"
				sourceUrl={sourceUrl}
				sourceLabel="Read Revelation 20"
				heroImage={heroImage}
				alt={heroAlt}
				meta="A CATHOLIC GUIDE TO THE MILLENNIUM"
				anchorLabel="Explore the millennium"
			/>
			<TopicIntro heading={intro.heading} paragraphs={intro.paragraphs} />
			<TopicSymbols
				heading="Reading the thousand years."
				tagline="ALREADY, NOT YET"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={quoteSourceUrl} watermark="XX" />
			<TopicRelated links={related} />
		</>
	);
}
