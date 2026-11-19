import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'TEARS & HOPE', question: 'What makes me weep?', thought: 'John weeps because no one can open God’s plan, and he is told, “Do not weep.” What situation in my life or the world feels sealed shut, and can I hand it to the Lamb?', reference: 'REVELATION 5:4–5' },
  { theme: 'LION & LAMB', question: 'How do I expect God to win?', thought: 'John is told of a Lion and sees a slain Lamb. Where am I hoping for power when Christ is offering the way of self-giving love?', reference: 'REVELATION 5:5–6' },
  { theme: 'INCENSE & INTERCESSION', question: 'Do I believe my prayers reach heaven?', thought: 'The prayers of the holy ones rise like incense before God’s throne. Whom will I pray for this week, and which saints will I ask to pray with me?', reference: 'REVELATION 5:8' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
