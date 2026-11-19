import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols } from '@/data/chapter-4';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src="https://images.hostinger.com/7bede589-2163-47ca-9a94-877e18aa7409.png" alt="Symbolic illustration of a radiant throne with an emerald rainbow, seven torches and a sea of glass, with elders in white casting down golden crowns" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">CHAOS ≠ CONTROL</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Some popular teachers read the open door of 4:1 as a secret “rapture” of the Church before a time of tribulation. The text describes John alone being caught up in a vision, and the Church has never taught a pre-tribulation rapture. Revelation’s point is the opposite of escape: God reigns now, even while his people suffer on earth.</p></div>
  </section>;
}
