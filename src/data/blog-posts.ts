export interface BlogCodeExample {
  title: string;
  language: string;
  code: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  codeExample?: BlogCodeExample;
}

export interface BlogPostItem {
  id: string;
  title: string;
  summary: string;
  track: 'core' | 'deep-dive';
  readTime: string;
  tags: string[];
  sections: BlogSection[];
  keyPoints: string[];
}

export const blogPosts: BlogPostItem[] = [
  {
    id: 'bundlers-101',
    title: 'Bundlers 101: what, why, and the main options',
    summary:
      'A practical intro to what bundlers are, why they were created, and how modern options differ.',
    track: 'core',
    readTime: '8 min read',
    tags: ['Bundlers', 'Architecture', 'Frontend Basics'],
    sections: [
      {
        heading: 'What is a bundler?',
        paragraphs: [
          'A bundler reads your application modules and creates optimized assets for browsers. It resolves imports, transforms code, and outputs files that can be deployed efficiently.',
          'Modern bundlers also handle CSS pipelines, static assets, code splitting, and production optimizations in one build workflow.',
        ],
      },
      {
        heading: 'Why bundlers were created',
        paragraphs: [
          'Browsers originally had limited module workflows for large apps. Teams needed a way to combine many modules, reduce request overhead, and ship production-friendly output.',
          'Bundlers solved this by turning development-oriented source code into deployable bundles with caching, minification, and chunking strategies.',
        ],
        bullets: [
          'Resolve module dependencies reliably.',
          'Transform modern syntax for target environments.',
          'Optimize network and caching behavior in production.',
        ],
      },
      {
        heading: 'Common bundlers and brief differences',
        paragraphs: [
          'There is no universal best bundler. Each tool fits a different team context and architecture requirement.',
        ],
        bullets: [
          'Webpack: maximum configurability and mature plugin ecosystem.',
          'Rspack: Webpack-like architecture with much faster build performance.',
          'Vite: excellent local development speed with minimal setup.',
          'Rollup: strong output quality for libraries and package publishing.',
          'esbuild: extremely fast transforms and simple pipelines.',
        ],
      },
      {
        heading: 'Minimal example',
        paragraphs: [
          'A typical bundler setup defines entry, output, and basic code transformation rules.',
        ],
        codeExample: {
          title: 'webpack.config.js',
          language: 'js',
          code: "module.exports = {\n  mode: 'production',\n  entry: './src/index.tsx',\n  output: {\n    filename: 'assets/[name].[contenthash:8].js',\n    clean: true,\n  },\n  module: {\n    rules: [{ test: /\\.tsx?$/, use: 'swc-loader' }],\n  },\n};",
        },
      },
    ],
    keyPoints: [
      'Bundlers are build systems for production-ready frontend output.',
      'They exist to solve dependency, compatibility, and performance concerns.',
      'Choose bundlers based on team constraints, not trends.',
    ],
  },
  {
    id: 'webpack-fundamentals',
    title: 'Webpack fundamentals for modern apps',
    summary:
      'Understand why Webpack remains relevant for large and customized frontend systems.',
    track: 'core',
    readTime: '7 min read',
    tags: ['Webpack', 'Build Pipeline'],
    sections: [
      {
        heading: 'Why Webpack still matters',
        paragraphs: [
          'Webpack gives you deep control over module resolution, loaders, plugins, and output behavior. For complex applications, this control is still valuable.',
          'Large teams often keep Webpack because it integrates well with legacy code and highly customized deployment pipelines.',
        ],
      },
      {
        heading: 'Core concepts to master first',
        paragraphs: [
          'If you are learning Webpack, focus on the fundamentals before advanced plugin tuning.',
        ],
        bullets: [
          'Entry and output.',
          'Loaders versus plugins.',
          'Mode-specific behavior.',
          'Code splitting and caching.',
        ],
      },
      {
        heading: 'Configuration pattern',
        paragraphs: [
          'Use environment-based config merging to keep files focused and easier to maintain.',
        ],
        codeExample: {
          title: 'build/webpack.prod.js',
          language: 'js',
          code: "const { merge } = require('webpack-merge');\nconst common = require('./webpack.common');\n\nmodule.exports = merge(common, {\n  mode: 'production',\n  output: {\n    filename: 'assets/[name].[contenthash:8].js',\n    chunkFilename: 'assets/[name].[contenthash:8].chunk.js',\n  },\n});",
        },
      },
    ],
    keyPoints: [
      'Webpack remains strong for deep customization.',
      'Structure config to keep complexity manageable.',
      'Use long-term caching strategy from day one.',
    ],
  },
  {
    id: 'rspack-for-react-teams',
    title: 'Rspack for React teams: speed with compatibility',
    summary:
      'See where Rspack fits, why teams adopt it, and how to migrate safely.',
    track: 'core',
    readTime: '8 min read',
    tags: ['Rspack', 'Migration', 'React'],
    sections: [
      {
        heading: 'Where Rspack fits',
        paragraphs: [
          'Rspack is built for high performance while preserving Webpack mental models. This makes it attractive for teams that need speed but cannot afford risky rewrites.',
          'For React platforms with multiple apps, faster rebuild time directly improves developer feedback loops.',
        ],
      },
      {
        heading: 'Practical migration approach',
        paragraphs: [
          'Treat migration as a phased engineering effort. First validate behavior parity, then optimize for speed.',
        ],
        bullets: [
          'Inventory current plugins and loaders.',
          'Start with compatibility-first config.',
          'Measure cold build and rebuild before/after.',
          'Roll out progressively in production.',
        ],
      },
      {
        heading: 'Baseline config example',
        paragraphs: [
          'A baseline config helps reduce variables during migration.',
        ],
        codeExample: {
          title: 'rspack.config.mjs',
          language: 'js',
          code: "import { defineConfig } from '@rspack/cli';\n\nexport default defineConfig({\n  entry: './src/index.tsx',\n  output: { filename: 'assets/[name].[contenthash:8].js' },\n  module: {\n    rules: [{ test: /\\.tsx?$/, use: 'builtin:swc-loader' }],\n  },\n});",
        },
      },
    ],
    keyPoints: [
      'Rspack is ideal for performance-focused Webpack-like workflows.',
      'Migration should be measured and phased.',
      'Parity first, optimization second.',
    ],
  },
  {
    id: 'vite-dev-experience',
    title: 'Vite for development speed and DX',
    summary: 'Explore why Vite feels fast and where it works best.',
    track: 'core',
    readTime: '6 min read',
    tags: ['Vite', 'DX', 'Frontend'],
    sections: [
      {
        heading: 'Why Vite feels fast',
        paragraphs: [
          'Vite serves source modules directly in development and uses native ESM, which keeps startup and update times fast for typical app workflows.',
          'For many product teams, this results in significantly better local development experience.',
        ],
      },
      {
        heading: 'Where Vite is strongest',
        paragraphs: [
          'Vite works best for modern apps that prioritize fast iteration and do not require very deep bundler customization.',
        ],
        bullets: [
          'Greenfield React projects.',
          'Internal apps with fast product iteration cycles.',
          'Monorepos with clear package boundaries.',
        ],
      },
      {
        heading: 'Config example with aliases',
        paragraphs: [
          'In monorepos, aliases keep imports readable and reduce relative-path complexity.',
        ],
        codeExample: {
          title: 'vite.config.ts',
          language: 'ts',
          code: "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'node:path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@ui': path.resolve(__dirname, '../../packages/ui/src'),\n    },\n  },\n});",
        },
      },
    ],
    keyPoints: [
      'Vite optimizes local development speed.',
      'Great for modern app defaults and simple setup.',
      'Still evaluate plugin and production requirements early.',
    ],
  },
  {
    id: 'other-bundlers-brief',
    title: 'Other bundlers in brief: Rollup, esbuild, and SWC tooling',
    summary:
      'A short practical overview of other popular build tools and where they fit.',
    track: 'core',
    readTime: '6 min read',
    tags: ['Rollup', 'esbuild', 'SWC'],
    sections: [
      {
        heading: 'Rollup',
        paragraphs: [
          'Rollup excels for library builds because it produces clean output and supports efficient tree-shaking workflows.',
        ],
      },
      {
        heading: 'esbuild',
        paragraphs: [
          'esbuild is extremely fast and useful for transforms, scripts, and simple app pipelines where minimal configuration is preferred.',
        ],
      },
      {
        heading: 'SWC-based pipelines',
        paragraphs: [
          'SWC is often used as a fast compiler inside broader bundlers. It is especially useful when TypeScript or JSX transform speed is a bottleneck.',
        ],
      },
      {
        heading: 'Example: rollup library build',
        paragraphs: ['This is a typical Rollup setup for library packaging.'],
        codeExample: {
          title: 'rollup.config.mjs',
          language: 'js',
          code: "import typescript from '@rollup/plugin-typescript';\n\nexport default {\n  input: 'src/index.ts',\n  output: [{ file: 'dist/index.js', format: 'esm' }],\n  plugins: [typescript()],\n};",
        },
      },
    ],
    keyPoints: [
      'Rollup is strong for library output quality.',
      'esbuild is excellent for speed-focused transforms.',
      'Use SWC where compile throughput matters most.',
    ],
  },
  {
    id: 'choose-bundler',
    title: 'How to choose the right bundler',
    summary:
      'Use a practical decision framework based on performance goals and team constraints.',
    track: 'deep-dive',
    readTime: '9 min read',
    tags: ['Decision Framework', 'Architecture'],
    sections: [
      {
        heading: 'Start with constraints',
        paragraphs: [
          'The right bundler depends on your team context: migration budget, existing plugin dependencies, CI limits, and release risk tolerance.',
        ],
      },
      {
        heading: 'Evaluation checklist',
        paragraphs: [
          'Use the same checklist for each tool so your comparison stays objective.',
        ],
        bullets: [
          'Cold build time and incremental rebuild time.',
          'Plugin and loader compatibility with your stack.',
          'Operational complexity in CI/CD.',
          'Migration cost and long-term maintainability.',
        ],
      },
      {
        heading: 'Scoring template',
        paragraphs: [
          'A weighted scorecard helps teams make transparent decisions.',
        ],
        codeExample: {
          title: 'scorecard.json',
          language: 'json',
          code: '{\n  "performance": 0.35,\n  "compatibility": 0.30,\n  "migrationRisk": 0.20,\n  "teamDX": 0.15\n}',
        },
      },
    ],
    keyPoints: [
      'Pick tools with measurable criteria.',
      'Prioritize team constraints over popularity.',
      'Document tradeoffs before final adoption.',
    ],
  },
];
