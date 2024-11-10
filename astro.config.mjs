import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [react(), tailwind()],
	server: {
		port: 3000,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler', // or "modern"
				},
			},
		},
	},
});
