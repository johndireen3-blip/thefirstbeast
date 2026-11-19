import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-14';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Blessed are the dead who die in the Lord from now on.”</blockquote><p className="quote-credit">REVELATION 14:13 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XIV</span></section>;
}
