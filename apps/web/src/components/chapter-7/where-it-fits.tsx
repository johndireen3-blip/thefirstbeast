import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The seal of the living God, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-seal-of-the-living-god', external: true },
	{ label: 'Read Revelation 7 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/7', external: true },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
	{ label: 'Numbers in Revelation', href: '/topics/numbers-in-revelation', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">The Lamb breaks the seals.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 7 is an interlude between the sixth and seventh seals, and the book uses the same pattern again between the sixth and seventh trumpets (chapters 10–11). It answers 6:17’s question, “Who can withstand it?”: those sealed by God and washed in the Lamb’s blood. The sealed servants reappear with the Lamb on Mount Zion in 14:1–5, and the final promises of 7:15–17 return almost word for word in the new Jerusalem, where God “will wipe every tear from their eyes” (21:4). Chapter 8 then opens the seventh seal.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 6: The First Six Seals', to: '/chapter-6' }}
				next={{ label: 'Chapter 8: Silence and Trumpets', to: '/chapter-8' }}
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
