import { useFetcher } from 'react-router';
import { Check } from 'lucide-react';

export function Discussion() {
	const fetcher = useFetcher<{ ok?: boolean; errors?: Record<string, string> }>();
	const submitted = fetcher.data?.ok === true;
	const errors = fetcher.data?.errors;

	return (
		<section className="page-section">
			<div className="page-content page-content-wide">
				<p className="eyebrow">DISCUSSION</p>
				<h1>Questions &amp; Discussion</h1>
				<div className="page-prose">
					<p>Do you have a question about the Book of Revelation, or a reflection you would like to share? Send it below. Every submission is read. Selected questions and reflections are published here with a response, usually without the sender's name unless you ask to be credited.</p>
				</div>

				{submitted ? (
					<div className="form-thankyou" role="status">
						<Check aria-hidden="true" />
						<div>
							<p className="form-thankyou-title">Thank you — your message has been sent.</p>
							<p className="form-thankyou-body">Every submission is read. Your email is kept private and used only to reply, never published.</p>
						</div>
					</div>
				) : (
					<fetcher.Form method="post" className="submission-form" noValidate>
						<div className="honeypot" aria-hidden="true">
							<label htmlFor="website-discussion">Leave this field empty</label>
							<input id="website-discussion" name="website" type="text" tabIndex={-1} autoComplete="off" />
						</div>

						<div className="form-field">
							<label htmlFor="firstname">First name or initials <span className="form-hint">(optional)</span></label>
							<input id="firstname" name="name" type="text" maxLength={200} defaultValue="" />
						</div>

						<div className="form-field">
							<label htmlFor="disc-email">Email <span className="form-hint">(not published, used only to reply)</span></label>
							<input id="disc-email" name="email" type="email" required defaultValue="" />
							{errors?.email ? <span className="form-error">{errors.email}</span> : null}
						</div>

						<div className="form-field">
							<label htmlFor="message">Your question or reflection</label>
							<textarea id="message" name="message" rows={6} required maxLength={8000} defaultValue="" />
							{errors?.message ? <span className="form-error">{errors.message}</span> : null}
						</div>

						<div className="form-field form-field-check">
							<label htmlFor="publish" className="form-checkbox-label">
								<input id="publish" name="publish" type="checkbox" value="yes" />
								<span>You may publish my question, without my email.</span>
							</label>
						</div>

						<button type="submit" className="button-primary form-submit" disabled={fetcher.state === 'submitting'}>
							{fetcher.state === 'submitting' ? 'Sending…' : 'Send'}
						</button>
					</fetcher.Form>
				)}

				<div className="page-prose discussion-published">
					<h2>Published questions &amp; answers</h2>
					<p className="discussion-empty">The first questions and answers will appear here soon.</p>
				</div>

				<div className="page-prose">
					<h2>Moderation policy</h2>
					<ul className="page-list">
						<li>Questions and reflections in good faith are welcome from people of any background.</li>
						<li>Not published: personal attacks, predictions naming living people as the beast or the Antichrist, date-setting, attacks on any church or faith, advertising, or links to other sites.</li>
						<li>Fr. John may shorten submissions for clarity.</li>
						<li>This page is not for spiritual direction or confession. For pastoral needs, please contact your local parish.</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
