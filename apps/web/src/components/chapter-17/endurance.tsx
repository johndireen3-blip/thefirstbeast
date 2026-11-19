import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-17';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“the Lamb will conquer them, for he is Lord of lords and king of kings”</blockquote><p className="quote-credit">REVELATION 17:14 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">XVII</span></section>;
}
