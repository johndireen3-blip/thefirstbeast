import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 1 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/1', external: true },
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
				<h2 id="where-title">The opening of the book.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 1 opens the whole book. Its greeting names the themes that run to the end: Christ the faithful witness, the firstborn of the dead, and the One who is coming (1:5, 7). The vision then turns directly into the seven letters of chapters 2–3: each letter opens with a detail from this portrait of Christ, such as the one who holds the seven stars (2:1) or has the sharp two-edged sword (2:12). The book’s last chapter returns to the same titles: “I am the Alpha and the Omega, the first and the last” (22:13).</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Home', to: '/' }}
				next={{ label: 'Chapter 2: Letters to Four Churches', to: '/chapter-2' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
