import { Link } from 'react-router';

/**
 * The reviewed mark shown under the header on every page, as on the sister
 * sites. The date of review is kept in the project's records, not shown.
 */
export function ReviewedLine() {
	return (
		<p className="reviewed-line">
			<span className="reviewed-pill">✓ Reviewed by Fr. John</span>
			<Link to="/how-this-site-is-made">How this site is made</Link>
		</p>
	);
}
