import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-16';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Blessed is the one who watches and keeps his clothes ready”</blockquote><p className="quote-credit">REVELATION 16:15 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XVI</span></section>;
}
