import Link from "next/link";
import type { Writing } from "@/types";

interface WritingCardProps {
  writing: Writing;
}

export function WritingCard({ writing }: WritingCardProps) {
  return (
    <Link href={`/writings/${writing.slug}`} className="block">
      <article className="group relative border-b border-border py-6 hover:bg-surface/50 transition-colors">
      {/* Left accent bar on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-primary transition-colors" />

      <div className="pl-4">
        {/* Meta info */}
        <div className="flex items-center gap-4 mb-2 text-[10px] text-text-muted tracking-widest">
          <time dateTime={writing.publishedAt}>
            {new Date(writing.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </time>
          <span>•</span>
          <span>{writing.readingTime} MIN READ</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
          {writing.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-dim text-sm mb-4 max-w-2xl">
          {writing.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {writing.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-text-muted border border-border"
            >
              #{tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </article>
    </Link>
  );
}
