import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The city, the temple and the garden, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-city-the-temple-and-the-garden', external: true },
	{ label: 'Read Revelation 22 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/22', external: true },
	{ label: 'Chapter 1', href: '/chapter-1', external: false },
	{ label: 'Chapter 21', href: '/chapter-21', external: false },
	{ label: 'Revelation and the Mass', href: '/topics/revelation-and-the-mass', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
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
				<p>Chapter 22 completes the vision of the new Jerusalem begun in 21:9 and closes the whole book, and the whole Bible. It returns to the beginning of Revelation: the angel who brought the message (1:1), the blessing on those who keep its words (1:3), the Alpha and the Omega (1:8), the testimony for the churches (chapters 2–3). It returns, too, to the first pages of Genesis: the river, the tree of life, the lifting of the curse. From the Lamb who was slain (chapter 5) to the Lamb on the throne, the message is one: the Lamb’s victory. The study ends where the Church begins each day, with a prayer: Come, Lord Jesus.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 21: The New Jerusalem', to: '/chapter-21' }}
				next={{ label: 'Back to the beginning: Chapter 1: The Son of Man', to: '/chapter-1' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
