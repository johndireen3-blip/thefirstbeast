import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 10 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/10', external: true },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">From oath to prophecy.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 10 opens the interlude between the sixth and seventh trumpets, just as chapter 7 paused between the sixth and seventh seals. The angel’s oath promises that the seventh trumpet will bring the fulfillment of God’s plan, and it sounds in 11:15. John’s new commission to “prophesy again” points ahead: the USCCB notes say this further prophecy is contained in chapters 12–22, beginning with the Woman and the Dragon.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 9: The Fifth and Sixth Trumpets', to: '/chapter-9' }}
				next={{ label: 'Chapter 11: The Two Witnesses', to: '/chapter-11' }}
			/>
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
		</section>
	);
}
