import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.christianpengu.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});