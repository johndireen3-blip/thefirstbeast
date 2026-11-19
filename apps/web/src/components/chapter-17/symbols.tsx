import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-17';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of a robed woman with a golden cup seated on a scarlet seven-headed beast in a desert, with a city on seven hills and a white lamb in the sky" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">TWO WOMEN, TWO CITIES</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>Over the centuries, the harlot Babylon has been identified with the papacy and the Catholic Church, especially in Reformation-era and some modern polemics, with the seven hills taken as proof. The USCCB notes, following most scholars, identify Babylon with imperial Rome of John’s day, the persecuting power that demanded the worship of the emperor and was drunk with the blood of the martyrs, including Peter and Paul. The harlot is the city that killed the apostles, not the Church they founded. In every age, Babylon stands for any society that makes wealth, power or the state an idol.</p></div>
  </section>;
}
