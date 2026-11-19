import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 18 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/18', external: true },
	{ label: 'Chapter 14', href: '/chapter-14', external: false },
	{ label: 'Chapter 17', href: '/chapter-17', external: false },
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
				<p>Chapter 18 completes the picture begun in chapter 17: there the harlot was revealed, here her city falls. Its laments are heard from the earth, by kings, merchants and sailors; its final verses turn to heaven, which rejoices. That rejoicing bursts into song at the start of chapter 19, with the great Alleluia and the announcement of the wedding of the Lamb. The silence of Babylon’s weddings (18:23) is answered by the wedding feast of the Lamb (19:9).</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 17: Babylon and the Scarlet Beast', to: '/chapter-17' }}
				next={{ label: 'Chapter 19: The Wedding Feast of the Lamb', to: '/chapter-19' }}
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
