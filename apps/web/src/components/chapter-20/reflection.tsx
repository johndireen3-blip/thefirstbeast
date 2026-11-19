import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const questions = [
  { theme: 'BAPTISM & NEW LIFE', question: 'Do I live as one already raised?', thought: 'The first resurrection begins in Baptism. Do I know the date of my baptism? How might I celebrate it, and live this week as someone who already shares Christ’s life?', reference: 'REVELATION 20:6' },
  { theme: 'CHAIN & FREEDOM', question: 'Do I give the enemy more power than he has?', thought: 'The dragon is bound. Where do fear, anxiety or temptation feel stronger than Christ in my life, and can I name that before him in prayer?', reference: 'REVELATION 20:2–3' },
  { theme: 'BOOKS & DEEDS', question: 'What is written in my book?', thought: 'The dead are judged by their deeds, and saved by the book of life. If my book were opened today, what would I want to change, and what mercy do I need to ask for?', reference: 'REVELATION 20:12' }
];

export function Reflection() {
  const [index, setIndex] = useState(0);
  return <section className="reflection-section section-pad" id="reflection" aria-labelledby="reflection-title"><div className="reflection-intro"><p className="eyebrow">03 / THE REFLECTION</p><h2 id="reflection-title">Beyond the vision.<br/>Into our lives.</h2><p>Pause with the chapter.<br/>Let the questions lead to reflection, not fear.</p><div className="reflection-controls"><button aria-label="Previous reflection" onClick={() => setIndex((index + questions.length - 1) % questions.length)}><ArrowLeft size={19}/></button><span>0{index + 1} / 03</span><button aria-label="Next reflection" onClick={() => setIndex((index + 1) % questions.length)}><ArrowRight size={19}/></button></div></div><div className="reflection-question" aria-live="polite">{questions.map((question, i) => <div key={i} className="reflection-card" hidden={index !== i}><p className="eyebrow">{question.theme}</p><h3>{question.question}</h3><p>{question.thought}</p><span className="eyebrow">{question.reference}</span></div>)}</div></section>;
}
