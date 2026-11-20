import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 8 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/8', external: true },
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
				<h2 id="where-title">From seals to trumpets.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 8 links the seals to the trumpets: the seventh seal opens into seven trumpets, just as the seventh trumpet will later open into the seven bowls (chapters 15–16). The golden altar and the prayers of the holy ones continue the worship of chapters 4–5 and the martyrs’ cry beneath the altar in 6:9–10. The eagle’s three woes (8:13) announce the fifth, sixth and seventh trumpets, which follow in chapters 9 and 11.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 7: The Sealed and the Great Multitude', to: '/chapter-7' }}
				next={{ label: 'Chapter 9: The Fifth and Sixth Trumpets', to: '/chapter-9' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
