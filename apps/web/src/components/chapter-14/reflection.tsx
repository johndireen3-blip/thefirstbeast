import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'NAME & BELONGING', question: 'Whose name do I carry?', thought: 'The Lamb’s people bear his name on their foreheads. In the choices I make this week, at work, online and at home, whose name am I showing to the world?', reference: 'REVELATION 14:1' },
  { theme: 'SONG & FOLLOWING', question: 'Do I follow the Lamb wherever he goes?', thought: 'The new song is learned by following, not by listening. Where is Christ leading me that I have been reluctant to go?', reference: 'REVELATION 14:4' },
  { theme: 'WORKS & REST', question: 'What will follow me?', thought: 'Blessed are those who die in the Lord, for their works go with them. What work of love could I begin today that I would be glad to bring before God?', reference: 'REVELATION 14:13' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
