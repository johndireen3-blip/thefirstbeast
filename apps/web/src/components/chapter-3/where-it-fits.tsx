import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ChapterNavigation } from '@/components/chapter-navigation';

const related = [
	{ label: 'The Seven Churches', href: '/topics/the-seven-churches', external: false },
	{ label: 'Read Revelation 3 (USCCB)', href: 'https://bible.usccb.org/bible/revelation/3', external: true },
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
				<h2 id="where-title">The letters to the churches.</h2>
			</div>
			<div className="where-prose">
				<p>Chapter 3 completes the seven letters. Each again opens with a title of Christ from chapter 1 (the seven stars, the key, the faithful witness) and closes with a promise “to the victor.” The last promise, a place on Christ’s throne (3:21), leads straight into chapter 4, where John sees an open door to heaven and is called up to see the throne of God. The door Christ knocks on in 3:20 and the door opened in heaven in 4:1 frame the turn from the churches on earth to the worship of heaven.</p>
			</div>
			<ChapterNavigation
				prev={{ label: 'Chapter 2: Letters to Four Churches', to: '/chapter-2' }}
				next={{ label: 'Chapter 4: The Throne in Heaven', to: '/chapter-4' }}
				deeper={part === 'top'}
			/>
			{part === 'top' ? null : relatedLinks}
		</section>
	);
}
