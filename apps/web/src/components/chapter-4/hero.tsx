import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl } from '@/data/chapter-4';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src="https://images.hostinger.com/7bede589-2163-47ca-9a94-877e18aa7409.png" alt="Symbolic illustration of a radiant throne with an emerald rainbow, seven torches and a sea of glass, with elders in white casting down golden crowns" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 4 Explained: The Throne Room of Heaven</h1>
      <p className="hero-display">HOLY.<br/>HOLY.<br/><span>HOLY.</span></p>
      <p className="hero-description">A door open in heaven.<br/>A throne at the center of all things.<br/>A song that never ends.</p>
      <p className="hero-detail">Step through the open door into the worship of heaven, where God reigns and all creation gives him praise.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—11 VERSES <i/> ONE THRONE, ONE ENDLESS SONG</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
