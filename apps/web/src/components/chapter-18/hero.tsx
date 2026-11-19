import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-18';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a great city burning on the horizon, ships watching from the sea, and an angel hurling a millstone into the waves" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 18 Explained: The Fall of Babylon</h1>
      <p className="hero-display">FALLEN.<br/>COME OUT.<br/><span>REJOICE.</span></p>
      <p className="hero-description">A city that thought it would never fall.<br/>Kings, merchants and sailors weeping from afar.<br/>A millstone thrown into the sea.</p>
      <p className="hero-detail">See how the luxury and power of Babylon vanish in a single hour, and why God’s people are called to come out of her.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—24 VERSES <i/> THE FALL OF BABYLON</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
