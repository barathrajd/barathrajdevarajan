import { FaBolt, FaCube, FaLayerGroup } from 'react-icons/fa';
import {
  SiBiome,
  SiBootstrap,
  SiCss3,
  SiEslint,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNx,
  SiPnpm,
  SiPrettier,
  SiReact,
  SiRedux,
  SiRust,
  SiShadcnui,
  SiTurborepo,
  SiTypescript,
  SiVite,
  SiVitest,
  SiWebpack,
} from 'react-icons/si';

import moduleFederationLogo from '../assets/module-federation-logo.png';
import rsbuildLogo from '../assets/rsbuild-logo.svg';
import rslibLogo from '../assets/rslib-logo.svg';
// Import assets
import rspackLogo from '../assets/rspack-logo.svg';
import zustandLogo from '../assets/zustand-logo.ico';

export const TechStackCarousel = () => {
  const techStack = [
    // Languages
    {
      name: 'JavaScript',
      Icon: SiJavascript,
      color: '#F7DF1E',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'TypeScript',
      Icon: SiTypescript,
      color: '#3178C6',
      url: 'https://www.typescriptlang.org',
    },
    {
      name: 'HTML5',
      Icon: SiHtml5,
      color: '#E34F26',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      Icon: SiCss3,
      color: '#1572B6',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'Rust',
      Icon: SiRust,
      color: '#CE422B',
      url: 'https://www.rust-lang.org',
    },

    // Frontend Frameworks & UI
    {
      name: 'React',
      Icon: SiReact,
      color: '#61DAFB',
      url: 'https://react.dev',
    },
    {
      name: 'Next.js',
      Icon: SiNextdotjs,
      color: '#FFFFFF',
      url: 'https://nextjs.org',
    },
    {
      name: 'Module Federation',
      Asset: moduleFederationLogo,
      color: '#0C2545',
      url: 'https://module-federation.io',
    },
    {
      name: 'Bootstrap',
      Icon: SiBootstrap,
      color: '#7952B3',
      url: 'https://getbootstrap.com',
    },
    {
      name: 'Material UI',
      Icon: SiMui,
      color: '#007FFF',
      url: 'https://mui.com',
    },
    {
      name: 'Shadcn/UI',
      Icon: SiShadcnui,
      color: '#FFFFFF',
      url: 'https://ui.shadcn.com',
    },
    {
      name: 'Core UI',
      Icon: FaLayerGroup,
      color: '#FFFFFF',
      url: 'https://coreui.io',
    },

    // State Management
    {
      name: 'Redux',
      Icon: SiRedux,
      color: '#764ABC',
      url: 'https://redux.js.org',
    },
    {
      name: 'Zustand',
      Asset: zustandLogo,
      color: '#443E38',
      url: 'https://zustand-demo.pmnd.rs',
    },

    // Backend
    {
      name: 'Node.js',
      Icon: SiNodedotjs,
      color: '#339933',
      url: 'https://nodejs.org',
    },
    {
      name: 'Express',
      Icon: SiExpress,
      color: '#FFFFFF',
      url: 'https://expressjs.com',
    },

    // Build Tools & Monorepo
    {
      name: 'Webpack',
      Icon: SiWebpack,
      color: '#8DD6F9',
      url: 'https://webpack.js.org',
    },
    { name: 'Vite', Icon: SiVite, color: '#646CFF', url: 'https://vitejs.dev' },
    {
      name: 'Rspack',
      Asset: rspackLogo,
      color: '#F6C51D',
      url: 'https://rspack.dev',
    },
    {
      name: 'Rsbuild',
      Asset: rsbuildLogo,
      color: '#F6C51D',
      url: 'https://rsbuild.dev',
    },
    {
      name: 'Rslib',
      Asset: rslibLogo,
      color: '#F6C51D',
      url: 'https://github.com/web-infra-dev/rslib',
    },
    { name: 'Nx', Icon: SiNx, color: '#143055', url: 'https://nx.dev' },
    {
      name: 'Turborepo',
      Icon: SiTurborepo,
      color: '#EF4444',
      url: 'https://turbo.build',
    },
    {
      name: 'Rollup',
      Icon: FaCube,
      color: '#EC4A3F',
      url: 'https://rollupjs.org',
    },
    {
      name: 'tsup',
      Icon: FaBolt,
      color: '#FFCF00',
      url: 'https://tsup.egoist.dev',
    },

    // Testing & Quality
    { name: 'Jest', Icon: SiJest, color: '#C21325', url: 'https://jestjs.io' },
    {
      name: 'Vitest',
      Icon: SiVitest,
      color: '#6E9F18',
      url: 'https://vitest.dev',
    },
    {
      name: 'Biome',
      Icon: SiBiome,
      color: '#60A5FA',
      url: 'https://biomejs.dev',
    },
    {
      name: 'Prettier',
      Icon: SiPrettier,
      color: '#F7B93E',
      url: 'https://prettier.io',
    },
    {
      name: 'ESLint',
      Icon: SiEslint,
      color: '#4B32C3',
      url: 'https://eslint.org',
    },

    // General Tools
    { name: 'Git', Icon: SiGit, color: '#F05032', url: 'https://git-scm.com' },
    {
      name: 'NPM',
      Icon: SiNpm,
      color: '#CB3837',
      url: 'https://www.npmjs.com',
    },
    { name: 'pnpm', Icon: SiPnpm, color: '#F69220', url: 'https://pnpm.io' },
  ];

  // Duplicate items for infinite scroll effect
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="relative">
        <div className="flex animate-scroll gap-8 md:gap-12">
          {duplicatedStack.map((tech, index) => (
            <a
              key={`${tech.name}-${index}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer no-underline"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-transparent border border-border/10 group-hover:border-primary/20 group-hover:bg-card/40">
                {tech.Icon ? (
                  <tech.Icon
                    className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    style={{ color: tech.color }}
                  />
                ) : (
                  <img
                    src={tech.Asset}
                    alt={tech.name}
                    className={`w-full h-full object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 ${
                      tech.name === 'Module Federation'
                        ? 'brightness-0 invert'
                        : ''
                    }`}
                  />
                )}
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
