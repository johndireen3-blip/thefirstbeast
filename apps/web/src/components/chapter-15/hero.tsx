import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';
import { sourceUrl, heroImage } from '@/data/chapter-15';

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <StudyImage className="hero-image" src={heroImage} alt="Symbolic illustration of robed figures with harps on a sea of glass mixed with fire, before an open heavenly temple where seven angels carry golden bowls" priority/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <h1 id="hero-title" className="eyebrow"><span/> Revelation 15 Explained: The Song of Moses and the Lamb</h1>
      <p className="hero-display">CROSSED.<br/>SINGING.<br/><span>READY.</span></p>
      <p className="hero-description">A sea of glass mixed with fire.<br/>Harps in the hands of the victors.<br/>A temple filled with smoke.</p>
      <p className="hero-detail">See how those who have passed through the trial sing the new Exodus before the last plagues begin.</p>
      <div className="hero-actions"><a className="button-primary" href="#chapter">Explore the chapter <ArrowDown size={17}/></a><a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Read the scripture <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="hero-bottom"><span>01—08 VERSES <i/> THE SONG OF MOSES AND THE LAMB</span><a href="#chapter">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
    <span className="hero-art-note">SYMBOLIC ARTIST’S INTERPRETATION</span>
  </section>;
}
