import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols } from '@/data/chapter-12';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src="https://images.hostinger.com/3ede936f-2995-4a5d-9dd7-bea4a52f3e32.png" alt="Symbolic illustration of the archangel Michael casting down a great red dragon" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Glory does not<br/>mean immunity.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">GLORY ≠ IMMUNITY</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>The USCCB notes read the woman as God’s people, Israel and the Church; Catholic tradition also sees Mary. Benedict XVI summed it up: she represents “at the same time Our Lady and the Church.” This guide presents both, as the Church does, and does not use the chapter’s signs to predict events.</p></div>
  </section>;
}
