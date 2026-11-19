import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-22';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Amen! Come, Lord Jesus!”</blockquote><p className="quote-credit">REVELATION 22:20 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XXII</span></section>;
}
