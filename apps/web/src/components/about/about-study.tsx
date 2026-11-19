import { Link } from 'react-router';
export function AboutStudy() {
  return <section className="page-section">
			<div className="page-content">
				<p className="eyebrow">ABOUT</p>
				<h1>About This Study</h1>
				<div className="page-prose">
					<p>The Lamb's Victory is a Catholic study of the Book of Revelation, read chapter by chapter. It was founded and is directed by Fr. John, a Catholic diocesan priest with a special interest in the Book of Revelation, as part of The Ephesus Challenge, his family of websites on Revelation and Christian hope.</p>
					<p>Few books of the Bible are quoted more and understood less. Revelation 13, with its beasts, its mark, and its mysterious number, has been used to sell fear, to predict dates that came and went, and to accuse neighbors. Yet the Church has always read it as a book of hope, written to strengthen Christians under pressure to give their allegiance to something other than God.</p>
					<p>This study reads the Book of Revelation chapter by chapter, slowly and faithfully. It follows the Catholic way of reading Scripture: attentive to what the human author meant for his first readers, read within the whole of Scripture, and received within the living Tradition of the Church. The Church Fathers, the Catechism, and the notes of the New American Bible guide the work, alongside the best scholarship of other Christian traditions. Its name comes from Revelation 17:14: the beasts make war, but the Lamb will conquer.</p>
					<p><strong>Who does what.</strong> Fr. John chose the subject, sets the study's purpose and rules, and directs the work. The pages are researched and written with Claude, an AI model made by Anthropic, under his direction. The authority rests with Scripture, Tradition and the Magisterium. <Link className="page-link" to="/how-this-site-is-made">How this site is made</Link> explains the rules Claude follows and how sources are checked.</p>
					<p>Three convictions shape every page:</p>
					<ul className="page-list">
						<li>Revelation is about Christ, not about calendars. Its symbols reveal the victory of the slain Lamb, not a timetable to decode.</li>
						<li>Discernment over fear. The chapter asks for wisdom and endurance, not panic.</li>
						<li>Charity in disagreement. Christians have read this chapter in many ways. Other views are presented fairly.</li>
					</ul>
					<h2>The emblem</h2>
					<p>The emblem shows the Lamb with the banner of his victory beneath seven stars. He is the Lamb who was slain and now stands (Revelation 5:6), who will conquer because he is Lord of lords and King of kings (17:14); the white banner with its red cross is the old Christian sign of his Resurrection. The seven stars are those he holds in his right hand, the angels of the seven churches (1:16, 20): the Lamb is shown with his Church.</p>
					<p>An independent project. Fr. John is a Catholic diocesan priest, but this project is his own and is not affiliated with or endorsed by his diocese, the USCCB, Anthropic, or any other organization. It does not replace the teaching of the Church, and Fr. John's own reflections are marked as his.</p>
					<p>If you have a question or a reflection, Fr. John would be glad to hear it on the <Link className="page-link" to="/discussion">Discussion page</Link>. Scholars and teachers who would like to contribute are welcome too; see <Link className="page-link" to="/contribute">Contribute</Link>.</p>
				</div>
			</div>
		</section>;
}