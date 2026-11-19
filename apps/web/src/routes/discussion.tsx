import type { Route } from './+types/discussion';
import { data } from 'react-router';
import { socialMeta } from '@/lib/page-meta';
import { DEFAULT_SOCIAL_IMAGE, webPageJsonLd, breadcrumbJsonLd } from '@/lib/structured-data';
import { Discussion } from '@/components/discussion/discussion';
import pocketbaseAdmin from '@/lib/pocketbase-client.server';

export function meta({ matches, location }: Route.MetaArgs) {
	return socialMeta({ matches, location }, {
		title: 'Questions & Discussion on the Book of Revelation',
		description: 'Submit a question or reflection on the Book of Revelation. Contributions are moderated and selected responses are published.',
		image: DEFAULT_SOCIAL_IMAGE,
		alt: 'Symbolic illustration of a white lamb standing on a hilltop at dawn with a banner of light behind it',
		jsonLd: [
			webPageJsonLd({
				name: 'Questions & Discussion on the Book of Revelation',
				description: 'Submit a question or reflection on the Book of Revelation. Contributions are moderated and selected responses are published.',
				path: '/discussion',
			}),
			breadcrumbJsonLd([
				{ name: 'Home', path: '/' },
				{ name: 'Discussion', path: '/discussion' },
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
	const message = String(formData.get('message') ?? '').trim();
	const publish = formData.get('publish') === 'yes';

	const errors: Record<string, string> = {};
	if (!email || !email.includes('@')) errors.email = 'Please enter a valid email address.';
	if (!message) errors.message = 'Please enter your question or reflection.';

	if (Object.keys(errors).length > 0) {
		return data({ ok: false, errors }, { status: 400 });
	}

	try {
		await pocketbaseAdmin.createRecord('discussions', {
			name,
			email,
			message,
			publish,
		});
	} catch (error) {
		throw new Error(`Discussion submission failed: ${error instanceof Error ? error.message : String(error)}`);
	}

	return data({ ok: true });
}

export default function DiscussionPage() {
	return <Discussion />;
}
