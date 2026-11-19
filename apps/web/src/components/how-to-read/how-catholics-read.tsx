import { Link } from 'react-router';

export function HowCatholicsRead() {
	return (
		<section className="page-section">
			<div className="page-content page-content-wide">
				<p className="eyebrow">METHOD</p>
				<h1>How Catholics Read the Book of Revelation</h1>
				<div className="page-prose">
					<p>The Catholic Church reads Revelation as a prophecy of Christ's victory, rooted in its first-century setting and speaking to every generation, not as a coded timetable of future events. The Church has never defined a single interpretation of the beasts or the number, but she gives clear principles for reading them.</p>

					<h2>Three principles from the Church</h2>
					<p>The Second Vatican Council's Dei Verbum (no. 12) asks readers to do three things together:</p>
					<ol className="page-list page-list-ordered">
						<li>Seek what the human author intended. John wrote to seven real churches in Roman Asia Minor (Rev 1–3). His images first spoke to their world: emperor worship, persecution, and pressure to compromise.</li>
						<li>Read Scripture as a whole. Revelation is woven from the Old Testament, especially Daniel, Ezekiel, Exodus, and the Psalms. Its symbols are explained by those books, not by newspaper headlines.</li>
						<li>Read within the living Tradition and the analogy of faith. The Church Fathers, the liturgy, and the teaching of the Church guide interpretation.</li>
					</ol>
					<p>The Catechism (nos. 115–119) adds the senses of Scripture: the literal sense (what the text means in its setting) and the spiritual senses — allegorical (how it points to Christ), moral (how we should live), and anagogical (how it points to our final end).</p>

					<h2>Four ways Christians have read Revelation</h2>
					<div className="table-wrap">
						<table className="page-table">
							<thead>
								<tr>
									<th>Approach</th>
									<th>Main idea</th>
									<th>Where it appears</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Historical (preterist)</td>
									<td>The visions describe John's own time, especially Rome.</td>
									<td>Much modern scholarship; the USCCB notes</td>
								</tr>
								<tr>
									<td>Church-historical (historicist)</td>
									<td>The visions map the course of Church history.</td>
									<td>Some medieval and Reformation-era readers</td>
								</tr>
								<tr>
									<td>Future (futurist)</td>
									<td>The visions mostly describe the last days before Christ's return.</td>
									<td>Popular evangelical writing; some patristic elements</td>
								</tr>
								<tr>
									<td>Spiritual (idealist)</td>
									<td>The visions show the timeless struggle between Christ and evil.</td>
									<td>Augustine, Tyconius, and much of the Latin tradition</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>Catholic commentators usually hold the historical and spiritual readings together. The beast was Rome for John's first readers. It is also every power that demands the worship owed to God. And the Church still awaits a final trial before Christ's return.</p>

					<h2>What the Church teaches about the end</h2>
					<p>The Catechism (nos. 675–677) teaches that before Christ comes again, the Church must pass through a final trial that will shake the faith of many, including a religious deception that offers apparent solutions at the price of apostasy. The Church rejects any form of "millenarianism" that promises a perfect kingdom within history, and teaches that the Kingdom will come through God's victory over evil, not through a gradual human triumph.</p>

					<h2>The Fathers on Revelation</h2>
					<ul className="page-list">
						<li>St. Irenaeus (2nd century) discussed the number of the beast and urged restraint in naming the antichrist.</li>
						<li>Victorinus of Pettau (3rd century) wrote the earliest surviving Latin commentary and noticed that John's visions often retell the same events from different angles.</li>
						<li>St. Augustine (City of God, Book 20) read much of Revelation as describing the whole age of the Church between Christ's first and second coming.</li>
					</ul>

					<h2>Read with the liturgy</h2>
					<p>Revelation is full of worship: hymns, an altar, incense, and the Lamb who was slain. Catholics hear it at Mass, especially in the Easter season. Chapter 13 is a dark counter-image: false worship, a false lamb, and a mark of false belonging. The answer to it is the true worship of chapters 4–5.</p>

					<p className="sources-note">
						Sources:{' '}
						<a className="page-link" href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html" target="_blank" rel="noopener noreferrer">Dei Verbum</a> ·{' '}
						<a className="page-link" href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" target="_blank" rel="noopener noreferrer">Catechism of the Catholic Church</a> ·{' '}
						<a className="page-link" href="https://bible.usccb.org/bible/revelation/0" target="_blank" rel="noopener noreferrer">USCCB introduction to Revelation</a>.
					</p>
					<p>Start reading: <Link className="page-link" to="/chapter-1">Chapter 1</Link> · <Link className="page-link" to="/topics/the-millennium">The Millennium</Link> · <Link className="page-link" to="/topics/the-rapture">The Rapture</Link> · <Link className="page-link" to="/faq">Revelation FAQ</Link></p>

				<p>The Church names no one and sets no date, and she asks her members to watch and to think. For eleven questions to weigh any reading, your own included, see <Link className="page-link" to="/how-to-test-a-reading">How to Test a Reading of Revelation</Link>.</p>
				</div>
			</div>
		</section>
	);
}
