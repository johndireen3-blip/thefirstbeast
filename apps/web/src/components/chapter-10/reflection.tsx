import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'MYSTERY & TRUST', question: 'Can I live with what God has not told me?', thought: 'John must seal up the seven thunders. Where do I demand answers from God, and where can I trust him with what remains hidden?', reference: 'REVELATION 10:4' },
  { theme: 'WORD & NOURISHMENT', question: 'Am I feeding on God’s word?', thought: 'John eats the scroll before he speaks. How often do I let Scripture, especially the Sunday readings, sink in rather than just pass by?', reference: 'REVELATION 10:9–10' },
  { theme: 'SWEET & BITTER', question: 'Am I willing to taste both?', thought: 'The Gospel is sweet to receive and sometimes bitter to live and share. Where is God asking me to speak or act for him, even at a cost?', reference: 'REVELATION 10:10–11' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
