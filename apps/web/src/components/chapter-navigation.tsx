import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type NavItem = { label: string; to?: string };

export function ChapterNavigation({ prev, next }: { prev: NavItem; next: NavItem }) {
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
