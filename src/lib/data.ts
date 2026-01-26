import type { Project, Writing, SocialLink } from "@/types";

// ============================================================
// TEMPLATE PROJECTS - Replace with your real projects
// ============================================================
export const projects: Project[] = [
  {
    id: "1",
    title: "[EXAMPLE] NEURAL_NET_VIS",
    slug: "neural-net-vis",
    description:
      "Template: WebGL-based neural network visualization. Replace this with your own project description.",
    status: "active",
    category: "WEBGL",
    technologies: ["Three.js", "React", "GLSL", "TypeScript"],
    links: { github: "#placeholder", live: "#placeholder" },
    featured: true,
  },
  {
    id: "2",
    title: "[EXAMPLE] CRYPTO_DASH",
    slug: "crypto-dash",
    description:
      "Template: Real-time cryptocurrency dashboard. Replace this with your own project description.",
    status: "active",
    category: "FINTECH",
    technologies: ["Next.js", "WebSocket", "Tailwind", "PostgreSQL"],
    links: { github: "#placeholder", live: "#placeholder" },
    featured: true,
  },
  {
    id: "3",
    title: "[EXAMPLE] SYNTHWAVE_FM",
    slug: "synthwave-fm",
    description:
      "Template: Retro-futuristic music player. Replace this with your own project description.",
    status: "completed",
    category: "AUDIO",
    technologies: ["Web Audio API", "Canvas", "React"],
    links: { github: "#placeholder" },
    featured: false,
  },
  {
    id: "4",
    title: "GG_PORTFOLIO",
    slug: "gg-portfolio",
    description:
      "This website. A cyberpunk-inspired portfolio with terminal aesthetics and smooth animations.",
    status: "wip",
    category: "WEB",
    technologies: ["Next.js", "Motion", "Tailwind"],
    links: { github: "https://github.com/Machoman3000/gg-portfolio", live: "#" },
    featured: true,
  },
  {
    id: "5",
    title: "[EXAMPLE] DATA_FORGE",
    slug: "data-forge",
    description:
      "Template: CLI tool for generating mock data. Replace this with your own project description.",
    status: "archived",
    category: "CLI",
    technologies: ["Node.js", "TypeScript", "Faker.js"],
    links: { github: "#placeholder" },
    featured: false,
  },
  {
    id: "6",
    title: "[EXAMPLE] PIXEL_SORT",
    slug: "pixel-sort",
    description:
      "Template: Image glitch art generator. Replace this with your own project description.",
    status: "completed",
    category: "CREATIVE",
    technologies: ["Python", "Pillow", "NumPy"],
    links: { github: "#placeholder", live: "#placeholder" },
    featured: false,
  },
];

// ============================================================
// TEMPLATE WRITINGS - Replace with your real blog posts
// ============================================================
export const writings: Writing[] = [
  {
    id: "1",
    title: "[EXAMPLE] Building a Cyberpunk Portfolio with Next.js",
    slug: "building-cyberpunk-portfolio",
    excerpt:
      "Template: How I built this site using Next.js 15, Tailwind CSS v4, and Motion. Replace with your own writing.",
    tags: ["Next.js", "Design", "Tutorial"],
    publishedAt: "2025-01-24",
    readingTime: 8,
  },
  {
    id: "2",
    title: "[EXAMPLE] WebGL Shaders for Beginners",
    slug: "webgl-shaders-beginners",
    excerpt:
      "Template: A practical introduction to fragment and vertex shaders. Replace with your own writing.",
    tags: ["WebGL", "GLSL", "Graphics"],
    publishedAt: "2025-01-15",
    readingTime: 12,
  },
  {
    id: "3",
    title: "[EXAMPLE] Why I Still Use RSS",
    slug: "rss-example",
    excerpt:
      "Template: The algorithmic feed is broken. Replace with your own writing.",
    tags: ["Productivity", "Opinion"],
    publishedAt: "2025-01-08",
    readingTime: 5,
  },
];

// ============================================================
// SOCIAL LINKS - Update with your real profiles
// ============================================================
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Machoman3000", icon: "github" },
  { name: "LinkedIn", url: "#update-your-linkedin", icon: "linkedin" },
  { name: "Twitter", url: "#update-your-twitter", icon: "twitter" },
];

// ============================================================
// PROFILE - Update with your real info
// ============================================================
export const profile = {
  name: "GG",
  title: "Aspiring Full-Stack Developer",
  location: "[Your Location]",
  bio: "Learning to code and building digital experiences. Update this bio with your own story.",
  status: "Learning & Building",
};
