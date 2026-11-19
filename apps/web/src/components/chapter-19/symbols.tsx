import { ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { symbols, heroImage } from '@/data/chapter-19';

export function Symbols() {
  return <section className="symbols-section" id="symbols" aria-labelledby="symbols-title">
    <div className="symbol-banner"><StudyImage src={heroImage} alt="Symbolic illustration of a crowned rider on a white horse leading armies in white from an opened heaven, above a radiant wedding banquet table and a bride in white" /><div className="symbol-banner-shade"/><div><p className="eyebrow">02 / THE SYMBOLS</p><h2 id="symbols-title">Promises drawn<br/>from Scripture.</h2><p>Read the signs in their scriptural and historical context.</p></div><span className="vertical-label">TWO SUPPERS, ONE INVITATION</span></div>
    <div className="symbol-list section-pad">{symbols.map(symbol => <article className="symbol-row" key={symbol.number}><span className="symbol-number">{symbol.number}</span><div><p className="eyebrow">{symbol.reference}</p><h3>{symbol.title}</h3></div><div><p>{symbol.description}</p><a className="text-link" href={symbol.link} target={symbol.link === '/how-catholics-read-revelation' || symbol.link === '/further-reading' || !symbol.link.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">{symbol.linkLabel} <ArrowUpRight size={15}/></a></div></article>)}</div>
    <div className="interpretation-note"><span>READ WITH CARE</span><p>The rider on the white horse is often read as a description of a literal, armed Second Coming in which Christ leads a military campaign at the end of time, and verses 17–21 have been used to picture a great final battle in the Middle East. The USCCB notes read the rider as a symbol of the exalted Christ. His only weapon is his word, his robe is stained with his own blood, and the enemy is captured without a fight. The Church professes that Christ “will come again in glory to judge the living and the dead,” but Revelation’s imagery describes the meaning of that victory, not its military details.</p></div>
  </section>;
}
