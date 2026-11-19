import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'REPUTATION & REALITY', question: 'Am I more alive in name than in fact?', thought: 'Sardis looked healthy from the outside. Where am I coasting on past fervor, and what in me needs strengthening before it fades?', reference: 'REVELATION 3:1–3' },
  { theme: 'WEAKNESS & OPPORTUNITY', question: 'What door has been opened to me?', thought: 'Philadelphia had little strength and was given an open door anyway. Where is Christ inviting me to witness, even if I feel too small for it?', reference: 'REVELATION 3:8' },
  { theme: 'COMFORT & FERVOR', question: 'What makes me think I need nothing?', thought: 'Laodicea’s wealth dulled its hunger for God. What comfort keeps me lukewarm, and how will I answer the knock at the door this week?', reference: 'REVELATION 3:17–20' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
