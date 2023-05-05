import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
// 数学支持
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lonelyuniverse.netlify.app',
	integrations: [mdx(), sitemap()],
	markdown:{
		remarkPlugins:[
			remarkGfm,
			remarkToc,
			remarkMath,
		],
		rehypePlugins:[
			rehypeKatex
		]
	}
});
