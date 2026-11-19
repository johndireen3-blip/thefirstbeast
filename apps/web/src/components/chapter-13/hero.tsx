import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Artistic interpretation of a many-headed beast rising from a dark, storm-driven sea" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 13 Explained: The Two Beasts, the Mark and 666</h1>
      <p className="hero-display">POWER.<br/>DECEPTION.<br/><span>ENDURANCE.</span></p>
      <p className="hero-description">Two beasts. A world deceived.<br/>A call to remain faithful.</p>
      <p className="hero-detail"><strong>What is Revelation 13 about, from a Catholic perspective?</strong> Two beasts: a power that demands the worship owed to God alone, and a false prophet who persuades the world to give it. The chapter calls the faithful to endurance, not fear.</p>
      <p className="hero-detail">See how evil imitates the Lamb, and why the faithful are called to endurance, not fear.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—18 VERSES <i/> ONE CALL TO DISCERNMENT</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
