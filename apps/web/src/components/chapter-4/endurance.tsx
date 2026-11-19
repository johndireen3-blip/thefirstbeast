import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-4';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Holy, holy, holy is the Lord God almighty,<br/>who was, and who is, and who is to come”</blockquote><p className="quote-credit">REVELATION 4:8 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">IV</span></section>;
}
