import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'BAPTISM & BELONGING', question: 'Do I remember whose I am?', thought: 'God’s servants are sealed before the storm. How might remembering my Baptism change the way I face what frightens me?', reference: 'REVELATION 7:3' },
  { theme: 'NUMBER & MULTITUDE', question: 'Is my idea of the Church too small?', thought: 'John expects a number and sees a crowd from every nation. Whom do I quietly leave out of God’s people?', reference: 'REVELATION 7:9' },
  { theme: 'TEARS & SHEPHERD', question: 'Which tears am I waiting for God to wipe away?', thought: 'The Lamb shepherds his people to living water. What sorrow can I entrust to him today, and which saint will I ask to pray for me this All Saints’ Day?', reference: 'REVELATION 7:17' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
