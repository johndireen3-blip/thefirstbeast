import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-21';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a radiant golden city with pearl gates and jeweled foundations descending from the sky onto a renewed earth" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 21 Explained: New Heaven, New Earth, New Jerusalem</h1>
      <p className="hero-display">NEW.<br/>WITH US.<br/><span>HOME.</span></p>
      <p className="hero-description">A new heaven and a new earth.<br/>No more tears.<br/>A city of gold coming down from God, adorned like a bride.</p>
      <p className="hero-detail">See how the story that began in a garden ends in a city where God lives among his people forever.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—27 VERSES <i/> THE NEW HEAVEN, NEW EARTH AND NEW JERUSALEM</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
