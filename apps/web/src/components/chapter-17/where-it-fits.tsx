import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 17 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/17', external: true },
	{ label: 'Chapter 12', href: '/chapter-12', external: false },
	{ label: 'The First Beast', href: '/chapter-13/the-first-beast', external: false },
	{ label: '666', href: '/chapter-13/666-number-of-the-beast', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
	{ label: 'Babylon', href: '/topics/babylon', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">From witness to reign.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 17 opens the section on the fall of Babylon (17:1–19:10), filling out the brief announcements of 14:8 and 16:19. The beast of chapter 13 reappears, now carrying the city, and the false Woman of this chapter stands in deliberate contrast to the Woman clothed with the sun in chapter 12 and the Bride of the Lamb in chapters 19 and 21. The war of the kings against the Lamb (17:14) is shown in 19:11–21. Chapter 18 gives the lament over the fallen city.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 16: The Seven Bowls', to: '/chapter-16' }}
				next={{ label: 'Chapter 18: The Fall of Babylon', to: '/chapter-18' }}
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
