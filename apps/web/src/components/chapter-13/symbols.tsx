import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, symbolsImage } from '@/data/chapter';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={symbolsImage} alt="Symbolic illustration of a two-horned creature on a rocky ridge beneath a stormy sky" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Not everything is<br/>as it appears.</h2><p>Read the imagery in its scriptural and historical context.</p></div><span className="vertical-label">APPEARANCE ≠ ALLEGIANCE</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>For centuries people have matched 666 and the mark of the beast to new technologies, vaccines, credit cards or microchips, and to particular leaders, nations or churches. None of these readings has any basis in the text. The mark is tied to worshiping the beast (14:9–11), a free act of allegiance, not something received unknowingly. The USCCB notes identify the beast with the Roman Empire and the number most likely with Nero, and they warn that “many candidates have been nominated” over the centuries. This guide does not identify present-day people as the beast.</p></div>
  </section>;
}
