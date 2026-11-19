/**
 * Agnus Dei mark: a lamb standing, holding a staff with a cross pennant.
 * Drawn as a single inline SVG using `currentColor` for the accent blue
 * (inherited from the site's `--primary` token) and the header background
 * color for the eye, so it sits correctly on the dark header. Used in the
 * header brand mark and (with explicit colors) as the favicon.
 */
export function LambMark({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			aria-hidden="true"
			focusable="false"
		>
			<circle cx="18" cy="24.5" r="9.2" stroke="currentColor" strokeWidth={1.5} />
			<g fill="currentColor">
				<circle cx="28" cy="38" r="6" />
				<circle cx="34" cy="34.5" r="6.5" />
				<circle cx="40.5" cy="35.5" r="6" />
				<circle cx="44.5" cy="40" r="5" />
				<circle cx="38" cy="42" r="6" />
				<circle cx="30" cy="42.5" r="5.5" />
				<path d="M23.5 37 C21 34 20 31 21.2 28.6 L25.5 31.5 C26 34 26 36 25 38 Z" />
				<path d="M13.2 27.8 C12.4 24.4 15 21.2 18.6 21.4 C21.8 21.6 23.4 24.6 22.4 27.8 C21.6 30.4 19.2 32.2 16.6 31.8 C14.9 31.5 13.7 30.1 13.2 27.8 Z" />
				<path d="M21.6 22.6 C23.8 21.2 26.4 21.4 27.6 22.8 C25.6 23.8 23.6 24.2 21.9 24.1 Z" />
				<rect x="26" y="45" width="2.4" height="8.5" rx="1.2" />
				<rect x="31" y="46" width="2.4" height="7.5" rx="1.2" />
				<rect x="37.6" y="46" width="2.4" height="7.5" rx="1.2" />
				<rect x="42.6" y="43" width="2.4" height="10.5" rx="1.2" />
				<path d="M52.6 14.2 L61.8 15.8 L58.2 19 L61.8 22.2 L52.2 23.6 Z" />
			</g>
			<circle cx="16.8" cy="25.8" r="1" fill="hsl(var(--background))" />
			<g stroke="currentColor" strokeWidth={2} strokeLinecap="round">
				<line x1="48" y1="54" x2="52.3" y2="7.5" />
				<line x1="49.6" y1="11.2" x2="55" y2="11.7" />
			</g>
		</svg>
	);
}
