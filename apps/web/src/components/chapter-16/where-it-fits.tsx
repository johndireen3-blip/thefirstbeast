import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'Read Revelation 16 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/16', external: true },
	{ label: 'Chapter 8', href: '/chapter-8', external: false },
	{ label: 'Chapter 9', href: '/chapter-9', external: false },
	{ label: 'The Second Beast', href: '/chapter-13/the-second-beast', external: false },
	{ label: 'How Catholics Read Revelation', href: '/how-catholics-read-revelation', external: false },
	{ label: 'Further Reading', href: '/further-reading', external: false },
	{ label: 'Armageddon', href: '/topics/armageddon', external: false },
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
				<p>Chapter 16 pours out the bowls prepared in chapter 15 and completes Revelation’s three series of seven. Its plagues echo the trumpets of chapters 8–9 but now strike the whole world. Two threads are left hanging for later chapters: the great city Babylon, whose judgment is shown in chapters 17–18, and the kings gathered at Armageddon, whose defeat comes in chapter 19. The voice from the throne, “It is done,” will be heard again when God makes all things new (21:6).</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 15: The Song of Moses and the Lamb', to: '/chapter-15' }}
				next={{ label: 'Chapter 17: Babylon and the Scarlet Beast', to: '/chapter-17' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
