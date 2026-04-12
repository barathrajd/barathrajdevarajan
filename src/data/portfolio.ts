import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  email: 'barathraj.uidev@gmail.com',
  personal: {
    name: 'Barathraj D',
    tagline:
      'Frontend Architect & Developer with 4+ years of experience building scalable enterprise platforms and micro-frontend systems.',
    about: [
      'Architected and maintained React-based frontend applications, focusing on shared shell architecture, micro-frontend integration, and reusable UI foundations.',
      'Led enterprise-wide frontend modernization by migrating legacy systems to Rspack, pnpm, Biome, and rstest, significantly improving build speeds and developer experience.',
      'Designed and refined shared navigation systems, permission-aware routing, and command/search interactions for complex multi-module platforms.',
      'Expertise in Micro-frontends (Module Federation 2.0), Redux Toolkit, and MUI, with a strong focus on platform consistency and shared dependency management.',
    ],
  },
  experience: [
    {
      company: 'Affinsys AI (BankBuddy.ai, TelcoBuddy.ai)',
      role: 'Frontend Developer',
      startDate: '2021-06-01',
      period: 'June 2021 - Present',
      location: 'Bengaluru, Karnataka, India',
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
      role: 'Spotknack Talent Community | Frontend Developer',
      duration: '4 months',
      period: 'February 2021 - May 2021',
      description: [
        'Worked as a Frontend Developer for the Spotknack Talent Community.',
      ],
    },
    {
      company: 'FORGE Accelerator',
      role: 'Graduate Innovation Engineer',
      duration: '9 months',
      period: 'February 2020 - October 2020',
      location: 'Coimbatore Area, India',
      description: [
        "The Innovation/Startup fellowship program, ProtoSem is a 20-week, full-semester course, during which students are nurtured & guided to develop core technical concepts and key engineering skills and are transformed into 'Innovation Engineers'.",
        'We work as a team with students from different engineering/technical/science streams, towards designing, developing and testing an innovative tech-enabled solution to solve a real-world problem sponsored by the industry, government, or social sector, etc.',
        'We are guided to solve real-world challenges using the tools enabled by hardware, software, and computing technologies, and to evolve as Graduate Innovation Engineers and fully rounded professionals.',
        'We gain skills and competencies to transform ourselves into creative problem-solvers, capable of building deployable/usable prototypes, selecting and applying technology to create cost-effective solutions.',
        'We innovate and design solutions by setting and achieving metrics in customer development & discovery, value-proposition validation, market definition & sizing, customer acquisition, revenue model & competition analysis.',
      ],
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
  education: [
    {
      institution: 'Kumaraguru College of Technology',
      degree: 'Bachelor of Engineering, ECE',
      period: '2017 - 2021',
    },
    {
      institution: 'Tagore Matric Higher Secondary School',
      degree: 'High School',
      period: '2011 - 2017',
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
