import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The First Beast: Revelation 13, mark by mark', href: 'https://thefirstbeast.com/', external: true },
	{ label: 'Read Revelation 13 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/13', external: true },
	{ label: 'The First Beast', href: '/chapter-13/the-first-beast', external: false },
	{ label: 'The Second Beast', href: '/chapter-13/the-second-beast', external: false },
	{ label: 'The Mark of the Beast', href: '/chapter-13/mark-of-the-beast', external: false },
	{ label: '666', href: '/chapter-13/666-number-of-the-beast', external: false },
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
				<p>Chapter 13 continues directly from chapter 12: the dragon, cast down from heaven, waits on the seashore (12:18) and gives its power to the beast from the sea. The beast first appeared in 11:7, rising from the abyss to make war on the two witnesses, and its forty-two months match the time of trial in 11:2–3 and 12:6. Its mark answers the seal of God in chapters 7 and 9. Chapter 14 immediately sets the Lamb on Mount Zion with the 144,000 who bear his name and his Father’s name on their foreheads (14:1). The beasts’ end comes in 19:20, when both are thrown into the pool of fire.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 12: The Woman and the Dragon', to: '/chapter-12' }}
				next={{ label: 'Chapter 14: The Lamb on Mount Zion', to: '/chapter-14' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
