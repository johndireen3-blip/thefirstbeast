import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Lamb on Mount Zion, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-lamb-on-mount-zion', external: true },
	{ label: 'Read Revelation 14 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/14', external: true },
	{ label: 'Chapter 7', href: '/chapter-7', external: false },
	{ label: 'The Mark of the Beast', href: '/chapter-13/mark-of-the-beast', external: false },
	{ label: 'Numbers in Revelation', href: '/topics/numbers-in-revelation', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">From witness to reign.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 14 is God’s answer to chapter 13. Against the beast and its marked followers stand the Lamb and those who bear his name. Its three angels preview the rest of the book: the call to worship the Creator, the fall of Babylon (chapters 17–18), and the judgment of the beast’s followers (chapters 19–20). Its two harvests close the visions of the conflict that began in chapter 12, and the next chapter opens the final series of seven, the bowls.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 13: The Two Beasts', to: '/chapter-13' }}
				next={{ label: 'Chapter 15: The Song of Moses and the Lamb', to: '/chapter-15' }}
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
