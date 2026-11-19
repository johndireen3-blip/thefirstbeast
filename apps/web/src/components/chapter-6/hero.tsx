import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-6';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of four horses, white, red, black and pale green, riding across a darkened plain beneath a scroll with broken seals" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 6 Explained: The Four Horsemen and Six Seals</h1>
      <p className="hero-display">WAR.<br/>WITNESS.<br/><span>WRATH.</span></p>
      <p className="hero-description">Four riders loosed on the earth.<br/>Martyrs crying out beneath the altar.<br/>A world that runs from the Lamb.</p>
      <p className="hero-detail">Meet the four horsemen and learn why the Lamb, not chaos, holds the seals.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—17 VERSES <i/> FOUR RIDERS, ONE LAMB IN CONTROL</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
