import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-22';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of a crystal river flowing from a throne with a white lamb, lined on both banks by fruit-bearing trees of life under a morning star" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 22 Explained: The River of Life</h1>
      <p className="hero-display">RIVER.<br/>FACE.<br/><span>COME.</span></p>
      <p className="hero-description">A river bright as crystal.<br/>A tree whose leaves heal the nations.<br/>And the last prayer of the Bible: Come, Lord Jesus!</p>
      <p className="hero-detail">See how the story that began in Eden ends with God’s people seeing his face, and why the Church keeps praying for his coming.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—21 VERSES <i/> THE RIVER OF LIFE AND COME, LORD JESUS</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
