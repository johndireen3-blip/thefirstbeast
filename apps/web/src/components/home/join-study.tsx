import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export function JoinStudy() {
	return (
		<section className="home-section join-section" aria-labelledby="join-title">
			<p className="eyebrow">06 / TAKE PART</p>
			<h2 id="join-title">Join the study</h2>
			<p>Questions and reflections are welcome on the Discussion page. Scholars, clergy and teachers who would like to contribute are invited to write for the study.</p>
			<div className="home-buttons">
				<Link className="text-link" to="/discussion">Discussion <ArrowUpRight size={16} /></Link>
				<Link className="text-link" to="/contribute">Contribute <ArrowUpRight size={16} /></Link>
			</div>
		</section>
	);
}
