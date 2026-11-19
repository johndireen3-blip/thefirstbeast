import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl } from '@/data/chapter-12';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src="https://images.hostinger.com/84ac0253-2188-479e-af0c-193fa8f9cdc4.png" alt="Symbolic illustration of a woman crowned with twelve stars above a crescent moon, with a red dragon below" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 12 Explained: The Woman and the Dragon</h1>
      <p className="hero-display">SIGN.<br/>BATTLE.<br/><span>REFUGE.</span></p>
      <p className="hero-description">A woman in glory.<br/>A dragon cast down.<br/>A people kept safe.</p>
      <p className="hero-detail">Explore the great sign at the heart of Revelation, where the whole drama of the book is gathered into one vision.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—18 VERSES <i/> ONE SIGN, ONE BATTLE, ONE REFUGE</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
