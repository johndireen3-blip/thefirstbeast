import { imageManifest } from '@/lib/image-manifest';

type StudyImageProps = {
	src: string;
	alt: string;
	priority?: boolean;
	className?: string;
};

/**
 * Renders a study illustration as an optimized WebP with explicit dimensions,
 * a responsive srcset, and the right loading/decoding/fetchpriority hints.
 *
 * Hero images pass `priority` (eager + fetchpriority="high"); every other
 * illustration is lazy-loaded. Falls back to the original source if the image
 * is not in the generated manifest.
 */
export function StudyImage({ src, alt, priority, className }: StudyImageProps) {
	const entry = imageManifest[src];

	if (!entry) {
		return (
			<img
				className={className}
				src={src}
				alt={alt}
				loading={priority ? 'eager' : 'lazy'}
				decoding="async"
				fetchPriority={priority ? 'high' : 'auto'}
			/>
		);
	}

	return (
		<img
			className={className}
			src={entry.webp}
			srcSet={`${entry.webp800} 800w, ${entry.webp} 1600w`}
			sizes="100vw"
			width={entry.width}
			height={entry.height}
			alt={alt}
			loading={priority ? 'eager' : 'lazy'}
			decoding="async"
			fetchPriority={priority ? 'high' : 'auto'}
		/>
	);
}
