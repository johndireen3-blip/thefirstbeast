import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 15 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/15', external: true },
	{ label: 'Chapter 4', href: '/chapter-4', external: false },
	{ label: 'Chapter 8', href: '/chapter-8', external: false },
	{ label: 'Revelation and the Mass', href: '/topics/revelation-and-the-mass', external: false },
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
				<h2 id="where-title">From witness to reign.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 15 is the shortest chapter in Revelation and a hinge between the visions of conflict (chapters 12–14) and the last plagues (chapter 16). Like the scenes in heaven before the seals (chapters 4–5) and the trumpets (8:1–5), it shows worship before judgment. The victors on the sea are the same faithful seen with the Lamb on Mount Zion (14:1–5) and in the great multitude (7:9–17). The bowls they watch being handed out are poured in chapter 16.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 14: The Lamb on Mount Zion', to: '/chapter-14' }}
				next={{ label: 'Chapter 16: The Seven Bowls', to: '/chapter-16' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
