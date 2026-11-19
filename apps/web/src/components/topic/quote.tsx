import { ArrowUpRight } from 'lucide-react';

type TopicQuoteProps = {
	quote: string;
	reference: string;
	sourceUrl: string;
	watermark: string;
};

export function TopicQuote({ quote, reference, sourceUrl, watermark }: TopicQuoteProps) {
	return (
		<section className="endurance-section">
			<p className="eyebrow">THE HEART OF THE STUDY</p>
			<blockquote>&ldquo;{quote}&rdquo;</blockquote>
			<p className="quote-credit">{reference}</p>
			<a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">
				Return to the scripture <ArrowUpRight size={17} />
			</a>
			<span className="endurance-watermark" aria-hidden="true">{watermark}</span>
		</section>
	);
}
