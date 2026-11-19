import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-20';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of an angel with a key and chain binding a dragon in an abyss, beneath a great white throne with open scrolls" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 20 Explained: The Millennium and Last Judgment</h1>
      <p className="hero-display">BOUND.<br/>REIGNING.<br/><span>JUDGED.</span></p>
      <p className="hero-description">A dragon chained.<br/>Thrones for the faithful.<br/>Books opened before a great white throne.</p>
      <p className="hero-detail">See how the Church already shares Christ’s reign, and how every life is finally brought into the light of God’s judgment.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—15 VERSES <i/> THE THOUSAND YEARS AND THE LAST JUDGMENT</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
