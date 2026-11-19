import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-14';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a white lamb on a mountain summit with a robed crowd, three angels in flight, and a field of ripe wheat" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 14 Explained: The Lamb on Mount Zion</h1>
      <p className="hero-display">FOLLOW.<br/>ENDURE.<br/><span>REAP.</span></p>
      <p className="hero-description">A Lamb on the mountain.<br/>Three angels in flight.<br/>A sickle over the ripe earth.</p>
      <p className="hero-detail">See how those who follow the Lamb wherever he goes are gathered in at the harvest.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—20 VERSES <i/> THE LAMB ON MOUNT ZION AND THE HARVEST</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
