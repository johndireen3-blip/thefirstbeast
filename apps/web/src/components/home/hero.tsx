import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Hero() {
	return (
		<section className="home-hero" id="top" aria-labelledby="home-title">
			<p className="eyebrow">THE BOOK OF REVELATION · A CATHOLIC STUDY</p>
			<h1 id="home-title">The Lamb’s Victory</h1>
			<p className="home-lead">Twenty-two chapters. One message: the Lamb who was slain has conquered.</p>
			<p className="home-prose">The Book of Revelation is the most vivid and most misunderstood book of the Bible. Its beasts and plagues have been used to frighten, to predict dates that came and went, and to accuse. The Church has always read it differently: as a book of hope, written to Christians under pressure, revealing that Christ has already won and calling his people to faithful endurance.</p>
			<p className="home-prose">This study reads Revelation one chapter at a time, in the light of Scripture and Catholic Tradition. Each chapter offers an original verse-by-verse guide, the historical background, the meaning of its symbols, and questions for reflection.</p>
			<div className="home-buttons">
				<Link className="button-primary" to="/chapter-1">Start with Chapter 1 <ArrowRight size={17} /></Link>
				<Link className="text-link" to="/how-catholics-read-revelation" target="_blank" rel="noopener noreferrer">How Catholics read Revelation <ArrowRight size={16} /></Link>
			</div>
		</section>
	);
}
