import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The dragon bound, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-dragon-bound', external: true },
	{ label: 'Read Revelation 20 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/20', external: true },
	{ label: 'Chapter 6', href: '/chapter-6', external: false },
	{ label: 'Chapter 12', href: '/chapter-12', external: false },
	{ label: 'Numbers in Revelation', href: '/topics/numbers-in-revelation', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'FAQ', href: '/faq', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
	{ label: 'The Millennium', href: '/topics/the-millennium', external: false },
	{ label: 'The Rapture', href: '/topics/the-rapture', external: false },
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
				<p>Chapter 20 completes the defeat of the three enemies introduced in chapters 12–13. The beast and false prophet were captured in chapter 19; now the dragon himself is bound, released for a short time, and cast into the lake of fire. The chapter also answers the cry of the martyrs under the altar in 6:9–11: they are given thrones and reign with Christ. With death itself destroyed, the way is clear for the new creation of chapters 21–22, where there will be no more death.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 19: The Wedding Feast of the Lamb', to: '/chapter-19' }}
				next={{ label: 'Chapter 21: The New Jerusalem', to: '/chapter-21' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
