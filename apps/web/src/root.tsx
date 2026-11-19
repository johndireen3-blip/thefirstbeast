import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ReviewedLine } from '@/components/reviewed-line';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet, precedence: 'default' },
	{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
	{ rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap',
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div id="root">{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <><SiteHeader /><ReviewedLine /><main><Outlet /></main><SiteFooter /></>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	const isClientErrorResponse = isRouteErrorResponse(error) && error.status < 500;

	if (import.meta.env.DEV && !isClientErrorResponse) {
		return null;
	}

	let message = 'Oops!';
	let details = 'An unexpected error occurred.';

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
		</main>
	);
}
