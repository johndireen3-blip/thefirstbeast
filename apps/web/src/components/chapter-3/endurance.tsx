import { ArrowUpRight } from 'lucide-react';
import { sourceUrl } from '@/data/chapter-3';

export function Endurance() {
  return <section className="endurance-section"><p className="eyebrow">THE HEART OF THE CHAPTER</p><blockquote>“Behold, I stand at the door and knock.<br/>If anyone hears my voice and opens the door,<br/>[then] I will enter his house and dine with him,<br/>and he with me.”</blockquote><p className="quote-credit">REVELATION 3:20 · NABRE</p><a className="button-primary" href={sourceUrl} target="_blank" rel="noreferrer">Return to the scripture <ArrowUpRight size={17}/></a><span className="endurance-watermark" aria-hidden="true">III</span></section>;
}
