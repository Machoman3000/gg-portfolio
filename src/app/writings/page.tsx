import type { Metadata } from "next";
import { Header } from "@/components/header";
import { WritingCard } from "@/components/writing-card";
import { writings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writings",
  description: "Thoughts on development, design, and technology.",
};

export default function WritingsPage() {
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
              <span className="text-primary">WRITINGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              ARCHIVE_LOG
            </h1>
            <p className="text-text-dim mt-2 max-w-xl">
              Thoughts, tutorials, and observations. Mostly about building
              things for the web.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-b border-border px-6 py-3 bg-surface">
          <div className="max-w-4xl mx-auto flex items-center gap-6 text-[10px] tracking-widest text-text-muted">
            <span>
              ENTRIES: <span className="text-primary">{writings.length}</span>
            </span>
            <span>
              TOTAL_READ_TIME:{" "}
              <span className="text-primary">
                {writings.reduce((acc, w) => acc + w.readingTime, 0)} MIN
              </span>
            </span>
          </div>
        </div>

        {/* Writings list */}
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {writings.map((writing) => (
              <WritingCard key={writing.id} writing={writing} />
            ))}

            {/* Empty state hint */}
            <div className="text-center py-12 text-text-muted text-sm">
              <p className="tracking-widest">:: END_OF_ARCHIVE ::</p>
              <p className="mt-2 text-text-dim">More entries loading...</p>
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
