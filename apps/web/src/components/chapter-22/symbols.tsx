import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-22';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of a crystal river flowing from a throne with a white lamb, lined on both banks by fruit-bearing trees of life under a morning star" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">THE END IS A FACE, NOT A FEAR</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>“I am coming soon” has led some to set dates for Christ’s return and others to conclude that Revelation was simply mistaken, since nearly two thousand years have passed. The Church reads “soon” in the light of 2 Peter 3:8–9: with the Lord a thousand years are like a day, and his patience is for our salvation. Since the Ascension, the Catechism teaches, Christ’s coming in glory is “imminent,” though “it is not for you to know times or seasons” (CCC 673). The warning of verses 18–19 is about tampering with this prophecy, not a ruling on which books belong in the Bible; the canon was discerned by the Church over time.</p></div>
  </section>;
}
