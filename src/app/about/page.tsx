import type { Metadata } from "next";
import { Header } from "@/components/header";
import { profile, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about GG - full-stack developer.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Page header */}
        <div className="border-b border-border px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] text-text-muted tracking-widest mb-2">
              <span>ROOT</span>
              <span>/</span>
              <span className="text-primary">ABOUT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              IDENTITY_DOSSIER
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Profile section */}
            <div className="md:col-span-2 space-y-8">
              {/* Avatar placeholder */}
              <div className="relative w-32 h-32 border-2 border-primary p-1">
                <div className="w-full h-full bg-surface flex items-center justify-center">
                  <span className="text-4xl font-bold text-text-dim">
                    {profile.name}
                  </span>
                </div>
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-text-dim tracking-wider">{profile.title}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>{profile.status}</span>
                </div>

                <p className="text-text-dim leading-relaxed border-l-2 border-border pl-4">
                  {profile.bio}
                </p>
              </div>

              {/* Skills section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest text-text-muted">
                  SKILL_MATRIX
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "FRONTEND", skills: ["React", "Next.js", "TypeScript"] },
                    { label: "BACKEND", skills: ["Node.js", "Python", "PostgreSQL"] },
                    { label: "TOOLS", skills: ["Git", "Docker", "Figma"] },
                    { label: "INTERESTS", skills: ["WebGL", "Creative Coding", "CLI Tools"] },
                  ].map((category) => (
                    <div key={category.label} className="space-y-2">
                      <span className="text-[10px] tracking-widest text-text-muted">
                        {category.label}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] font-mono border border-border text-text-dim"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Location */}
              <div className="space-y-2">
                <h3 className="text-[10px] tracking-widest text-text-muted">
                  LOCATION
                </h3>
                <p className="font-mono">{profile.location}</p>
              </div>

              {/* Links */}
              <div className="space-y-2">
                <h3 className="text-[10px] tracking-widest text-text-muted">
                  NETWORK_LINKS
                </h3>
                <div className="space-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-border hover:border-primary transition-colors group"
                    >
                      <span className="text-sm">{link.name}</span>
                      <span className="text-text-muted group-hover:text-primary transition-colors">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <h3 className="text-[10px] tracking-widest text-text-muted">
                  CONTACT
                </h3>
                <p className="text-sm text-text-dim">
                  Reach out via LinkedIn or Twitter for collaborations and
                  opportunities.
                </p>
              </div>

              {/* System info decoration */}
              <div className="p-4 border border-border bg-surface space-y-2 text-[10px] font-mono text-text-muted">
                <div className="flex justify-between">
                  <span>VERSION</span>
                  <span>1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span>LAST_UPDATE</span>
                  <span>2026-01</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS</span>
                  <span className="text-accent">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4 text-xs font-mono text-text-muted">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span>GG / 2026 / SYS_ACTIVE</span>
            <span>V.1.0</span>
          </div>
        </footer>
      </main>
    </>
  );
}
