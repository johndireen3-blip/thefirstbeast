import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { questions } from '@/data/questions';

export function QuestionsGrid() {
	return (
		<section className="home-section" aria-labelledby="questions-title">
			<p className="eyebrow">05 / THE QUESTIONS</p>
			<h2 id="questions-title">The questions people ask.</h2>
			<p>Short, careful answers to the questions that bring most readers to Revelation.</p>
			<div className="chapters-grid">
				{questions.map((q) => (
					<Link key={q.path} to={q.path} className="chapter-card available">
						<h3>{q.title}</h3>
						<p>{q.summary}</p>
						<span className="chapter-status">READ <ArrowUpRight size={12} /></span>
					</Link>
				))}
			</div>
			<div className="home-buttons">
				<Link className="text-link" to="/faq">More questions in the Revelation FAQ <ArrowUpRight size={16} /></Link>
			</div>
		</section>
	);
}
