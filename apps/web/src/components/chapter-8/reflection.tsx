import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'SILENCE & LISTENING', question: 'When was I last truly silent before God?', thought: 'Heaven itself falls silent before God acts. Where can I make room for silence this week, at Mass or in prayer?', reference: 'REVELATION 8:1' },
  { theme: 'PRAYER & POWER', question: 'Do I believe my prayers make a difference?', thought: 'The prayers of the holy ones rise with the incense, and God answers. What intention have I stopped praying for because I doubted it mattered?', reference: 'REVELATION 8:3–5' },
  { theme: 'WARNING & CONVERSION', question: 'What alarm am I ignoring?', thought: 'The trumpets strike only a third: a warning, not the end. What call to change have I been putting off, and how might Confession help me answer it?', reference: 'REVELATION 8:7–13' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
