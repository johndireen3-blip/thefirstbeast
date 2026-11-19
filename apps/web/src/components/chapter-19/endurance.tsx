import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-19';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Blessed are those who have been called to the wedding feast of the Lamb.”</blockquote><p className="quote-credit">REVELATION 19:9 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XIX</span></section>;
}
