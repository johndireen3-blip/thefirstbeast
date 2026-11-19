/**
 * A small centered "Reviewed by" caption shown at the very end of the main
 * content, just above the footer, on every page. The date is a prop so a single
 * page can override it without touching the others.
 */
export function ReviewedLine({ date = 'November 18, 2026' }: { date?: string }) {
	return (
		<p className="reviewed-line">Reviewed by Fr. John · {date}</p>
	);
}
