import { faqGroups } from '@/data/faq';

export function Faq() {
	return (
		<section className="page-section">
			<div className="page-content page-content-wide">
				<p className="eyebrow">QUESTIONS</p>
				<h1>Revelation FAQ: Frequently Asked Questions</h1>
				<div className="page-prose">
					<p>
						Short answers to the questions people most often ask about the Book of Revelation, each linking to the chapter where it is explained more fully.
					</p>
					{faqGroups.map((group) => (
						<div className="faq-group" key={group.heading}>
							<h2 className="faq-group-heading">{group.heading}</h2>
							<div className="faq-list">
								{group.entries.map((entry, index) => (
									<div className="faq-item" key={index}>
										<h3>{entry.question}</h3>
										<p>{entry.answer}</p>
										{entry.more ? (
											<p>
												<a className="page-link" href={entry.more.path} target={entry.more.path === '/how-catholics-read-revelation' || entry.more.path === '/further-reading' ? '_blank' : undefined} rel={entry.more.path === '/how-catholics-read-revelation' || entry.more.path === '/further-reading' ? 'noopener noreferrer' : undefined}>
													{entry.more.label}
												</a>
											</p>
										) : null}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
