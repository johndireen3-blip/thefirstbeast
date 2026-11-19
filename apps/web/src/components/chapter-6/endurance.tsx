import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-6';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Each of them was given a white robe,<br/>and they were told to be patient a little while longer”</blockquote><p className="quote-credit">REVELATION 6:11 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">VI</span></section>;
}
