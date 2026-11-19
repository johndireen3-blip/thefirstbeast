import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-9';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“They were told not to harm the grass of the earth or any plant or any tree, but only those people who did not have the seal of God on their foreheads”</blockquote><p className="quote-credit">REVELATION 9:4 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">IX</span></section>;
}
