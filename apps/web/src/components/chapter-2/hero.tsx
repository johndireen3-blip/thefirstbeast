import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl } from '@/data/chapter-2';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src="https://images.hostinger.com/bb538352-02c0-4987-b00b-e98b4719e69f.png" alt="Symbolic illustration of four lit oil lamps on golden stands above a map of the cities of Roman Asia along the Aegean coast" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 2 Explained: Letters to the Four Churches</h1>
      <p className="hero-display">KNOWN.<br/>WARNED.<br/><span>PROMISED.</span></p>
      <p className="hero-description">Four churches.<br/>One Lord who knows their works.<br/>A promise to every victor.</p>
      <p className="hero-detail">Explore Christ’s letters to four real churches, and hear what the Spirit says to the Church today.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—29 VERSES <i/> FOUR CHURCHES, ONE LORD, ONE PROMISE</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
