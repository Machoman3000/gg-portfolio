import type { Project, Writing, SocialLink } from "@/types";

// ============================================================
// PROJECTS
// ============================================================
export const projects: Project[] = [
  {
    id: "1",
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
];

// ============================================================
// WRITINGS
// ============================================================
export const writings: Writing[] = [
  {
    id: "1",
    title: "What's Next for Interactive Entertainment",
    slug: "whats-next-interactive-entertainment",
    excerpt:
      "How AI tools, onchain infrastructure, and creator distribution are converging to reshape gaming and interactive entertainment.",
    tags: ["Gaming", "Web3", "AI", "Thesis"],
    publishedAt: "2026-01-21",
    readingTime: 12,
  },
];

// ============================================================
// SOCIAL LINKS
// ============================================================
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Machoman3000", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gg-mf/", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/G_G_M_F", icon: "twitter" },
];

// ============================================================
// PROFILE
// ============================================================
export const profile = {
  name: "GG",
  title: "Investor, Operator, Builder",
  location: "US",
  bio: "",
  status: "Building in public",
};
