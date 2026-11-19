import type { Route } from './+types/armageddon';
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
} from '@/data/armageddon';

export function meta({ matches, location }: Route.MetaArgs) {
	return studyMeta({ matches, location }, {
		title: 'Armageddon in the Bible: What It Means in Revelation',
		description: 'What is Armageddon? A Catholic explanation of Revelation 16:16, the history of Megiddo, and why the final battle is a symbol, not a prediction.',
		image: heroImage,
		alt: heroAlt,
		path: '/topics/armageddon',
		breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Armageddon', path: '/topics/armageddon' }],
	});
}

export default function ArmageddonPage() {
	return (
		<>
			<TopicHero
				titleAsH1="Armageddon in the Bible: What It Means in Revelation 16"
				h1Lines={['GATHERED.', 'EXPOSED.', 'DEFEATED.']}
				lead="One verse, one name, and centuries of speculation. Revelation's Armageddon is a place where evil gathers and is undone."
			leadQuestion="What is Armageddon, from a Catholic perspective?"
				sourceUrl={sourceUrl}
				sourceLabel="Read Revelation 16"
				heroImage={heroImage}
				alt={heroAlt}
				meta="A CATHOLIC GUIDE TO ARMAGEDDON"
				anchorLabel="Explore Armageddon"
			/>
			<TopicIntro heading={intro.heading} paragraphs={intro.paragraphs} />
			<TopicSymbols
				heading="Reading the symbol."
				tagline="GATHERED & UNDONE"
				bannerImage={heroImage}
				bannerAlt={heroAlt}
				cards={cards}
				readWithCare={readWithCare}
			/>
			<TopicReflection {...reflection} />
			<TopicQuote quote={quote.text} reference={quote.reference} sourceUrl={quoteSourceUrl} watermark="XVI" />
			<TopicRelated links={related} />
		</>
	);
}
