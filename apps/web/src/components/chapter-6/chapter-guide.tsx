import { useState } from 'react';
import { ArrowUpRight, BookOpen, Minus, Plus } from 'lucide-react';
import { passages, sourceUrl } from '@/data/chapter-6';

export function ChapterGuide() {
  const [selected, setSelected] = useState(0);
  const [large, setLarge] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  return <section className="chapter-section section-pad" id="chapter" aria-labelledby="chapter-title">
    <div className="section-heading"><p className="eyebrow">01 / THE CHAPTER</p><h2 id="chapter-title">Enter the vision.</h2><p>Seventeen verses in three movements.<br/>An original reading guide, not a Bible translation.</p></div>
    <div className="reader-layout">
      <div className="reader-nav" role="tablist" aria-label="Chapter passages">
        {passages.map((item, index) => <button key={item.id} role="tab" id={`tab-${item.id}`} aria-controls="passage-panel" aria-selected={selected === index} className={selected === index ? 'passage-tab active' : 'passage-tab'} onClick={() => setSelected(index)}><span className="tab-index">0{index + 1}</span><span>{item.label}<small>VERSES {item.range}</small></span><ArrowUpRight size={17}/></button>)}
        <div className="reader-source"><BookOpen size={20}/><p>An original reading guide, not a Bible translation.</p><a href={sourceUrl} target="_blank" rel="noreferrer">Full text & notes on USCCB <ArrowUpRight size={14}/></a></div>
      </div>
      <div className="reader-panel" id="passage-panel" role="tabpanel">
        {passages.map((passage, index) => <div key={passage.id} className="passage-panel-item" hidden={selected !== index} aria-labelledby={`tab-${passage.id}`}>
          <div className="reader-topline"><span>REVELATION 6:{passage.range.replace('–', '–')}</span><div><button onClick={() => setShowNotes(!showNotes)} aria-pressed={showNotes}>{showNotes ? 'Hide context' : 'Show context'}</button><button aria-label={large ? 'Use standard text size' : 'Use larger text size'} onClick={() => setLarge(!large)} aria-pressed={large}>A{large ? <Minus size={12}/> : <Plus size={12}/>}</button></div></div>
          <h3>{passage.title}</h3><p className="passage-intro">{passage.intro}</p>
          <div className={large ? 'verse-list large-text' : 'verse-list'}>{passage.verses.map(verse => <p key={verse.number}><span>{String(verse.number).padStart(2, '0')}</span>{verse.text}</p>)}</div>
          {showNotes && <aside className="context-note"><p className="eyebrow">HISTORICAL CONTEXT / USCCB NOTES</p><p>{passage.note}</p></aside>}
          <div className="reader-bottom"><span>ORIGINAL VERSE SUMMARIES</span>{index < passages.length - 1 ? <button onClick={() => setSelected(index + 1)}>Next movement <ArrowUpRight size={16}/></button> : <a href="#symbols">Explore the symbols <ArrowUpRight size={16}/></a>}</div>
        </div>)}
      </div>
    </div>
  </section>;
}
