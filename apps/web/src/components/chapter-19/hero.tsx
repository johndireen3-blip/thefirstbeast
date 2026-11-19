import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-19';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a crowned rider on a white horse leading armies in white from an opened heaven, above a radiant wedding banquet table and a bride in white" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 19 Explained: The Wedding Feast of the Lamb</h1>
      <p className="hero-display">ALLELUIA.<br/>WEDDING.<br/><span>WORD.</span></p>
      <p className="hero-description">Heaven sings Alleluia.<br/>The Bride is ready.<br/>The Word of God rides out, Faithful and True.</p>
      <p className="hero-detail">See how the fall of Babylon opens onto the wedding feast of the Lamb, and how Christ conquers by the word of his mouth.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—21 VERSES <i/> THE WEDDING FEAST OF THE LAMB</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
