import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Barathraj Devarajan',
    tagline:
      'Web Developer with 5+ years of experience building modern web applications and custom tools.',
    about: [
      'My core expertise is in React, Node.js, and Rspack, with a strong focus on building scalable systems that connect frontend and backend cleanly.',
      'I build custom tools and SDKs for asset management, file uploads, and developer productivity workflows.',
      'I design frontend platforms using microfrontends and shared component libraries for multi-client and multi-team development.',
      'I optimize build and delivery pipelines using Rspack, Webpack, Nx, and Vite to reduce friction and improve release velocity.',
      'I contribute to monorepos with reusable components, utility packages, and structured logging patterns.',
      'I am currently deepening JavaScript fundamentals, improving DSA problem-solving, and exploring Rust with Axum.',
    ],
  },
  skills: [
    {
      title: 'Frontend',
      icon: 'Code2',
      skills: [
        { name: 'React.js', url: 'https://react.dev' },
        { name: 'Next.js', url: 'https://nextjs.org' },
        { name: 'Microfrontends', url: 'https://module-federation.io/' },
        { name: 'Shadcn/UI', url: 'https://ui.shadcn.com' },
        { name: 'Shared UI Libraries', url: 'https://storybook.js.org' },
      ],
    },
    {
      title: 'Backend',
      icon: 'Database',
      skills: [
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'Express.js', url: 'https://expressjs.com' },
        { name: 'REST APIs', url: 'https://restfulapi.net' },
        { name: 'Custom SDKs', url: 'https://github.com/barathrajd' },
      ],
    },
    {
      title: 'Build Tools',
      icon: 'Terminal',
      skills: [
        { name: 'Rspack', url: 'https://rspack.dev' },
        { name: 'Webpack', url: 'https://webpack.js.org' },
        { name: 'Nx', url: 'https://nx.dev' },
        { name: 'Vite', url: 'https://vitejs.dev' },
        { name: 'CI/CD', url: 'https://docs.github.com/en/actions' },
      ],
    },
    {
      title: 'Languages',
      icon: 'Wrench',
      skills: [
        {
          name: 'JavaScript (Advanced)',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        { name: 'Rust (Learning)', url: 'https://www.rust-lang.org' },
      ],
    },
  ],
  projects: [
    {
      title: 'Books Management System',
      description: 'A platform to sell, buy, and request books.',
      longDescription:
        'Built to support book exchange workflows with user-focused interactions. Includes core management capabilities and planned chat features for richer buyer and requester communication.',
      tags: ['JavaScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/barathrajd/booksmanagementsystem',
    },
    {
      title: 'EveMa',
      description: 'Event data acquisition and communication platform.',
      longDescription:
        'Software for event workflows that enables visitor and exhibitor communication, profile-based analytics, and follow-up optimization to convert high-intent leads into business outcomes.',
      tags: ['React', 'Node.js', 'Express', 'Data Analytics'],
      githubUrl: 'https://github.com/Evema-event/EveMa',
    },
  ],
  contact: [
    {
      type: 'email',
      label: 'barathraj.uidev@gmail.com',
      url: 'mailto:barathraj.uidev@gmail.com',
    },
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/barathrajd',
    },
    {
      type: 'website',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/barathrajd',
    },
  ],
};
