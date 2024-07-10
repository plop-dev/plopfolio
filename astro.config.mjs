import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	adapter: vercel({
		webAnalytics: true,
	}),
	integrations: [react(), tailwind()],
	output: 'hybrid',
});
