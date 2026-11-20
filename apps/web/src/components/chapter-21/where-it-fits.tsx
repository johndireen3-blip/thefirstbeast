import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Bride, the wife of the Lamb, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-bride-the-wife-of-the-lamb', external: true },
	{ label: 'Read Revelation 21 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/21', external: true },
	{ label: 'Chapter 3', href: '/chapter-3', external: false },
	{ label: 'Chapter 12', href: '/chapter-12', external: false },
	{ label: 'Numbers in Revelation', href: '/topics/numbers-in-revelation', external: false },
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
				<p>Chapter 21 is the destination of the whole book. Every threat has been removed: Babylon (chapters 17–18), the beast and false prophet (chapter 19), the dragon and death itself (chapter 20). What remains is the Bride announced at the wedding feast (19:7–9), now revealed as the holy city. The promises made to the victors in the letters to the churches (chapters 2–3), the new name, the white garments, the pillar in God’s temple, are all fulfilled here. The vision continues into chapter 22 with the river and tree of life, closing the story the Bible began in the garden of Genesis.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 20: The Thousand Years', to: '/chapter-20' }}
				next={{ label: 'Chapter 22: The River of Life', to: '/chapter-22' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
