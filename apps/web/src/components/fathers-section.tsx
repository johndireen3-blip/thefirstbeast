import type { ReactNode } from 'react';
import { Link } from 'react-router';

export type FathersPoint = { label?: string; body: ReactNode; sub?: { label: string; body: ReactNode }[] };
export type FathersRow = { number: string; reference: string; title: string; points: FathersPoint[] };
export type FathersData = {
	chapter: number;
	intro: ReactNode;
	rows: FathersRow[];
	/** Links offered after the source line (sister sites, topic pages). */
	related?: { to: string; label: string }[];
};

/**
 * "Going deeper": what the Fathers and early commentators said about the chapter.
 * It follows the introductory sections of a chapter page and is marked off from
 * them as further study. Every Father is paraphrased; sources are named per point.
 */
export function FathersSection({ data }: { data: FathersData }) {
	return (
		<section className="fathers-section" id="fathers" aria-labelledby="fathers-title">
			<div className="fathers-intro section-pad">
				<p className="eyebrow">04 / GOING DEEPER</p>
				<h2 id="fathers-title">What the Fathers said.</h2>
				<p className="fathers-bridge">The sections above introduce the chapter. This one is for further study: how the Fathers of the Church and the early commentators read it, verse by verse. Read it now, or come back to it.</p>
				<p className="fathers-lead">{data.intro}</p>
			</div>
			<div className="symbol-list fathers-list section-pad">
				{data.rows.map(row => (
					<article className="symbol-row fathers-row" key={row.number}>
						<span className="symbol-number">{row.number}</span>
						<div><p className="eyebrow">{row.reference}</p><h3>{row.title}</h3></div>
						<div>
							{row.points.map((point, i) => (
								<div className="fathers-point" key={i}>
									<p>{point.label ? <strong>{point.label} </strong> : null}{point.body}</p>
									{point.sub ? <ul>{point.sub.map((s, j) => <li key={j}><strong>{s.label} </strong>{s.body}</li>)}</ul> : null}
								</div>
							))}
						</div>
					</article>
				))}
			</div>
			<div className="interpretation-note fathers-source">
				<span>SOURCE</span>
				<p>The Fathers in this section are paraphrased from <em>Revelation</em>, Ancient Christian Commentary on Scripture, New Testament XII, ed. William C. Weinrich (InterVarsity Press, 2005), on Revelation {data.chapter}. Scripture references follow the New American Bible, Revised Edition. <Link to="/the-fathers">Who are the Fathers cited here?</Link>{data.related?.length ? <> See also: {data.related.map((r, i) => <span key={r.to}>{i ? ' · ' : ''}{r.to.startsWith('/') ? <Link to={r.to}>{r.label}</Link> : <a href={r.to} target="_blank" rel="noopener noreferrer">{r.label}</a>}</span>)}.</> : null}</p>
			</div>
		</section>
	);
}
