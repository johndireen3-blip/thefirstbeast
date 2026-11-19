import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-7';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“They have washed their robes<br/>and made them white in the blood of the Lamb”</blockquote><p className="quote-credit">REVELATION 7:14 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">VII</span></section>;
}
