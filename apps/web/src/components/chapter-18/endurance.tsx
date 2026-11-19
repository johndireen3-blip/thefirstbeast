import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-18';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Depart from her, my people, so as not to take part in her sins”</blockquote><p className="quote-credit">REVELATION 18:4 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XVIII</span></section>;
}
