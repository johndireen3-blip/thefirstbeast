import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-9';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of smoke and shadowy locusts rising from a pit against a dim sun, with figures marked with light standing untouched" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 9 Explained: Locusts, Abaddon and the Euphrates</h1>
      <p className="hero-display">ABYSS.<br/>ARMY.<br/><span>REPENT.</span></p>
      <p className="hero-description">A pit opened.<br/>A plague that cannot touch God’s sealed.<br/>A world that still will not turn back.</p>
      <p className="hero-detail">Look past the monsters to the real question of chapter 9: will we repent?</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—21 VERSES <i/> LOCUSTS, ABADDON, AND THE ARMY FROM THE EUPHRATES</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
