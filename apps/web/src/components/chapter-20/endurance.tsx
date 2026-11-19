import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-20';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Blessed and holy is the one who shares in the first resurrection.”</blockquote><p className="quote-credit">REVELATION 20:6 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XX</span></section>;
}
