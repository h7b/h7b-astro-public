import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kool Casa Blog',
			social: {
				github: 'https://github.com/h7b/h7b-astro-public',
			},
			sidebar: [
				{
					label: 'Blog',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Posts', link: '/blog/posts/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
