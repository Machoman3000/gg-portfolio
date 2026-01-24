import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<Project["status"], string> = {
  active: "bg-primary text-background border-primary",
  wip: "bg-transparent text-primary border-dashed border-primary",
  completed: "bg-surface text-text-dim border-border",
  archived: "bg-surface text-text-muted border-border",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative bg-surface p-6 border border-border hover:border-primary/50 transition-colors min-h-[280px] flex flex-col">
      {/* Corner decoration */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-border group-hover:border-primary/50 transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border group-hover:border-primary/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border group-hover:border-primary/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-border group-hover:border-primary/50 transition-colors" />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-border group-hover:bg-primary transition-colors" />

      {/* Header */}
      <header className="flex items-start justify-between mb-4">
        <div>
          <span className="text-[10px] text-text-muted tracking-widest block mb-1">
            {project.category}
          </span>
          <h3 className="text-lg font-bold tracking-tight font-mono">
            {project.title}
          </h3>
        </div>
        <span
          className={`px-2 py-0.5 text-[10px] font-mono font-bold border tracking-wider ${statusStyles[project.status]}`}
        >
          [{project.status.toUpperCase()}]
        </span>
      </header>

      {/* Description */}
      <p className="text-text-dim text-sm mb-4 border-l-2 border-border pl-3 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-[10px] font-mono text-text-dim border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <footer className="flex gap-4 mt-auto">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider hover:text-primary transition-colors"
          >
            LIVE →
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider text-text-dim hover:text-primary transition-colors"
          >
            SOURCE
          </a>
        )}
      </footer>
    </article>
  );
}
