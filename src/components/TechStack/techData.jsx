/**
 * Technology Ecosystem Data Configuration
 */

export const TECH_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Cloud",
  "Tools",
  "AI"
];

export const TECH_NODES = [
  // INNER ORBIT
  {
    id: "react",
    name: "React",
    category: "Frontend",
    orbit: "inner",
    iconLib: "si",
    iconName: "SiReact",
    color: "#61DAFB",
    description: "Declarative, component-based UI library for modern web applications."
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    orbit: "inner",
    iconLib: "si",
    iconName: "SiNodedotjs",
    color: "#5FA04E",
    description: "Event-driven JavaScript runtime built on Chrome's V8 engine."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    orbit: "inner",
    iconLib: "si",
    iconName: "SiMongodb",
    color: "#47A248",
    description: "NoSQL document database engineered for flexibility and scalability."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    orbit: "inner",
    iconLib: "si",
    iconName: "SiTypescript",
    color: "#3178C6",
    description: "Strongly typed programming language that builds on JavaScript."
  },

  // MIDDLE ORBIT
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiJavascript",
    color: "#F7DF1E",
    description: "High-level, dynamic language powering modern web applications."
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiExpress",
    color: "#F7F2EC",
    description: "Minimalist and fast web framework for Node.js backend services."
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Backend",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiNestjs",
    color: "#E0234E",
    description: "Progressive Node.js framework for building efficient backend systems."
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiTailwindcss",
    color: "#06B6D4",
    description: "Utility-first CSS framework for crafting bespoke digital interfaces."
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    category: "Cloud",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiCloudinary",
    color: "#3448C5",
    description: "End-to-end cloud media management and asset optimization platform."
  },
  {
    id: "mongoose",
    name: "Mongoose",
    category: "Database",
    orbit: "middle",
    iconLib: "si",
    iconName: "SiMongodb",
    color: "#880000",
    description: "Elegant MongoDB object modeling environment designed for Node.js."
  },

  // OUTER ORBIT
  {
    id: "git",
    name: "Git",
    category: "Tools",
    orbit: "outer",
    iconLib: "si",
    iconName: "SiGit",
    color: "#F05032",
    description: "Distributed version control system designed for speed and tracking."
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    orbit: "outer",
    iconLib: "si",
    iconName: "SiGithub",
    color: "#F7F2EC",
    description: "Cloud repository platform for developer collaboration and CI/CD."
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    orbit: "outer",
    iconLib: "vsc",
    iconName: "VscCode",
    color: "#007ACC",
    description: "Extensible code editor optimized for modern web development."
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    orbit: "outer",
    iconLib: "si",
    iconName: "SiPostman",
    color: "#FF6C37",
    description: "API platform for building, testing, and documenting robust endpoints."
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI",
    orbit: "outer",
    iconLib: "tb",
    iconName: "TbBrandOpenai",
    color: "#10A37F",
    description: "Conversational AI model driving rapid architectural iteration."
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI",
    orbit: "outer",
    iconLib: "tb",
    iconName: "TbBrandCursor",
    color: "#D16A8A",
    description: "AI-first code editor designed for pair programming efficiency."
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    category: "AI",
    orbit: "outer",
    iconLib: "fa",
    iconName: "FaBrain",
    color: "#A93A5B",
    description: "AI pair programmer translating natural thoughts into precise code."
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "AI",
    orbit: "outer",
    iconLib: "tb",
    iconName: "TbSparkles",
    color: "#8E75FF",
    description: "Multimodal AI engine backing intelligent development workflows."
  }
];