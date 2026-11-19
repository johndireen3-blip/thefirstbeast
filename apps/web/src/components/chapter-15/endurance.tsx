import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-15';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Great and wonderful are your works, Lord God almighty.”</blockquote><p className="quote-credit">REVELATION 15:3 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XV</span></section>;
}
