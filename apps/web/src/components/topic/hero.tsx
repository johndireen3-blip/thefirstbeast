import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { StudyImage } from '@/components/study-image';

type TopicHeroProps = {
	eyebrowParts?: [string, string];
	h1Lines: [string, string, string];
	lead: string;
	sourceUrl: string;
	sourceLabel: string;
	heroImage: string;
	alt: string;
	meta: string;
	anchorLabel: string;
	titleAsH1?: string;
	eyebrowH1Text?: string;
	leadQuestion?: string;
};

export function TopicHero({
	eyebrowParts,
	h1Lines,
	lead,
	sourceUrl,
	sourceLabel,
	heroImage,
	alt,
	meta,
	anchorLabel,
	titleAsH1,
	eyebrowH1Text,
	leadQuestion,
}: TopicHeroProps) {
	return (
		<section className="hero" id="top" aria-labelledby="hero-title">
			<StudyImage className="hero-image" src={heroImage} alt={alt} priority />
			<div className="hero-shade" />
			<div className="hero-content">
				{eyebrowH1Text ? (
					<>
						<h1 id="hero-title" className="eyebrow"><span /> {eyebrowH1Text}</h1>
						<p className="hero-display">
							{h1Lines[0]}<br />{h1Lines[1]}<br /><span>{h1Lines[2]}</span>
						</p>
					</>
				) : titleAsH1 ? (
					<>
						<h1 id="hero-title" className="hero-title-small">{titleAsH1}</h1>
						<p className="hero-display">
							{h1Lines[0]}<br />{h1Lines[1]}<br /><span>{h1Lines[2]}</span>
						</p>
					</>
				) : (
					<>
						<p className="eyebrow">
							<span /> {eyebrowParts?.[0]} <span className="eyebrow-divider">/</span> {eyebrowParts?.[1]}
						</p>
						<h1 id="hero-title">
							{h1Lines[0]}<br />{h1Lines[1]}<br /><span>{h1Lines[2]}</span>
						</h1>
					</>
				)}
				<p className="hero-description">{leadQuestion ? <><strong>{leadQuestion}</strong> </> : null}{lead}</p>
				<div className="hero-actions">
					<a className="button-primary" href="#intro">{anchorLabel} <ArrowDown size={17} /></a>
					<a className="text-link" href={sourceUrl} target={sourceUrl.startsWith('/') ? undefined : '_blank'} rel="noreferrer">{sourceLabel} <ArrowUpRight size={17} /></a>
				</div>
			</div>
			<div className="hero-bottom">
				<span>{meta} <i /> THE LAMB&rsquo;S VICTORY</span>
				<a href="#intro">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
			</div>
			<span className="hero-art-note">SYMBOLIC ARTIST&rsquo;S INTERPRETATION</span>
		</section>
	);
}
