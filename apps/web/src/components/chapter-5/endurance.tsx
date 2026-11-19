import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-5';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Worthy is the Lamb that was slain to receive power and riches,<br/>wisdom and strength, honor and glory and blessing”</blockquote><p className="quote-credit">REVELATION 5:12 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">V</span></section>;
}
