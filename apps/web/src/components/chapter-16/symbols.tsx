import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-16';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of seven angels pouring golden bowls from a stormy sky onto a dark earth with a dried river and a distant mountain" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">JUDGMENT IS A CALL TO TURN BACK</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Armageddon has become a byword for a literal world war fought in the valley of Megiddo in northern Israel, and some popular teachers have linked it to whatever conflict fills the news. The USCCB notes read it as a symbol: because so many decisive battles were fought at Megiddo, the name stands for the final rout of the forces of evil. Notice, too, that no battle is actually described here. The kings gather, and the outcome is told in chapter 19, where they are defeated by the word of Christ.</p></div>
  </section>;
}
