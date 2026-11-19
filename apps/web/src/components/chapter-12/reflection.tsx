import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'VICTORY & ACCUSATION', question: 'Whose voice do I believe?', thought: 'Satan is “the accuser of our brothers.” When I hear accusation in my own heart, do I answer it with the mercy won by the Lamb’s blood?', reference: 'REVELATION 12:10' },
  { theme: 'TESTIMONY & COURAGE', question: 'What would I not give up?', thought: 'The faithful conquered by the Lamb’s blood and their testimony. Where is my own witness to Jesus quiet when it should speak?', reference: 'REVELATION 12:11' },
  { theme: 'REFUGE & TRUST', question: 'Where is my desert?', thought: 'God does not remove the woman from trial; he carries her through it and feeds her there. What season of my life might be a place God has prepared?', reference: 'REVELATION 12:6, 14' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
