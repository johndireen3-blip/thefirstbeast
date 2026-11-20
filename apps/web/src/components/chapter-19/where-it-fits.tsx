import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The rider called Faithful and True, in depth (The Woman and the Ark)', href: 'https://apocalypse12.com/the-rider-called-faithful-and-true', external: true },
	{ label: 'Read Revelation 19 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/19', external: true },
	{ label: 'Chapter 5', href: '/chapter-5', external: false },
	{ label: 'Revelation and the Mass', href: '/topics/revelation-and-the-mass', external: false },
	{ label: 'The First Beast', href: '/chapter-13/the-first-beast', external: false },
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
				<p>Chapter 19 is the turning point from judgment to fulfillment. Its first half closes the Babylon section begun in chapter 17, answering the earth’s laments with heaven’s Alleluia and replacing the harlot with the Bride. Its second half begins the final visions: the rider fulfills the harvest of 14:14–20 and the gathering at Armageddon (16:16) and defeats two of the three enemies of chapters 12–13, the beast and the false prophet. The third, the dragon, is dealt with in chapter 20. The Bride announced here appears in full glory as the new Jerusalem in chapter 21.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 18: The Fall of Babylon', to: '/chapter-18' }}
				next={{ label: 'Chapter 20: The Thousand Years', to: '/chapter-20' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
