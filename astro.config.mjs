import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lonelyuniverse.netlify.app',
	integrations: [mdx(), sitemap()],
	markdown:{
		remarkPlugins:[
			remarkGfm,
			remarkToc,
		],
	}
});
