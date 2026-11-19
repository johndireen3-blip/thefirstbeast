import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-8';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“The smoke of the incense along with the prayers of the holy ones went up before God from the hand of the angel”</blockquote><p className="quote-credit">REVELATION 8:4 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">VIII</span></section>;
}
