import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-10';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a colossal angel wrapped in cloud with a rainbow, one foot on the sea and one on the land, holding a small open scroll" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 10 Explained: The Angel and the Little Scroll</h1>
      <p className="hero-display">SWORN.<br/>SWALLOWED.<br/><span>SENT.</span></p>
      <p className="hero-description">An angel astride sea and land.<br/>Thunders that must stay sealed.<br/>A scroll that is sweet and bitter.</p>
      <p className="hero-detail">Learn why God’s word is sweet to receive and costly to proclaim.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—11 VERSES <i/> THE MIGHTY ANGEL AND THE LITTLE SCROLL</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
