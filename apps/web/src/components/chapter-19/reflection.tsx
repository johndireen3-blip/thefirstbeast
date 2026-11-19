import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'PRAISE & ALLELUIA', question: 'Do I take time simply to praise?', thought: 'Heaven’s response to God’s justice is Alleluia. Could I pray one of the Hallel psalms (Ps 113–118) this week and make its praise my own?', reference: 'REVELATION 19:1' },
  { theme: 'WEDDING & EUCHARIST', question: 'Do I come to Mass as to a wedding feast?', thought: '“Blessed are those called to the supper of the Lamb.” How might I prepare differently for my next Mass, knowing I am an invited guest?', reference: 'REVELATION 19:9' },
  { theme: 'WORD & SWORD', question: 'Do I let the Word of God cut through my excuses?', thought: 'Christ’s weapon is the word of his mouth. Is there a Gospel passage I keep avoiding because it challenges me? Can I sit with it this week?', reference: 'REVELATION 19:13–15' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
