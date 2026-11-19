import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-17';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a robed woman with a golden cup seated on a scarlet seven-headed beast in a desert, with a city on seven hills and a white lamb in the sky" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 17 Explained: The Whore of Babylon</h1>
      <p className="hero-display">SEDUCE.<br/>DIVIDE.<br/><span>CONQUER.</span></p>
      <p className="hero-description">A woman in purple and gold.<br/>A scarlet beast with seven heads.<br/>A mystery explained, and a Lamb who conquers.</p>
      <p className="hero-detail">See how the empire that seduces the nations is carried by a power that will turn on it, and how the Lamb outlasts them both.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—18 VERSES <i/> BABYLON THE GREAT AND THE SCARLET BEAST</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
