import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Four Horsemen', href: '/topics/the-four-horsemen', external: false },
	{ label: 'Read Revelation 6 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/6', external: true },
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
				<h2 id="where-title">The Lamb breaks the seals.</h2>
			</div>
			<div className="where-prose">
				<p>The Lamb who took the scroll in chapter 5 now breaks its seals. Chapter 6 opens six of the seven; before the seventh, chapter 7 pauses to answer the question “Who can stand?” with the sealing of God’s servants and a great multitude in white. The seventh seal (8:1) then opens into the seven trumpets. The martyrs’ cry, “How long?”, is finally answered in the judgment of chapters 19–20.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 5: The Lamb and the Scroll', to: '/chapter-5' }}
				next={{ label: 'Chapter 7: The Sealed and the Great Multitude', to: '/chapter-7' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
