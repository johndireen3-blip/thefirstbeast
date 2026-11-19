import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-6';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of four horses, white, red, black and pale green, riding across a darkened plain beneath a scroll with broken seals" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">SUFFERING ≠ DEFEAT</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>The four horsemen and the sixth seal are often matched to particular wars, pandemics or news events as proof that the end is near. The USCCB notes call these signs “symbolic rather than literal,” describing troubles that recur in every age. Jesus himself warned against such date-setting: “it will not immediately be the end” (Luke 21:9).</p></div>
  </section>;
}
