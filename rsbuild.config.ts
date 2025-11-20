import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './src/index.html',
    favicon: './src/assets/favicon.svg',
    title: 'Barathraj Devarajan | Portfolio',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
      description:
        'Frontend developer specializing in React, TypeScript, codemods, payment integrations, and developer tools. Explore my projects and experience.',
      'theme-color': '#8b5cf6',
      // Open Graph tags for social sharing
      'og:title': 'Barathraj Devarajan | Portfolio',
      'og:description':
        'Frontend developer specializing in React, TypeScript, and developer tools',
      'og:type': 'website',
    },
    tags: [
      {
        tag: 'meta',
        attrs: { name: 'author', content: 'Barathraj Devarajan' },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'keywords',
          content:
            'React, TypeScript, Frontend Developer, Codemods, Payment Integration, React Native',
        },
      },
    ],
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
    },
    preload: {
      type: 'all-chunks',
    },
    prefetch: {
      type: 'all-chunks',
    },
  },
  output: {
    distPath: {
      root: 'dist',
    },
    cleanDistPath: true,
    copy: [{ from: 'public' }],
  },
});
