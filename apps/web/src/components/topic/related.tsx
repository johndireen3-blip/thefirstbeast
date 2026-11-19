import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export type TopicRelatedLink = {
	label: string;
	href: string;
	external: boolean;
};

export function TopicRelated({ links }: { links: TopicRelatedLink[] }) {
	return (
		<section className="where-it-fits section-pad" aria-labelledby="related-title">
			<div className="related-links">
				<p className="eyebrow">RELATED</p>
				<ul>
					{links.map((l) => (
						<li key={l.href}>
							{l.external ? (
								<a href={l.href} target="_blank" rel="noopener noreferrer">
									{l.label} <ArrowUpRight size={14} />
								</a>
							) : (
								<Link to={l.href} target="_blank" rel="noopener noreferrer">
									{l.label} <ArrowUpRight size={14} />
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
