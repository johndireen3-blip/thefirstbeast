import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-1';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Do not be afraid. I am the<br/>first and the last, the one<br/>who lives.”</blockquote><p className="quote-credit">REVELATION 1:17–18 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">I</span></section>;
}
