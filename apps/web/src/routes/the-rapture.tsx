import type { Route } from './+types/the-rapture';
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
} from '@/data/the-rapture';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Is the Rapture in Revelation? A Catholic Answer',
		description: 'Is the rapture in the Bible? A Catholic look at 1 Thessalonians 4:17 and Revelation, and why the Church awaits one visible return of Christ.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/the-rapture',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'The Rapture', path: '/topics/the-rapture' }],
	});
}

export default function TheRapturePage() {
	return (
		<>
			<TopicHero
				titleAsH1="Is the Rapture in Revelation? A Catholic Answer"
				h1Lines={['ONE.', 'VISIBLE.', 'GLORIOUS.']}
				lead="Many Christians expect a secret rapture before a great tribulation. The Catholic Church awaits one return of Christ, seen by every eye."
				sourceUrl={sourceUrl}
				sourceLabel="Read 1 Thessalonians 4"
				heroImage={heroImage}
				alt={heroAlt}
				meta="A CATHOLIC GUIDE TO THE RAPTURE"
				anchorLabel="Explore the question"
			/>
			<TopicIntro
				heading={intro.heading}
				paragraphs={intro.paragraphs}
				leadParagraph={{
					question: 'Is the rapture in the Catholic Bible?',
					body: "The word is not, but the event Paul describes is: when Christ returns in glory, the faithful who are alive will be 'caught up' to meet him (1 Thessalonians 4:17). What the Catholic Bible does not teach is a secret rapture of believers before a great tribulation.",
				}}
			/>
			<TopicSymbols
				heading="The key passages."
				tagline="ONE RETURN"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={quoteSourceUrl} watermark="I" />
			<TopicRelated links={related} />
		</>
	);
}
