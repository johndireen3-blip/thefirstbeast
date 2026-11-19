import type { Config } from '@react-router/dev/config';

// Static site: every page is rendered to an HTML file at build time and served
// as plain files (no Node server). See DEPLOY.md.
export default {
	appDirectory: 'src',
	buildDirectory: 'build',
	ssr: false,
	prerender: true,
} satisfies Config;
