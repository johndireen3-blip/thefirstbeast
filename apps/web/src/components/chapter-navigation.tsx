import { Link } from 'react-router';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

type NavItem = { label: string; to?: string };

export function ChapterNavigation({ prev, next, deeper }: { prev: NavItem; next: NavItem; deeper?: boolean }) {
	return (
		<nav className="chapter-nav-row" aria-label="Chapter navigation">
			{prev.to ? (
				<Link className="chapter-nav-link" to={prev.to}>
					<ArrowLeft size={16} /> {prev.label}
				</Link>
			) : (
				<span className="chapter-nav-link disabled">
					<ArrowLeft size={16} /> {prev.label}
				</span>
			)}
			{deeper ? (
				<a className="chapter-nav-link chapter-nav-deeper" href="#fathers">
					04 / GOING DEEPER <span>see below</span> <ArrowDown size={16} />
				</a>
			) : null}
			{next.to ? (
				<Link className="chapter-nav-link" to={next.to}>
					{next.label} <ArrowRight size={16} />
				</Link>
			) : (
				<span className="chapter-nav-link disabled">
					{next.label} <ArrowRight size={16} />
				</span>
			)}
		</nav>
	);
}
