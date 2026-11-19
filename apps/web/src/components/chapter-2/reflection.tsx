import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'LOVE & DUTY', question: 'Has my faith become only work?', thought: 'Ephesus did everything right except love. Where has my practice of the faith become routine, and what were “the works I did at first”?', reference: 'REVELATION 2:4–5' },
  { theme: 'POVERTY & RICHES', question: 'What do I count as wealth?', thought: 'Smyrna was poor and slandered, yet Christ calls it rich and offers no rebuke. Where might I be poor in the world’s eyes but rich in his?', reference: 'REVELATION 2:9–10' },
  { theme: 'COMPROMISE & FIDELITY', question: 'Where am I tempted to blend in?', thought: 'The banquets of Pergamum and Thyatira made compromise easy and costly to refuse. What “small accommodations” in my work or social life deserve a second look?', reference: 'REVELATION 2:14, 20' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
