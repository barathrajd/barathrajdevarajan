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
        'Architected and managed React-based frontend repositories using Micro-frontend architecture (Module Federation 2.0) and shared application shells.',
        'Led the modernization of the entire frontend stack, migrating from legacy builds to Rspack, pnpm, Biome, and rstest, resulting in faster builds and improved DX.',
        'Built several enterprise-grade systems including a Shared Application Shell, User & Access Administration, Reporting & Insights Dashboard, and a Visual Flow Builder.',
        'Developed a highly configurable Conversational Interface System with real-time messaging, file handling, and customizable UI/theme support.',
        'Created and maintained a comprehensive Shared UI Library and Tooling platform, standardizing components (tables, alerts, forms) and release automation workflows across teams.',
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
  skills: [
    {
      title: 'Frontend Core & Frameworks',
      icon: 'Code2',
      skills: [
        { name: 'React.js', url: 'https://react.dev' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        {
          name: 'JavaScript (ES6+)',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
        { name: 'MUI / Shadcn/UI', url: 'https://mui.com/' },
        { name: 'HTML5 / CSS3 / SASS', url: 'https://sass-lang.com/' },
      ],
    },
    {
      title: 'Architecture & Scalability',
      icon: 'Terminal',
      skills: [
        { name: 'Micro-frontends', url: 'https://module-federation.io/' },
        {
          name: 'Shared Application Shells',
          url: 'https://github.com/module-federation',
        },
        { name: 'Module Federation 2.0', url: 'https://module-federation.io' },
        { name: 'Permission Systems', url: 'https://casl.js.org/' },
        { name: 'Multi-Repo Management', url: 'https://pnpm.io/workspaces' },
        { name: 'Configurable Dashboards', url: 'https://react.dev' },
      ],
    },
    {
      title: 'Build Systems & Quality',
      icon: 'Wrench',
      skills: [
        { name: 'Rspack / Rsbuild', url: 'https://rspack.dev' },
        { name: 'pnpm Workspaces', url: 'https://pnpm.io/' },
        { name: 'Biome (Lint/Format)', url: 'https://biomejs.dev/' },
        { name: 'Vitest / rstest', url: 'https://vitest.dev/' },
        { name: 'Storybook', url: 'https://storybook.js.org' },
        { name: 'Changesets', url: 'https://github.com/changesets/changesets' },
      ],
    },
    {
      title: 'Platform & Infrastructure',
      icon: 'Database',
      skills: [
        { name: 'CI/CD (Jenkins)', url: 'https://www.jenkins.io/' },
        { name: 'Docker / Containers', url: 'https://www.docker.com/' },
        {
          name: 'SonarQube (Static Analysis)',
          url: 'https://www.sonarqube.org/',
        },
        {
          name: 'Release Automation',
          url: 'https://github.com/changesets/changesets',
        },
        { name: 'Node.js Backend', url: 'https://nodejs.org' },
        { name: 'PostgreSQL / MongoDB', url: 'https://www.postgresql.org/' },
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
