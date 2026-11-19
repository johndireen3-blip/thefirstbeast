import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 4 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/4', external: true },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
	{ label: 'The Rapture', href: '/topics/the-rapture', external: false },
];

export function WhereItFits() {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="where-title">
			<div className="section-heading">
				<p className="eyebrow">WHERE IT FITS</p>
				<h2 id="where-title">The worship of heaven.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 4 opens the book’s central section. The door Christ knocked on in 3:20 now opens in heaven (4:1), and the scene shifts from the churches on earth to the worship of heaven. Chapters 4 and 5 form one vision: chapter 4 shows God the Creator enthroned, and chapter 5 brings forward the Lamb who alone can open the scroll of history. Everything that follows, the seals, trumpets and bowls, flows from this throne.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 3: Letters to Three Churches', to: '/chapter-3' }}
				next={{ label: 'Chapter 5: The Lamb and the Scroll', to: '/chapter-5' }}
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
