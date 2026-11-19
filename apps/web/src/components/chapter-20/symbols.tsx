import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-20';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of an angel with a key and chain binding a dragon in an abyss, beneath a great white throne with open scrolls" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">THE DRAGON IS ALREADY BOUND</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Many Christians read Revelation 20 as a prediction of a literal thousand-year earthly kingdom, ruled by Christ from Jerusalem, either before or after his Second Coming (premillennialism and postmillennialism), often combined with a “rapture.” The Catholic Church does not hold these views. The Catechism rejects “even modified forms” of the idea of a millennial kingdom within history (CCC 676). Following St. Augustine and the USCCB notes, the Church reads the thousand years symbolically, as the present age in which Christ already reigns and his people share in that reign through Baptism. Gog and Magog, likewise, are symbols of all the nations hostile to God, not codes for particular modern states.</p></div>
  </section>;
}
