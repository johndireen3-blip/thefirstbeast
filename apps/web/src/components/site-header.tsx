import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LambMark } from '@/components/lamb-mark';

const chapterPages = [
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
];

const topicPages = [
	{ to: '/topics/numbers-in-revelation', label: 'Numbers in Revelation' },
	{ to: '/topics/revelation-and-the-mass', label: 'Revelation and the Mass' },
	{ to: '/topics/the-millennium', label: 'The Millennium' },
	{ to: '/topics/babylon', label: 'Babylon' },
	{ to: '/topics/armageddon', label: 'Armageddon' },
	{ to: '/topics/the-rapture', label: 'The Rapture' },
	{ to: '/topics/forty-two-months', label: 'Forty-Two Months' },
	{ to: '/topics/the-144000', label: 'The 144,000' },
	{ to: '/topics/the-two-witnesses', label: 'The Two Witnesses' },
	{ to: '/topics/the-four-horsemen', label: 'The Four Horsemen' },
	{ to: '/topics/the-seven-churches', label: 'The Seven Churches' },
	{ to: '/topics/gog-and-magog', label: 'Gog and Magog' },
	{ to: '/topics/the-antichrist', label: 'The Antichrist' },
	{ to: '/chapter-13/the-first-beast', label: 'The First Beast' },
	{ to: '/chapter-13/the-second-beast', label: 'The Second Beast' },
	{ to: '/chapter-13/mark-of-the-beast', label: 'The Mark of the Beast' },
	{ to: '/chapter-13/666-number-of-the-beast', label: '666: The Number of the Beast' },
];

const navLinks = [
	{ to: '/how-catholics-read-revelation', label: 'How to Read' },
	{ to: '/further-reading', label: 'Reading List' },
	{ to: '/faq', label: 'FAQ' },
	{ to: '/discussion', label: 'Discussion' },
	{ to: '/about', label: 'About' },
];

export function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [chaptersOpen, setChaptersOpen] = useState(false);
	const [topicsOpen, setTopicsOpen] = useState(false);
	const chaptersRef = useRef<HTMLDivElement>(null);
	const topicsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onClick(e: MouseEvent) {
			if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) {
				setChaptersOpen(false);
			}
			if (topicsRef.current && !topicsRef.current.contains(e.target as Node)) {
				setTopicsOpen(false);
			}
		}
		document.addEventListener('mousedown', onClick);
		return () => document.removeEventListener('mousedown', onClick);
	}, []);

	const closeMobile = () => {
		setMobileOpen(false);
		setChaptersOpen(false);
		setTopicsOpen(false);
	};

	return (
		<header className="site-header">
			<a className="wordmark" href="/#top" aria-label="The Lamb's Victory home">
				<span className="brand-symbol"><LambMark /></span>
				<span>THE LAMB'S VICTORY<span className="brand-subtitle">A CATHOLIC STUDY OF REVELATION</span></span>
			</a>
			<nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
				<div className="nav-dropdown" ref={chaptersRef}>
					<button
						type="button"
						className="nav-dropdown-trigger"
						onClick={() => setChaptersOpen((o) => !o)}
						aria-expanded={chaptersOpen}
						aria-haspopup="true"
					>
						Chapters <ChevronDown size={14} />
					</button>
					<div className={chaptersOpen ? 'nav-dropdown-menu is-open' : 'nav-dropdown-menu'}>
						{chapterPages.map((p) => (
							<NavLink key={p.to} to={p.to} onClick={closeMobile}>{p.label}</NavLink>
						))}
					</div>
				</div>
				<div className="nav-dropdown" ref={topicsRef}>
					<button
						type="button"
						className="nav-dropdown-trigger"
						onClick={() => setTopicsOpen((o) => !o)}
						aria-expanded={topicsOpen}
						aria-haspopup="true"
					>
						Topics <ChevronDown size={14} />
					</button>
					<div className={topicsOpen ? 'nav-dropdown-menu is-open' : 'nav-dropdown-menu'}>
						{topicPages.map((p) => (
							<NavLink key={p.to} to={p.to} onClick={closeMobile}>{p.label}</NavLink>
						))}
					</div>
				</div>
				{navLinks.map((l) => (
					<NavLink key={l.to} to={l.to} onClick={closeMobile} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>{l.label}</NavLink>
				))}
			</nav>
			<button
				type="button"
				className="menu-toggle"
				onClick={() => setMobileOpen((o) => !o)}
				aria-expanded={mobileOpen}
				aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
			>
				{mobileOpen ? <X /> : <Menu />}
			</button>
		</header>
	);
}
