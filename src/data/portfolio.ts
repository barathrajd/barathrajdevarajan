import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Barathraj",
    tagline: "Building scalable frontend systems & developer tools.",
    about: [
      "Specialized in building custom tools, SDKs, and scalable frontend architectures that save development time and boost team productivity",
      "Expert in modern build tools (Rspack, Webpack, Vite) and microfrontend systems, delivering optimized solutions for complex projects",
      "Proven track record designing multi-client frontend delivery strategies and contributing to monorepos with reusable components",
      "Fast turnaround, clean code, and seamless collaboration — let's build something amazing together!"
    ]
  },
  skills: [
    {
      title: "Frontend",
      icon: "Code2",
      skills: ["React.js", "Next.js", "Microfrontends", "Shadcn/UI"]
    },
    {
      title: "Backend",
      icon: "Database",
      skills: ["Node.js", "Express.js", "Deno"]
    },
    {
      title: "Build Tools",
      icon: "Wrench",
      skills: ["Rspack", "Webpack", "Nx", "Vite"]
    },
    {
      title: "Languages",
      icon: "Terminal",
      skills: ["JavaScript (In-depth)", "TypeScript", "Rust (Learning)"]
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
    }
  ]
};
