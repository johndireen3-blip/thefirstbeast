import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'TEARS & HOPE', question: 'What tears do I need God to wipe away?', thought: 'God himself will wipe every tear. What grief am I carrying, for someone I have lost or something I have suffered, that I can entrust to that promise today?', reference: 'REVELATION 21:4' },
  { theme: 'NEW & RENEWAL', question: 'What does God want to make new in me?', thought: '“Behold, I make all things new.” Is there a relationship, habit or wound I have given up on? Can I ask God to begin his new creation there?', reference: 'REVELATION 21:5' },
  { theme: 'LIGHT & WELCOME', question: 'Does my parish look like the city with open gates?', thought: 'The city’s gates are never shut, and the nations bring their glory in. Who is on the edge of my parish or family, and how could I help them feel welcome?', reference: 'REVELATION 21:24–25' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
