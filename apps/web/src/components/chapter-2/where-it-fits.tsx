import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Seven Churches', href: '/topics/the-seven-churches', external: false },
	{ label: 'Read Revelation 2 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/2', external: true },
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
				<h2 id="where-title">The letters to the churches.</h2>
			</div>
			<div className="where-prose">
				<p>Each letter opens with a title from the vision of chapter 1: the one who holds the seven stars (2:1), the first and the last (2:8), the sword of his mouth (2:12), the eyes like fire (2:18). Chapter 3 completes the seven letters. The promises “to the victor” look ahead to the book’s ending, where the tree of life, the new name and the morning star reappear in the new Jerusalem (chapters 21–22).</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 1: The Son of Man', to: '/chapter-1' }}
				next={{ label: 'Chapter 3: Letters to Three Churches', to: '/chapter-3' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
