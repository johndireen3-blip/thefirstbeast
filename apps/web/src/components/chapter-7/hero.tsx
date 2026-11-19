import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-7';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a vast multitude in white robes with palm branches before a throne of light, with four angels holding back the winds" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 7 Explained: The 144,000 and the Great Multitude</h1>
      <p className="hero-display">MARKED.<br/>COUNTLESS.<br/><span>CLEANSED.</span></p>
      <p className="hero-description">The winds held back.<br/>God’s servants sealed.<br/>A multitude no one can count.</p>
      <p className="hero-detail">Find the answer to chapter 6’s question, “Who can stand?”: all who belong to the Lamb.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—17 VERSES <i/> SEALED BY GOD, WASHED BY THE LAMB</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
