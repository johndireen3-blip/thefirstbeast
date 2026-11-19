import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl } from '@/data/chapter-3';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src="https://images.hostinger.com/91c7432f-c342-43c4-8819-81090d8b8281.png" alt="Symbolic illustration of a robed figure knocking at a weathered wooden door at dusk, warm light behind it" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 3 Explained: Sardis, Philadelphia and Laodicea</h1>
      <p className="hero-display">WAKE.<br/>HOLD FAST.<br/><span>OPEN.</span></p>
      <p className="hero-description">A church asleep.<br/>A church small but faithful.<br/>A church that thinks it needs nothing.</p>
      <p className="hero-detail">Explore the last three letters, ending with Christ at the door, waiting to be let in.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—22 VERSES <i/> THREE CHURCHES, ONE LORD AT THE DOOR</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
