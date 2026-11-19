import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 9 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/9', external: true },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">From woes to witness.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 9 sounds the fifth and sixth trumpets, the first two of the three woes announced in 8:13. As with the seals, the book now pauses before the seventh: chapters 10–11 bring the little scroll and the two witnesses, a reminder that God’s word is still being proclaimed to a world that will not repent. The seventh trumpet (11:15) finally announces that “the kingdom of the world now belongs to our Lord and to his Anointed.” The abyss reappears in chapter 20, when Satan himself is bound there.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 8: Silence and Trumpets', to: '/chapter-8' }}
				next={{ label: 'Chapter 10: The Little Scroll', to: '/chapter-10' }}
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
