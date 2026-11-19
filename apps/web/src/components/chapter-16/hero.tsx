import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-16';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of seven angels pouring golden bowls from a stormy sky onto a dark earth with a dried river and a distant mountain" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 16 Explained: The Seven Bowls and Armageddon</h1>
      <p className="hero-display">POURED.<br/>WARNED.<br/><span>DONE.</span></p>
      <p className="hero-description">Seven bowls poured out.<br/>Three frog-like spirits.<br/>A gathering at Armageddon, and a voice: It is done.</p>
      <p className="hero-detail">See how the last plagues expose a world that will not repent, and why Christ’s word in the middle of them is “stay awake.”</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—21 VERSES <i/> THE SEVEN BOWLS AND ARMAGEDDON</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
