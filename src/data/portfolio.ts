import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  email: 'barathraj.uidev@gmail.com',
  personal: {
    name: 'Barathraj D',
    tagline:
      'Frontend Developer with 4+ years of experience specializing in high-performance React applications, Micro-frontend architectures, and modern build tooling.',
    about: [
      'Experienced Senior Frontend Developer with a focus on building scalable enterprise platforms and reusable UI foundations using React and Micro-frontends.',
      'Proven track record in modernizing legacy frontend stacks, resulting in up to 40% faster build times and significantly improved developer experience.',
      'Specialist in Shared Application Shells, Module Federation 2.0, and complex UI library development for multi-module enterprise systems.',
      'Strong expertise in optimizing production reliability through automated release workflows and advanced CI/CD integration.',
    ],
  },
  experience: [
    {
      company: 'Affinsys AI (BankBuddy.ai, TelcoBuddy.ai)',
      role: 'Frontend Developer',
      startDate: '2021-06-01',
      period: 'Jun 2021 - Present',
      location: 'Bengaluru, KA, India',
      description: [
        'Architected and managed 10+ React repositories using Micro-frontend architecture (Module Federation 2.0), reducing cross-team dependency conflicts by 60%.',
        'Led the full-stack modernization of the frontend infrastructure, migrating to Rspack and pnpm, which reduced local dev startup time from 45s to 3s.',
        'Developed a high-performance Shared UI Library used across 5 enterprise products, ensuring 100% design consistency and reducing UI development time by 30%.',
        'Built a configurable Conversational Interface System supporting real-time messaging and multi-tenant customization for global banking clients.',
        'Established automated release flows using Changesets and Jenkins, increasing deployment frequency by 2x while maintaining zero-downtime reliability.',
      ],
    },
    {
      company: 'Spotknack - Mission 2021',
      role: 'Frontend Developer',
      duration: '4 months',
      period: 'Feb 2021 - May 2021',
      description: [
        'Developed responsive user interfaces for the Spotknack Talent Community platform using React and modern CSS, improving mobile accessibility scores by 25%.',
      ],
    },
    {
      company: 'FORGE Accelerator',
      role: 'Graduate Product Engineer',
      duration: '9 months',
      period: 'Feb 2020 - Oct 2020',
      location: 'Coimbatore, TN, India',
      description: [
        'Selected for the ProtoSem fellowship among 500+ applicants to design and prototype tech-enabled solutions for industrial and social challenges.',
        'Collaborated in a multi-disciplinary team to develop a functional IoT-based prototype, focusing on frontend data visualization and real-time monitoring.',
        'Conducted market discovery and technical validation for cost-effective hardware-software integrated solutions.',
      ],
    },
  ],
  education: [
    {
      institution: 'Kumaraguru College of Technology',
      degree: 'Bachelor of Engineering (ECE)',
      period: '2017 - 2021',
    },
  ],
  skills: [
    {
      title: 'Languages & Core',
      icon: 'Code2',
      skills: [
        {
          name: 'JavaScript (ES6+)',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        {
          name: 'HTML5 / CSS3',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        { name: 'Rust', url: 'https://www.rust-lang.org' },
      ],
    },
    {
      title: 'Frontend & UI',
      icon: 'Layout',
      skills: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Next.js', url: 'https://nextjs.org' },
        { name: 'Module Federation', url: 'https://module-federation.io' },
        { name: 'Redux / Zustand', url: 'https://redux.js.org' },
        { name: 'MUI / Shadcn/UI', url: 'https://mui.com' },
        { name: 'Bootstrap / Core UI', url: 'https://getbootstrap.com' },
      ],
    },
    {
      title: 'Build Tools & Monorepo',
      icon: 'Terminal',
      skills: [
        { name: 'Rspack / Rsbuild / Rslib', url: 'https://rspack.dev' },
        { name: 'Webpack / Vite', url: 'https://webpack.js.org' },
        { name: 'Nx / Turborepo', url: 'https://nx.dev' },
        { name: 'Rollup / tsup', url: 'https://rollupjs.org' },
        { name: 'pnpm / NPM / Git', url: 'https://pnpm.io' },
      ],
    },
    {
      title: 'Quality & Infrastructure',
      icon: 'Wrench',
      skills: [
        { name: 'Vitest / Jest', url: 'https://vitest.dev' },
        { name: 'Biome / ESLint', url: 'https://biomejs.dev' },
        { name: 'Prettier', url: 'https://prettier.io' },
        { name: 'Node.js / Express', url: 'https://nodejs.org' },
        { name: 'CI/CD (Jenkins)', url: 'https://www.jenkins.io/' },
        { name: 'Docker / Containers', url: 'https://www.docker.com/' },
      ],
    },
  ],
  projects: [
    {
      title: 'Books Management System',
      description: 'Full-stack platform for book exchange and management.',
      longDescription:
        'Engineered a scalable system using Node.js and MongoDB to automate book exchange workflows. Implemented robust search algorithms and user profile management, serving a pilot user group for decentralized book sharing.',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'React'],
      githubUrl: 'https://github.com/barathrajd/booksmanagementsystem',
    },
    {
      title: 'EveMa Lead Acquisition',
      description: 'Event data acquisition and communication engine.',
      longDescription:
        'Architected an analytics-driven platform for capturing exhibitor-visitor interactions. Reduced lead response time by 50% through automated profile-based follow-up triggers and real-time dashboard visualization.',
      tags: ['React', 'Node.js', 'Express', 'Data Analytics'],
      githubUrl: 'https://github.com/Evema-event/EveMa',
    },
  ],
  contact: [
    {
      type: 'email',
      label: 'Email',
      url: 'mailto:barathraj.uidev@gmail.com',
    },
    {
      type: 'website',
      label: 'Portfolio',
      url: 'https://barathrajdevarajan.dev',
    },
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/barathrajd',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/barathrajd',
    },
  ],
};
