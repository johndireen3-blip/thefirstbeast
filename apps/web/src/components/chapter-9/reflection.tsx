import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'SEAL & SAFETY', question: 'Do I trust God’s protection in the dark?', thought: 'The locusts cannot harm those who bear God’s seal. When evil seems strong, how can I lean on the grace of my Baptism and Confirmation?', reference: 'REVELATION 9:4' },
  { theme: 'DESTROYER & CREATOR', question: 'What in my life only destroys?', thought: 'Evil’s king is named Destroyer. Which habits, words or influences tear down rather than build up, and what would it take to let them go?', reference: 'REVELATION 9:11' },
  { theme: 'IDOLS & REPENTANCE', question: 'What am I refusing to give up?', thought: 'Even after the plagues, people cling to their idols. What “work of my hands” have I put in God’s place, and when will I next go to Confession?', reference: 'REVELATION 9:20–21' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
