import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols } from '@/data/chapter';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src="https://images.hostinger.com/18a5de28-4e5b-4275-a809-e3452415c86c.png" alt="Symbolic illustration of a two-horned creature on a rocky ridge beneath a stormy sky" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Not everything is<br/>as it appears.</h2><p>Read the imagery in its scriptural and historical context.</p></div><span className="vertical-label">APPEARANCE ≠ ALLEGIANCE</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target="_blank" rel="noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>This guide follows the historical context presented in the USCCB notes. Christian traditions also approach Revelation in other ways. Its imagery calls for discernment, not sensational predictions.</p></div>
  </section>;
}
