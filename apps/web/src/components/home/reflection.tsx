import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'POWER & WORSHIP', question: 'When does admiration become allegiance?', thought: 'The first beast inspires wonder and worship. Consider the difference between respecting authority and giving it the devotion that belongs to God.', reference: 'REVELATION 13:3–4' },
  { theme: 'APPEARANCE & TRUTH', question: 'What helps you recognize a deceptive voice?', thought: 'The second beast looks like a lamb but speaks like a dragon. Reflect on how you test a message beyond its appearance, popularity, or impressive signs.', reference: 'REVELATION 13:11–14' },
  { theme: 'FAITH & ENDURANCE', question: 'What does faithfulness look like under pressure?', thought: 'The chapter’s call to endurance sits within a difficult vision. Consider how prayer, community, and small acts of integrity can sustain faithful witness.', reference: 'REVELATION 13:9–10' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  const question = questions[index];
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite"><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div></section>;
}
