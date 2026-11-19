import { Link } from 'react-router';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { sourceUrl } from '@/data/chapter';

const footerGroups = [
	{
		title: 'Chapters & Topics',
		links: [
			{ to: '/chapter-1', label: 'Chapter 1: The Son of Man' },
			{ to: '/chapter-2', label: 'Chapter 2: Letters to Four Churches' },
			{ to: '/chapter-3', label: 'Chapter 3: Letters to Three Churches' },
			{ to: '/chapter-4', label: 'Chapter 4: The Throne in Heaven' },
			{ to: '/chapter-5', label: 'Chapter 5: The Lamb and the Scroll' },
			{ to: '/chapter-6', label: 'Chapter 6: The First Six Seals' },
			{ to: '/chapter-7', label: 'Chapter 7: The Sealed and the Great Multitude' },
			{ to: '/chapter-8', label: 'Chapter 8: Silence and Trumpets' },
			{ to: '/chapter-9', label: 'Chapter 9: The Fifth and Sixth Trumpets' },
			{ to: '/chapter-10', label: 'Chapter 10: The Little Scroll' },
			{ to: '/chapter-11', label: 'Chapter 11: The Two Witnesses' },
			{ to: '/chapter-12', label: 'Chapter 12: The Woman and the Dragon' },
			{ to: '/chapter-13', label: 'Chapter 13: The Two Beasts' },
			{ to: '/chapter-14', label: 'Chapter 14: The Lamb on Mount Zion' },
			{ to: '/chapter-15', label: 'Chapter 15: The Song of Moses and the Lamb' },
			{ to: '/chapter-16', label: 'Chapter 16: The Seven Bowls' },
			{ to: '/chapter-17', label: 'Chapter 17: Babylon and the Scarlet Beast' },
			{ to: '/chapter-18', label: 'Chapter 18: The Fall of Babylon' },
			{ to: '/chapter-19', label: 'Chapter 19: The Wedding Feast of the Lamb' },
			{ to: '/chapter-20', label: 'Chapter 20: The Thousand Years' },
			{ to: '/chapter-21', label: 'Chapter 21: The New Jerusalem' },
			{ to: '/chapter-22', label: 'Chapter 22: The River of Life' },
			{ to: '/topics/numbers-in-revelation', label: 'Numbers in Revelation' },
			{ to: '/topics/revelation-and-the-mass', label: 'Revelation and the Mass' },
			{ to: '/topics/the-millennium', label: 'The Millennium' },
			{ to: '/topics/babylon', label: 'Babylon' },
			{ to: '/topics/armageddon', label: 'Armageddon' },
			{ to: '/topics/the-rapture', label: 'The Rapture' },
			{ to: '/topics/the-144000', label: 'The 144,000' },
			{ to: '/topics/the-two-witnesses', label: 'The Two Witnesses' },
			{ to: '/topics/gog-and-magog', label: 'Gog and Magog' },
			{ to: '/topics/the-four-horsemen', label: 'The Four Horsemen' },
			{ to: '/topics/the-seven-churches', label: 'The Seven Churches' },
			{ to: '/topics/the-antichrist', label: 'The Antichrist' },
			{ to: '/chapter-13/the-first-beast', label: 'The First Beast' },
			{ to: '/chapter-13/the-second-beast', label: 'The Second Beast' },
			{ to: '/chapter-13/mark-of-the-beast', label: 'The Mark of the Beast' },
			{ to: '/chapter-13/666-number-of-the-beast', label: '666' },
			{ to: '/topics/forty-two-months', label: 'Forty-Two Months' },
		],
	},
	{
		title: 'More',
		links: [
			{ to: '/all-pages', label: 'All Pages' },
			{ to: '/how-catholics-read-revelation', label: 'How to Read' },
			{ to: '/how-to-test-a-reading', label: 'How to Test a Reading' },
			{ to: '/the-fathers', label: 'The Fathers Cited' },
			{ to: '/further-reading', label: 'Reading List' },
			{ to: '/faq', label: 'FAQ' },
			{ to: '/discussion', label: 'Discussion' },
			{ to: '/about', label: 'About' },
			{ to: '/contribute', label: 'Contribute' },
			{ to: '/how-this-site-is-made', label: 'How This Site Is Made' },
			{ to: 'https://apocalypse12.com/', label: 'The Woman and the Ark: Revelation 12 in depth', external: true },
		],
	},
];

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="footer-top">
				<a className="footer-brand" href="/#top">THE LAMB'S VICTORY</a>
				<p>An independent Catholic study<br />of the Book of Revelation.</p>
				<a className="text-link" href="/#top">Back to top <ArrowUp size={16} /></a>
			</div>
			<div className="footer-links">
				{footerGroups.map((group) => (
					<div key={group.title}>
						<p className="footer-group-title">{group.title}</p>
						<ul>
							{group.links.map((l) => (
								<li key={l.to}>
									{l.external ? (
										<a href={l.to} target="_blank" rel="noopener">{l.label}</a>
									) : (
										<Link to={l.to}>{l.label}</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="footer-bottom">
				<p>© 2026 The Lamb's Victory · An independent Catholic study of the Book of Revelation.</p>
				<a href="https://bible.usccb.org/bible/revelation/0" target="_blank" rel="noreferrer">Scripture & study notes: USCCB <ArrowUpRight size={13} /></a>
			</div>
			<p className="attribution credit-line">Researched and written with Claude, an AI model made by Anthropic. Directed by Fr. John. <Link to="/how-this-site-is-made">How this site is made</Link></p>
			<p className="attribution">An independent project. Fr. John is a Catholic diocesan priest, but this project is his own and is not affiliated with or endorsed by his diocese, the USCCB, Anthropic, or any other organization.</p>
			<p className="attribution">Original summaries and reflections on this site are not a Bible translation. Brief scripture quotation: New American Bible, Revised Edition (NABRE). Source: USCCB. Not affiliated with or endorsed by the USCCB. Illustrations are symbolic artistic interpretations.</p>
		</footer>
	);
}
