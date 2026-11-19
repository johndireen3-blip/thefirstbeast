import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'PRESENCE & CHURCH', question: 'Where do I look for Christ?', thought: 'John turns toward a voice and finds Christ standing among the lampstands, his churches. Do I expect to meet him in my parish, with all its imperfections?', reference: 'REVELATION 1:12–13' },
  { theme: 'FEAR & TOUCH', question: 'What makes me fall down afraid?', thought: 'The risen Christ lays his hand on John and says, “Do not be afraid.” What fear in my life needs that touch and that word?', reference: 'REVELATION 1:17' },
  { theme: 'SUNDAY & WITNESS', question: 'What does my Lord’s day look like?', thought: 'In exile and distress, John keeps the Lord’s day, and there he sees the vision. How does Sunday shape my week, especially in hard seasons?', reference: 'REVELATION 1:9–10' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
