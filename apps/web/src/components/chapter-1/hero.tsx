import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl } from '@/data/chapter-1';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src="https://images.hostinger.com/f609b2fd-167b-489c-8e0d-f66aa0387a1d.png" alt="Symbolic illustration of the risen Christ in a long robe and golden sash among seven golden lampstands, holding seven stars" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 1 Explained: The Son of Man Among the Lampstands</h1>
      <p className="hero-display">REVEALED.<br/>RISEN.<br/><span>PRESENT.</span></p>
      <p className="hero-description">A prisoner on an island.<br/>A voice like a trumpet.<br/>Christ among his churches.</p>
      <p className="hero-detail">Explore the opening vision of Revelation, where the risen Christ appears to John and stands in the midst of his Church.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—20 VERSES <i/> ONE SIGN, ONE VOICE, ONE CHURCH</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
