import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-5';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a white lamb before a throne of light receiving a scroll with seven red seals, with golden bowls of incense" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 5 Explained: The Lamb and the Sealed Scroll</h1>
      <p className="hero-display">SEALED.<br/>SLAIN.<br/><span>WORTHY.</span></p>
      <p className="hero-description">A scroll no one can open.<br/>A Lion who turns out to be a Lamb.<br/>A song that fills the universe.</p>
      <p className="hero-detail">Discover why only the crucified and risen Christ can open God’s plan for history.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—14 VERSES <i/> ONE LAMB, ONE ENDLESS SONG</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
