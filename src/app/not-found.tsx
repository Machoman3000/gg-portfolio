import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center font-mono relative"
    >
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30" />

      <div className="text-center space-y-6">
        {/* Error code */}
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.3em] text-text-muted animate-blink">
            ERROR_CODE: 404
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            NOT_FOUND
          </h1>
        </div>

        {/* Message */}
        <p className="text-text-dim max-w-md mx-auto">
          The requested resource could not be located in the system. It may have
          been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="px-6 py-3 border border-primary hover:bg-primary hover:text-background transition-colors text-sm tracking-wider"
          >
            RETURN_HOME
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-border hover:border-primary transition-colors text-sm tracking-wider text-text-dim hover:text-primary"
          >
            VIEW_PROJECTS
          </Link>
        </div>

        {/* System info */}
        <div className="pt-8 text-[10px] text-text-muted tracking-widest space-y-1">
          <p>TIMESTAMP: {new Date().toISOString().split("T")[0]}</p>
          <p>PROTOCOL: NEXT.JS_404_HANDLER</p>
        </div>
      </div>
    </main>
  );
}
