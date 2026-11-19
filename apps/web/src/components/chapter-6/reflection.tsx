import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'FEAR & TRUST', question: 'Who holds the seals in my life?', thought: 'Every rider goes out only when the Lamb opens a seal. When war, illness or hard news comes, do I believe that Christ is still Lord of history?', reference: 'REVELATION 6:1' },
  { theme: 'WAITING & PRAYER', question: 'Can I bring my “How long?” to God?', thought: 'The martyrs pray honestly and are given white robes and asked to wait. What lament do I need to bring to God in prayer rather than bury?', reference: 'REVELATION 6:10–11' },
  { theme: 'HIDING & STANDING', question: 'Where do I run from the Lamb?', thought: 'The powerful hide in caves from the face of the Lamb. What do I avoid bringing before him, and how might Confession help me stand before him in peace?', reference: 'REVELATION 6:16–17' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
