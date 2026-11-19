import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-21';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of a radiant golden city with pearl gates and jeweled foundations descending from the sky onto a renewed earth" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">THE BRIDE, NOT THE HARLOT</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Some readers calculate the city’s dimensions, about 1,500 miles on each side, as the literal size of a future space city or a rebuilt Jerusalem, or treat the gold and jewels as a description of heaven’s architecture. The USCCB notes read the measures and materials as symbols: twelve and its multiples for the complete People of God, the cube for perfection, the gold and gems for the Church’s beauty. Nor is the “new earth” an escape from the material world. The Church teaches that God will not discard creation but renew it, and that our bodies will be raised (CCC 1042–1047).</p></div>
  </section>;
}
