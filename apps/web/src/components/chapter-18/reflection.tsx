import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'COMING OUT & CONVERSION', question: 'What do I need to come out of?', thought: 'God calls his people out of Babylon’s sins, not out of the world. What habit, purchase or way of thinking do I share with Babylon that I could leave behind this week?', reference: 'REVELATION 18:4' },
  { theme: 'GOODS & PERSONS', question: 'Who pays the price for what I buy?', thought: 'Babylon’s cargo ends with human lives. Can I learn where one thing I buy regularly comes from, and choose in a way that respects the workers who made it?', reference: 'REVELATION 18:13' },
  { theme: 'TREASURE & HEART', question: 'What would I mourn if it were gone in an hour?', thought: 'The merchants weep for lost markets. If my possessions vanished in a single hour, what would remain? Where is my true treasure (Matt 6:19–21)?', reference: 'REVELATION 18:17' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
