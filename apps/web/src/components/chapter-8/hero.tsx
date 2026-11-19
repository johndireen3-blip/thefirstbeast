import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-8';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of an angel with a gold censer at a golden altar, incense rising, and seven angels holding trumpets" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 8 Explained: Silence and the First Trumpets</h1>
      <p className="hero-display">SILENCE.<br/>INCENSE.<br/><span>TRUMPETS.</span></p>
      <p className="hero-description">Heaven falls silent.<br/>The prayers of the saints rise.<br/>Four trumpets sound over the earth.</p>
      <p className="hero-detail">See how the prayers of God’s people move heaven, and why the trumpets are a warning, not the end.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—13 VERSES <i/> SILENCE, INCENSE, AND THE FIRST FOUR TRUMPETS</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
