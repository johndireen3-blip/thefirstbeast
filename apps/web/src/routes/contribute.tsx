import type { Route } from './+types/contribute';
import { data } from 'react-router';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { Contribute } from '@/components/contribute/contribute';
import pocketbaseAdmin from '@/lib/pocketbase-client.server';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: "Write for The Lamb's Victory",
		description: 'Guidelines for scholars, clergy and teachers who wish to contribute a reflection or essay on the Book of Revelation.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: "Write for The Lamb's Victory",
				description: 'Guidelines for scholars, clergy and teachers who wish to contribute a reflection or essay on the Book of Revelation.',
				path: '/contribute',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'Contribute', path: '/contribute' },
			]),
		],
	});
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();

	// Honeypot: a hidden field humans leave empty. If filled, treat it as spam
	// and silently report success without saving anything.
	const honeypot = String(formData.get('website') ?? '').trim();
	if (honeypot !== '') {
		return data({ ok: true });
	}

	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const background = String(formData.get('background') ?? '').trim();
	const title = String(formData.get('title') ?? '').trim();
	const summary = String(formData.get('summary') ?? '').trim();
	const standards = formData.get('standards') === 'yes';

	const errors: Record<string, string> = {};
	if (!name) errors.name = 'Please enter a name or pen name.';
	if (!email || !email.includes('@')) errors.email = 'Please enter a valid email address.';
	if (!background) errors.background = 'Please share your background.';
	if (!title) errors.title = 'Please enter a proposed title.';
	if (!summary) errors.summary = 'Please write a short summary.';
	if (!standards) errors.standards = 'Please confirm you have read the standards.';

	if (Object.keys(errors).length > 0) {
		return data({ ok: false, errors }, { status: 400 });
	}

	try {
		await pocketbaseAdmin.createRecord('proposals', {
			name,
			email,
			background,
			title,
			summary,
			standards,
		});
	} catch (error) {
		throw new Error(`Proposal submission failed: ${error instanceof Error ? error.message : String(error)}`);
	}

	return data({ ok: true });
}

export default function ContributePage() {
	return <Contribute />;
}
