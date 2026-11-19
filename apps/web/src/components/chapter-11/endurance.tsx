import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-11';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“The kingdom of the world now belongs to our Lord and to his Anointed, and he will reign forever and ever”</blockquote><p className="quote-credit">REVELATION 11:15 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XI</span></section>;
}
