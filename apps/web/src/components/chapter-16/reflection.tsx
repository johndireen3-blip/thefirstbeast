import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'HEART & REPENTANCE', question: 'Where have I hardened my heart?', thought: 'Three times people suffer and still refuse to turn back. Is there a warning in my life I keep explaining away? Could I bring it to the sacrament of Reconciliation?', reference: 'REVELATION 16:9–11' },
  { theme: 'WATCHING & READY', question: 'Am I awake?', thought: 'Christ interrupts the vision to say: stay awake. What keeps me spiritually asleep, and what one practice of prayer could help me keep watch?', reference: 'REVELATION 16:15' },
  { theme: 'WORDS & TRUTH', question: 'What voices am I listening to?', thought: 'The frog-like spirits come from the mouths of the dragon and the beast. Which voices in my news, feeds and conversations draw me away from truth and charity?', reference: 'REVELATION 16:13–14' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
