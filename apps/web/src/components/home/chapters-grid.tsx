import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { chapters } from '@/data/chapters';

export function ChaptersGrid() {
	return (
		<section className="home-section" aria-labelledby="chapters-title">
			<p className="eyebrow">04 / THE CHAPTERS</p>
			<h2 id="chapters-title">The chapters</h2>
			<div className="chapters-grid">
				{chapters.map((c) =>
					c.available && c.path ? (
						<Link key={c.number} to={c.path} className="chapter-card available">
							<span className="chapter-num">CHAPTER {String(c.number).padStart(2, '0')}</span>
							<h3>{c.title}</h3>
							<p>{c.summary}</p>
							<span className="chapter-status">AVAILABLE <ArrowUpRight size={12} /></span>
						</Link>
					) : (
						<div key={c.number} className="chapter-card">
							<span className="chapter-num">CHAPTER {String(c.number).padStart(2, '0')}</span>
							<h3>{c.title}</h3>
							<p>{c.summary}</p>
							<span className="chapter-status">COMING SOON</span>
						</div>
					),
				)}
			</div>
		</section>
	);
}
