import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'FACE & LONGING', question: 'Do I long to see God’s face?', thought: 'The end of the whole story is not a place but a face. When I pray, am I seeking gifts from God, or God himself? Can I spend five minutes this week simply in his presence, before the Blessed Sacrament if I can?', reference: 'REVELATION 22:4' },
  { theme: 'WASHED & FORGIVEN', question: 'When did I last wash my robe?', thought: 'Those who wash their robes in the Lamb’s blood enter the city. Is it time for me to return to the sacrament of Reconciliation?', reference: 'REVELATION 22:14' },
  { theme: 'COME & WITNESS', question: 'Whom can I invite to come?', thought: 'The Spirit and the bride say “Come,” and all who hear are to say it too. Who in my life is thirsty, and how can I invite them to the water of life?', reference: 'REVELATION 22:17' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
