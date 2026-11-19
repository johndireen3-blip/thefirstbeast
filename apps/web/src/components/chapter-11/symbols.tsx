import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-11';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of two robed figures rising on a cloud toward an open heavenly temple where a golden ark glows amid lightning" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">SILENCED ≠ DEFEATED</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>The two witnesses are often identified with two specific people expected to appear in Jerusalem at the end of time. The USCCB notes say they “cannot readily be identified” and most probably represent the whole Church, especially the martyrs. “The great city” is not simply the earthly Jerusalem; the notes read it symbolically as Rome, the city that rejects God’s witnesses.</p></div>
  </section>;
}
