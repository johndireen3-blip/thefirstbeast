import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-2';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Remain faithful until death,<br/>and I will give you<br/>the crown of life.”</blockquote><p className="quote-credit">REVELATION 2:10 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">II</span></section>;
}
