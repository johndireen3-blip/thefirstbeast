import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-12';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“They conquered him by the blood<br/>of the Lamb and by the word<br/>of their testimony.”</blockquote><p className="quote-credit">REVELATION 12:11 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XII</span></section>;
}
