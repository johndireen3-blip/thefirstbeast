import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'WITNESS & COURAGE', question: 'Where am I called to testify?', thought: 'The witnesses prophesy in sackcloth, humble and persistent. Where in my family, work or parish is God asking me to speak the truth with love?', reference: 'REVELATION 11:3' },
  { theme: 'SILENCE & RESURRECTION', question: 'What has the world tried to silence in me?', thought: 'The witnesses are killed, then raised by the breath of God. What part of my faith feels dead or mocked, and can I ask the Spirit to breathe life into it again?', reference: 'REVELATION 11:7–11' },
  { theme: 'ARK & MOTHER', question: 'Do I let Mary bring me to Christ?', thought: 'The ark appears, and then the Woman. How might praying the Rosary or the Angelus this week draw me closer to the One she carried?', reference: 'REVELATION 11:19' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
