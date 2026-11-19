import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'CUP & SEDUCTION', question: 'What glitters in my life?', thought: 'Babylon’s cup is gold on the outside. What attractive thing in my life, money, status, approval, quietly draws me away from God?', reference: 'REVELATION 17:4' },
  { theme: 'CALLED & FAITHFUL', question: 'Am I among the faithful?', thought: 'Those with the Lamb are called, chosen and faithful. God has called and chosen me. Where is he asking me, this week, simply to be faithful?', reference: 'REVELATION 17:14' },
  { theme: 'POWER & TRUST', question: 'Where do I place my security?', thought: 'The beast turns on the city that trusted it. Am I relying on any power, political, financial or personal, more than I rely on God?', reference: 'REVELATION 17:16–17' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
