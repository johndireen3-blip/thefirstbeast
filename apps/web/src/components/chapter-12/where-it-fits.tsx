import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Woman and the Ark: Revelation 12 in depth', href: 'https://apocalypse12.com/', external: true },
	{ label: 'Read Revelation 12 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/12', external: true },
	{ label: 'Forty-Two Months', href: '/topics/forty-two-months', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
];

export function WhereItFits({ part }: { part?: 'top' | 'related' } = {}) {
	const relatedLinks = (
		<div className="related-links">
			<p className="eyebrow">RELATED</p>
			<ul>
				{related.map((l) => (
					<li key={l.href}>
						{l.external ? (
							<a href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ArrowUpRight size={14} /></a>
						) : (
							<Link to={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ArrowUpRight size={14} /></Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
	if (part === 'related') {
		return <section className="where-it-fits where-related section-pad" aria-label="Related">{relatedLinks}</section>;
	}
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">From the ark to the beast.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 12 opens just as the seventh trumpet ends chapter 11 with the ark of the covenant revealed in heaven (11:19), and it closes with the dragon on the seashore, waiting for its ally (12:18). In chapter 13 the dragon gives its power to the beast from the sea, and the war on “the rest of her offspring” (12:17) becomes the persecution of the holy ones (13:7). The dragon’s “short time” (12:12) is the same limited season as the beast’s forty-two months.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 11: The Two Witnesses', to: '/chapter-11' }}
				next={{ label: 'Chapter 13: The Two Beasts', to: '/chapter-13' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
