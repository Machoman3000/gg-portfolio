import type { Project, Writing, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "NEURAL_NET_VIS",
    slug: "neural-net-vis",
    description:
      "WebGL-based neural network visualization. Real-time rendering of network architectures with interactive node exploration.",
    status: "active",
    category: "WEBGL",
    technologies: ["Three.js", "React", "GLSL", "TypeScript"],
    links: { github: "#", live: "#" },
    featured: true,
  },
  {
    id: "2",
    title: "CRYPTO_DASH",
    slug: "crypto-dash",
    description:
      "Real-time cryptocurrency dashboard with price alerts and portfolio tracking. Built for speed and reliability.",
    status: "active",
    category: "FINTECH",
    technologies: ["Next.js", "WebSocket", "Tailwind", "PostgreSQL"],
    links: { github: "#", live: "#" },
    featured: true,
  },
  {
    id: "3",
    title: "SYNTHWAVE_FM",
    slug: "synthwave-fm",
    description:
      "Retro-futuristic music player with audio visualization. Procedural waveform generation and custom EQ.",
    status: "completed",
    category: "AUDIO",
    technologies: ["Web Audio API", "Canvas", "React"],
    links: { github: "#" },
    featured: false,
  },
  {
    id: "4",
    title: "TERM_PORTFOLIO",
    slug: "term-portfolio",
    description:
      "This website. A cyberpunk-inspired portfolio with terminal aesthetics and smooth animations.",
    status: "wip",
    category: "WEB",
    technologies: ["Next.js", "Motion", "Tailwind"],
    links: { github: "#", live: "#" },
    featured: true,
  },
  {
    id: "5",
    title: "DATA_FORGE",
    slug: "data-forge",
    description:
      "CLI tool for generating mock data. Supports JSON, CSV, SQL with customizable schemas.",
    status: "archived",
    category: "CLI",
    technologies: ["Node.js", "TypeScript", "Faker.js"],
    links: { github: "#" },
    featured: false,
  },
  {
    id: "6",
    title: "PIXEL_SORT",
    slug: "pixel-sort",
    description:
      "Image glitch art generator. Applies pixel sorting algorithms for aesthetic distortion effects.",
    status: "completed",
    category: "CREATIVE",
    technologies: ["Python", "Pillow", "NumPy"],
    links: { github: "#", live: "#" },
    featured: false,
  },
];

export const writings: Writing[] = [
  {
    id: "1",
    title: "Building a Cyberpunk Portfolio with Next.js",
    slug: "building-cyberpunk-portfolio",
    excerpt:
      "How I built this site using Next.js 15, Tailwind CSS v4, and Motion for a retro-futuristic aesthetic.",
    tags: ["Next.js", "Design", "Tutorial"],
    publishedAt: "2026-01-24",
    readingTime: 8,
  },
  {
    id: "2",
    title: "WebGL Shaders for Beginners",
    slug: "webgl-shaders-beginners",
    excerpt:
      "A practical introduction to fragment and vertex shaders. Make your first glowing orb.",
    tags: ["WebGL", "GLSL", "Graphics"],
    publishedAt: "2026-01-15",
    readingTime: 12,
  },
  {
    id: "3",
    title: "Why I Still Use RSS in 2026",
    slug: "rss-in-2026",
    excerpt:
      "The algorithmic feed is broken. Here's how I curate my own information diet.",
    tags: ["Productivity", "Opinion"],
    publishedAt: "2026-01-08",
    readingTime: 5,
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/gg", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/gg", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/gg", icon: "twitter" },
];

// Profile data
export const profile = {
  name: "GG",
  title: "Full-Stack Developer",
  location: "San Francisco, CA",
  bio: "Building digital experiences at the intersection of design and engineering. Passionate about creative coding, developer tools, and retro aesthetics.",
  status: "Available for opportunities",
};
