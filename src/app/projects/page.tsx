import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "View my portfolio of web development projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Page header */}
        <div className="border-b border-border px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] text-text-muted tracking-widest mb-2">
              <span>ROOT</span>
              <span>/</span>
              <span className="text-primary">PROJECTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              PROJECT_INDEX
            </h1>
            <p className="text-text-dim mt-2 max-w-xl">
              A collection of experiments, tools, and applications. Each project
              represents a learning journey.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-b border-border px-6 py-3 bg-surface">
          <div className="max-w-6xl mx-auto flex items-center gap-6 text-[10px] tracking-widest text-text-muted">
            <span>
              TOTAL_NODES: <span className="text-primary">{projects.length}</span>
            </span>
            <span>
              ACTIVE:{" "}
              <span className="text-primary">
                {projects.filter((p) => p.status === "active").length}
              </span>
            </span>
            <span>
              FEATURED:{" "}
              <span className="text-primary">
                {projects.filter((p) => p.featured).length}
              </span>
            </span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Coming soon message */}
            <div className="mt-8 border border-border bg-surface p-6 text-center">
              <p className="text-text-dim text-sm font-mono">
                <span className="text-primary">&gt;</span> More projects coming soon...
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4 text-xs font-mono text-text-muted">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span>GG / 2026 / SYS_ACTIVE</span>
            <span>V.1.0</span>
          </div>
        </footer>
      </main>
    </>
  );
}
