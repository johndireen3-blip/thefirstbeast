import { Link } from 'react-router';
import { pageSections } from '@/data/all-pages';

export function AllPages() {
	return (
		<section className="page-section">
			<div className="page-content">
				<p className="eyebrow">INDEX</p>
				<h1>All Pages</h1>
				<div className="page-prose">
					<p>Every page of this study in one place.</p>
				</div>
				{pageSections.map((section) => (
					<div key={section.heading} className="all-pages-section">
						<h2>{section.heading}</h2>
						<ul className="all-pages-list">
							{section.entries.map((entry) => {
								const newTab = entry.href === '/how-catholics-read-revelation' || entry.href === '/further-reading';
								return (
								<li key={entry.href}>
									<Link to={entry.href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined}>{entry.label}</Link>
									<p>{entry.note}</p>
								</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
