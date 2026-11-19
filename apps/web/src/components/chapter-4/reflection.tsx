import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'THRONE & HEADLINES', question: 'Who do I think is in charge?', thought: 'John’s churches lived under Rome’s power, yet he sees God’s throne at the center. When the news unsettles me, where do I look first?', reference: 'REVELATION 4:2' },
  { theme: 'CROWNS & GIFTS', question: 'What would I need to lay down?', thought: 'The elders cast their crowns before the throne. Which achievements or honors do I hold onto as if they were mine alone?', reference: 'REVELATION 4:10' },
  { theme: 'SANCTUS & SUNDAY', question: 'Do I know whose song I am joining?', thought: 'At every Mass we sing “Holy, holy, holy” with the living creatures and the elders. How might that change the way I pray it next Sunday?', reference: 'REVELATION 4:8' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
