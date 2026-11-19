import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The two witnesses, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-two-witnesses', external: true },
	{ label: 'Read Revelation 11 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/11', external: true },
	{ label: 'Forty-Two Months', href: '/topics/forty-two-months', external: false },
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
				<p>Chapter 11 ends the first half of Revelation’s visions. The seventh trumpet announces the reign of God, and the third woe it brings unfolds in the bowls of chapters 15–16. The ark seen in the heavenly temple (11:19) opens directly onto the great sign of the Woman clothed with the sun (12:1), where the book begins again from a new angle: the cosmic battle between the Dragon and the Woman’s child. The forty-two months return in chapters 12 and 13, and the beast from the abyss reappears in chapter 13.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 10: The Little Scroll', to: '/chapter-10' }}
				next={{ label: 'Chapter 12: The Woman and the Dragon', to: '/chapter-12' }}
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
