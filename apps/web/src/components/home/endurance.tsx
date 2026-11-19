import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Such is the faithful<br/>endurance of the holy ones.”</blockquote><p className="quote-credit">REVELATION 13:10 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XIII</span></section>;
}
