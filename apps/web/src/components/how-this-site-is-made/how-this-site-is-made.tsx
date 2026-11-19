export function HowThisSiteIsMade() {
  return <section className="page-section">
			<div className="page-content">
				<p className="eyebrow">HOW THIS SITE IS MADE</p>
				<h1>How This Site Is Made</h1>
				<div className="page-prose">
					<h2>Why this project exists</h2>
					<p>The Lamb's Victory is part of The Ephesus Challenge, a family of websites on the Book of Revelation and Christian hope, founded and directed by Fr. John. Its pages are researched and written with Claude, an AI model made by Anthropic.</p>
					<p>The project began from a simple hope. For two thousand years the Church has thought, prayed and written about God's plan of creation and salvation, from the first promise in Genesis 3:15 to the vision of the new Jerusalem. That inheritance is vast and often hard to reach. An AI model can help gather it, organize it and present it so that anyone searching can find it and understand it.</p>
					<p>The project also takes its cue from Pope Leo XIV's first encyclical, <a className="page-link" href="https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html" target="_blank" rel="noopener noreferrer"><em>Magnifica Humanitas: On Safeguarding the Human Person in the Time of Artificial Intelligence</em></a>, presented at the Vatican on May 25, 2026, where Anthropic co-founder Christopher Olah spoke. Many people fear what AI may do. This project tries to show, openly and page by page, what AI can do in the service of the truth when it works within clear rules and under human direction.</p>
					<p>The name comes from Christ's letter to the church at Ephesus, which he praised for its labor and its testing of false teachers, and then warned: &ldquo;you have lost the love you had at first&rdquo; (Revelation 2:4). Knowledge of Scripture is good, but it cannot take the place of love for God and neighbor. Every page here is written to lead readers to Christ, not merely to inform them.</p>

					<h2>Who does what</h2>
					<div className="table-wrap">
						<table className="page-table">
							<tbody>
								<tr>
									<td><strong>Fr. John</strong></td>
									<td>Founded the project and directs it. He sets its purpose and its rules, chooses what is studied, contributes his own reflections, reviews pages, and decides what is published. He is a Catholic diocesan priest, not an academic scholar of Scripture.</td>
								</tr>
								<tr>
									<td><strong>Claude</strong> (Anthropic)</td>
									<td>Does most of the research and writing: finding and checking sources, drafting pages, organizing the material, and building and publishing the site. Claude works within the rules below and under Fr. John's direction.</td>
								</tr>
								<tr>
									<td><strong>The Church</strong></td>
									<td>Neither Fr. John nor Claude is the authority here. That belongs to Sacred Scripture, Sacred Tradition and the Magisterium of the Catholic Church, which is why every claim on this site shows its source.</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>Every page says who made it. Most carry the line <em>Researched and written with Claude, an AI model made by Anthropic. Directed by Fr. John.</em> Pages Fr. John wrote himself say <em>Written by Fr. John.</em> A page he has read and approved also carries the mark <strong>&#10003; Reviewed by Fr. John</strong>.</p>

					<h2>The rules Claude works within</h2>
					<p>Fr. John set seven rules for the whole project. Claude follows them on every page, and they are the guardrails this project is meant to show at work.</p>
					<ol className="page-list page-list-ordered">
						<li><strong>Love first</strong> (Revelation 2:4). Knowledge serves charity. No page is written to win an argument or to stir fear.</li>
						<li><strong>With the Church.</strong> Scripture is read with Tradition and the Magisterium. Every claim is labeled by its level of authority, and private revelation is kept in its place (Catechism 67).</li>
						<li><strong>No date-setting.</strong> &ldquo;Of that day and hour no one knows&rdquo; (Matthew 24:36; Catechism 673).</li>
						<li><strong>Persons treated justly.</strong> Where living or historical figures are discussed as possible fulfillments of prophecy, they appear only as attributed arguments, with the case for and against and the Church's caution visible. Never as settled fact, and never in a way that invites hostility.</li>
						<li><strong>Checkable sources.</strong> Every quotation is cited to a source you can check. Nothing is invented.</li>
						<li><strong>Hope.</strong> &ldquo;Do not be afraid&rdquo; (Luke 12:7).</li>
						<li><strong>Truthful about who did what.</strong> Every page says who researched, wrote, directed and reviewed it.</li>
					</ol>

					<h2>How sources are checked and pages reviewed</h2>
					<p><strong>Sources.</strong> Scripture is quoted briefly from the New American Bible, Revised Edition, and linked to the full text at bible.usccb.org. Church documents link to the Vatican's own copies wherever they exist. Quotations from the Fathers, saints and other writers name a book, edition and page, or a document someone can look up. Sayings that circulate online without a source are not used, and disputed attributions are marked as disputed.</p>
					<p><strong>Levels of authority.</strong> Each claim shows what kind of claim it is: Scripture; the Church's teaching (the Catechism, councils and popes); the Fathers and Doctors of the Church; approved private revelation, with the Church's official judgment; the saints and other writers; or Fr. John's own reflection. A reflection is always marked as one.</p>
					<p><strong>Review.</strong> Substantial new pages come to Fr. John as drafts first. Small fixes and planned pages may be published before he has read them. The mark <strong>&#10003; Reviewed by Fr. John</strong> appears only on pages he has actually read and approved; a page without it has not yet been reviewed.</p>

					<h2>What AI can get wrong, and how to tell us</h2>
					<p>Claude is capable, but it can make mistakes. It can misread a source, cite the wrong verse or page, or present a debated point with more confidence than it deserves. The rules above and Fr. John's review are there to catch such errors, but no review catches everything.</p>
					<p>If you find a mistake, please write to <a className="page-link" href="mailto:frjohn@thelambsvictory.org">frjohn@thelambsvictory.org</a> with the page and what you found. Corrections are made openly: a corrected page carries a short note saying what changed and when. A page is never quietly altered to hide an error.</p>

					<h2>Independence</h2>
					<p>The Ephesus Challenge is an independent project. Fr. John is a Catholic diocesan priest, but this project is his own and is not affiliated with or endorsed by his diocese, the United States Conference of Catholic Bishops, Anthropic, or any other organization. Anthropic makes Claude, the AI model used to write these pages, and has no role in the project's content. Nothing here speaks for the Church; for that, the Catechism and the documents linked on each page are the place to go.</p>
				</div>
			</div>
		</section>;
}