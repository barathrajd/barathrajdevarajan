import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Barathraj",
    tagline: "Building scalable frontend systems & developer tools.",
    about: [
      "Experienced in developing codemods and TypeScript SDKs that streamline development workflows and improve code quality",
      "Built payment integrations handling real-world transaction flows with a focus on reliability and security",
      "Passionate about solving frontend challenges on Frontend Mentor, continuously improving UI/UX implementation skills",
      "Specialized in modern frontend architectures, React Native mobile development, build tools, and creating developer-friendly tooling"
    ]
  },
  skills: [
    {
      title: "Frontend",
      icon: "Code2",
      skills: [
        { name: "React.js", url: "https://react.dev" },
        { name: "React Native", url: "https://reactnative.dev" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Redux", url: "https://redux.js.org" },
        { name: "Zustand", url: "https://zustand-demo.pmnd.rs" }
      ]
    },
    {
      title: "Build Tools",
      icon: "Terminal",
      skills: [
        { name: "Rspack", url: "https://rspack.dev" },
        { name: "Rsbuild", url: "https://rsbuild.dev" },
        { name: "Rslib", url: "https://github.com/web-infra-dev/rslib" },
        { name: "Module Federation", url: "https://module-federation.io" },
        { name: "Webpack", url: "https://webpack.js.org" },
        { name: "Vite", url: "https://vitejs.dev" },
        { name: "Rollup", url: "https://rollupjs.org" },
        { name: "tsup", url: "https://tsup.egoist.dev" },
        { name: "Nx", url: "https://nx.dev" },
        { name: "Turborepo", url: "https://turbo.build" },
        { name: "pnpm", url: "https://pnpm.io" }
      ]
    },
    {
      title: "UI Libraries",
      icon: "Wrench",
      skills: [
        { name: "Shadcn/UI", url: "https://ui.shadcn.com" },
        { name: "Material UI", url: "https://mui.com" },
        { name: "Bootstrap", url: "https://getbootstrap.com" },
        { name: "Core UI", url: "https://coreui.io" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" }
      ]
    },
    {
      title: "Testing & Quality",
      icon: "Database",
      skills: [
        { name: "Jest", url: "https://jestjs.io" },
        { name: "Vitest", url: "https://vitest.dev" },
        { name: "Biome", url: "https://biomejs.dev" },
        { name: "ESLint", url: "https://eslint.org" },
        { name: "Prettier", url: "https://prettier.io" }
      ]
    },
    {
      title: "Backend & Integrations",
      icon: "Database",
      skills: [
        { name: "Node.js", url: "https://nodejs.org" },
        { name: "Express.js", url: "https://expressjs.com" },
        { name: "Payment APIs", url: "https://stripe.com/docs/api" }, // Generic link or specific if known
        { name: "REST APIs", url: "https://restfulapi.net" } // Generic link
      ]
    }
  ],
  projects: [
    {
      title: "Books Management System",
      description: "A platform to sell, buy, and request books.",
      longDescription: "Features user authentication and future chat capabilities. Built with a focus on user interaction and book exchange.",
      tags: ["JavaScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/barathrajd/booksmanagementsystem"
    },
    {
      title: "EveMa",
      description: "Event management software for data acquisition.",
      longDescription: "Facilitates visitor-exhibitor communication through data analytics. Helps convert leads into business targets.",
      tags: ["Data Analytics", "Event Tech", "Software"],
      githubUrl: "https://github.com/Evema-event/EveMa"
    }
  ],
  contact: [
    {
      type: "email",
      label: "barathraj.uidev@gmail.com",
      url: "mailto:barathraj.uidev@gmail.com"
    },
    {
      type: "github",
      label: "GitHub",
      url: "https://github.com/barathrajd"
    },
    {
      type: "website",
      label: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/barathrajd"
    }
  ]
};
