import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 5 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/5', external: true },
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
				<h2 id="where-title">The Lamb receives the scroll.</h2>
			</div>
			<div className="where-prose">
				<p>Chapters 4 and 5 form one vision. Chapter 4 shows God the Creator enthroned; chapter 5 shows the Lamb receiving the scroll, sharing the throne and the worship of heaven (5:13). The worship of creation in 4:11 becomes the worship of redemption in 5:9–10. In chapter 6 the Lamb begins to open the seals one by one, and the rest of the book unfolds from his hand. The Lamb remains at the center to the very end, where the new Jerusalem has “the Lamb” as its lamp (21:23).</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 4: The Throne in Heaven', to: '/chapter-4' }}
				next={{ label: 'Chapter 6: The First Six Seals', to: '/chapter-6' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
