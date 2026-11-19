import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'SEA & CROSSING', question: 'What have I come through?', thought: 'The victors stand on the far shore and sing. What trial in my life has God already brought me through, and have I thanked him for it?', reference: 'REVELATION 15:2' },
  { theme: 'SONG & PRAISE', question: 'Is my prayer about God or about me?', thought: 'Their song never mentions their own victory, only God’s works and ways. This week, can I pray one prayer of pure praise, asking for nothing?', reference: 'REVELATION 15:3–4' },
  { theme: 'BOWLS & PRAYER', question: 'Do I believe my prayers matter?', thought: 'The bowls that held the prayers of the holy ones now carry God’s answer. Whom have I stopped praying for, and can I take them up again?', reference: 'REVELATION 15:7' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
