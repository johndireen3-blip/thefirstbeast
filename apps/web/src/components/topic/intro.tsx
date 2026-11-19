type TopicIntroProps = {
	heading: string;
	paragraphs: string[];
	leadParagraph?: { question: string; body: string };
};

export function TopicIntro({ heading, paragraphs, leadParagraph }: TopicIntroProps) {
	return (
		<section className="where-it-fits section-pad" id="intro" aria-labelledby="intro-title">
			<div className="section-heading">
				<p className="eyebrow">01 / INTRODUCTION</p>
				<h2 id="intro-title">{heading}</h2>
			</div>
			<div className="where-prose">
				{leadParagraph && (
					<p>
						<strong>{leadParagraph.question}</strong> {leadParagraph.body}
					</p>
				)}
				{paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
		</section>
	);
}
