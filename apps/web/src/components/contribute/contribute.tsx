import { useFetcher } from 'react-router';
import { Check } from 'lucide-react';

export function Contribute() {
	const fetcher = useFetcher<{ ok?: boolean; errors?: Record<string, string> }>();
	const submitted = fetcher.data?.ok === true;
	const errors = fetcher.data?.errors;

	return (
		<section className="page-section">
			<div className="page-content page-content-wide">
				<p className="eyebrow">CONTRIBUTE</p>
				<h1>Write for This Study</h1>
				<div className="page-prose">
					<p>Scholars, clergy, religious, catechists, and teachers are invited to contribute essays or reflections on the Book of Revelation. You need not be Catholic, but your work should be professional, charitable, and respectful of the Catholic setting of this site.</p>

					<h2>What we welcome</h2>
					<ul className="page-list">
						<li>Short reflections (500–800 words) on a verse or symbol, for prayer or teaching.</li>
						<li>Study essays (1,200–2,500 words) on historical background, Old Testament roots, the Fathers, or the history of interpretation.</li>
						<li>Teaching notes for parish or classroom use.</li>
					</ul>

					<h2>Standards</h2>
					<ul className="page-list">
						<li>Ground claims in the text and in recognized scholarship; cite sources.</li>
						<li>Present other views fairly, especially where Christian traditions differ.</li>
						<li>No date-setting, sensational predictions, or identification of living people with the beast or the Antichrist.</li>
						<li>No polemics against any church or religious community.</li>
						<li>Original, unpublished work, or work you have the right to republish.</li>
					</ul>
					<p>Contributors from other traditions are asked not to argue against Catholic doctrine on this site. A note naming your tradition will appear with your piece, and Fr. John may add a short editorial note where Catholic teaching differs.</p>

					<h2>Editorial process</h2>
					<ol className="page-list page-list-ordered">
						<li>Send a short proposal (150 words) through the form below.</li>
						<li>If the topic fits, Fr. John will reply and invite a full draft.</li>
						<li>Drafts may be edited for length and clarity; you approve the final version before publication.</li>
						<li>Contributors may be credited by name and short description, or under a pen name and description, as they prefer.</li>
					</ol>

					<h2>Proposal form</h2>
				</div>

				{submitted ? (
					<div className="form-thankyou" role="status">
						<Check aria-hidden="true" />
						<div>
							<p className="form-thankyou-title">Thank you — your proposal has been sent.</p>
							<p className="form-thankyou-body">Fr. John will read it and reply if the topic fits. Your email is kept private and will not be published.</p>
						</div>
					</div>
				) : (
					<fetcher.Form method="post" className="submission-form" noValidate>
						{/* Honeypot: hidden from humans, bots fill it. Server rejects silently. */}
						<div className="honeypot" aria-hidden="true">
							<label htmlFor="website-proposal">Leave this field empty</label>
							<input id="website-proposal" name="website" type="text" tabIndex={-1} autoComplete="off" />
						</div>

						<div className="form-field">
							<label htmlFor="name">Name or pen name</label>
							<input id="name" name="name" type="text" required maxLength={200} defaultValue="" />
							{errors?.name ? <span className="form-error">{errors.name}</span> : null}
						</div>

						<div className="form-field">
							<label htmlFor="email">Email <span className="form-hint">(not published)</span></label>
							<input id="email" name="email" type="email" required defaultValue="" />
							{errors?.email ? <span className="form-error">{errors.email}</span> : null}
						</div>

						<div className="form-field">
							<label htmlFor="background">Background in one or two sentences</label>
							<input id="background" name="background" type="text" required maxLength={600} defaultValue="" />
							{errors?.background ? <span className="form-error">{errors.background}</span> : null}
						</div>

						<div className="form-field">
							<label htmlFor="title">Proposed title</label>
							<input id="title" name="title" type="text" required maxLength={300} defaultValue="" />
							{errors?.title ? <span className="form-error">{errors.title}</span> : null}
						</div>

						<div className="form-field">
							<label htmlFor="summary">Summary, about 150 words</label>
							<textarea id="summary" name="summary" rows={6} required maxLength={4000} defaultValue="" />
							{errors?.summary ? <span className="form-error">{errors.summary}</span> : null}
						</div>

						<div className="form-field form-field-check">
							<label htmlFor="standards" className="form-checkbox-label">
								<input id="standards" name="standards" type="checkbox" value="yes" required />
								<span>I have read the standards above.</span>
							</label>
							{errors?.standards ? <span className="form-error">{errors.standards}</span> : null}
						</div>

						<button type="submit" className="button-primary form-submit" disabled={fetcher.state === 'submitting'}>
							{fetcher.state === 'submitting' ? 'Sending…' : 'Send proposal'}
						</button>
					</fetcher.Form>
				)}
			</div>
		</section>
	);
}
