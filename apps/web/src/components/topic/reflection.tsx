type TopicReflectionProps = {
	theme: string;
	question: string;
	thought: string;
	reference: string;
};

export function TopicReflection({ theme, question, thought, reference }: TopicReflectionProps) {
	return (
		<section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title">
			<div className="reflection-intro">
				<p className="eyebrow">03 / THE REFLECTION</p>
				<h2 id="reflection-title">Beyond the vision.<br />Into our lives.</h2>
			</div>
			<div className="reflection-question">
				<p className="eyebrow">{theme}</p>
				<h3>{question}</h3>
				<p>{thought}</p>
				<span className="eyebrow">{reference}</span>
			</div>
		</section>
	);
}
