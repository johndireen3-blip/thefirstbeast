import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-18';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of a great city burning on the horizon, ships watching from the sea, and an angel hurling a millstone into the waves" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">WHAT SEEMS ETERNAL FALLS IN AN HOUR</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Chapter 18 has been applied to many modern cities and nations, and some readers search the news for the “one hour” in which a particular economy will collapse. The USCCB notes read the lament as Rome’s fall, written in the symbolic language of the prophets, not as a literal report. Its message is timeless: every society that builds itself on idolatry, luxury and the exploitation of persons stands under the same judgment. Nor is the call to “rejoice” a call to gloat. Heaven rejoices that justice is done for the victims, not in suffering for its own sake.</p></div>
  </section>;
}
