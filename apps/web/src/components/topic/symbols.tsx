import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';

export type TopicCard = {
	number: string;
	title: string;
	reference?: string;
	description: string;
	where?: string;
	link: string;
	linkLabel: string;
};

type TopicSymbolsProps = {
	heading: string;
	tagline: string;
	bannerImage: string;
	bannerAlt: string;
	cards: TopicCard[];
	readWithCare: string;
};

export function TopicSymbols({
	heading,
	tagline,
	bannerImage,
	bannerAlt,
	cards,
	readWithCare,
}: TopicSymbolsProps) {
	return (
		<section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
			<div className="symbol-banner">
				<StudyImage src={bannerImage} alt={bannerAlt} />
				<div className="symbol-banner-shade" />
				<div>
					<p className="eyebrow">02 / THE SYMBOLS</p>
					<h2 id="symbols-title">{heading}</h2>
				</div>
				<span className="vertical-label">{tagline}</span>
			</div>
			<div className="symbol-list section-pad">
				{cards.map((card) => (
					<article className="symbol-row" key={card.number}>
						<span className="symbol-number">{card.number}</span>
						<div>
							{card.reference ? <p className="eyebrow">{card.reference}</p> : null}
							<h3>{card.title}</h3>
						</div>
						<div>
							<p>{card.description}</p>
							{card.where ? (
								<p className="topic-where">
									<span className="eyebrow">WHERE IT APPEARS</span>
									{card.where}
								</p>
							) : null}
							<a
								className="text-link"
								href={card.link}
								target={card.link === '/how-catholics-read-revelation' || card.link === '/further-reading' || !card.link.startsWith('/') ? '_blank' : undefined}
								rel="noopener noreferrer"
							>
								{card.linkLabel} <ArrowUpRight size={15} />
							</a>
						</div>
					</article>
				))}
			</div>
			<div className="interpretation-note">
				<span>READ WITH CARE</span>
				<p>{readWithCare}</p>
			</div>
		</section>
	);
}
