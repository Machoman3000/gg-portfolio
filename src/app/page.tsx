import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

const navItems = [
  { href: "/projects", label: "PROJECTS", num: "01" },
  { href: "/writings", label: "WRITINGS", num: "02" },
  { href: "/about", label: "ABOUT", num: "03" },
];

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col justify-between overflow-hidden relative font-mono"
    >
      {/* Boot sequence header */}
      <header className="w-full p-6 flex justify-between items-start z-10">
        <div className="flex flex-col gap-1 text-[10px] tracking-[0.2em] text-text-dim">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-blink" />
            <span>SYS_BOOT_SEQUENCE_INIT</span>
          </div>
          <span className="hidden md:inline">
            ////// INITIALIZING_PORTFOLIO_INTERFACE //////
          </span>
        </div>

        {/* Barcode decoration */}
        <div className="flex flex-col items-end gap-2">
          <div className="h-8 w-48 hidden md:flex items-end justify-end gap-[1px]">
            <div className="w-[2px] h-full bg-primary" />
            <div className="w-[4px] h-full bg-primary" />
            <div className="w-[1px] h-full bg-primary" />
            <div className="w-[3px] h-3/4 bg-primary" />
            <div className="w-[5px] h-full bg-primary" />
            <div className="w-[2px] h-1/2 bg-primary" />
            <div className="w-[1px] h-full bg-primary" />
            <div className="w-[6px] h-full bg-primary" />
            <div className="w-[2px] h-3/4 bg-primary" />
            <div className="w-[1px] h-full bg-primary" />
            <div className="w-[4px] h-full bg-primary" />
            <div className="w-[2px] h-1/2 bg-primary" />
            <div className="w-[3px] h-full bg-primary" />
          </div>
          <span className="text-[9px] tracking-widest text-text-muted">
            (GG)PORTFOLIO_2026
          </span>
        </div>
      </header>

      {/* Vertical side navigation */}
      <nav
        aria-label="Main navigation"
        className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-8 z-20"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-[10px] w-6 text-text-muted">{item.num}</span>
            <span className="text-sm tracking-widest group-hover:pl-2 transition-all">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Center logo section */}
      <div className="flex-grow flex items-center justify-center relative">
        <AnimatedLogo />

        {/* Crosshair lines */}
        <div className="absolute w-full h-px bg-primary/10 top-1/2 left-0 -z-10" />
        <div className="absolute h-full w-px bg-primary/10 left-1/2 top-0 -z-10" />
      </div>

      {/* Footer with system status */}
      <footer className="w-full p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end z-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            SYSTEM_ACTIVE
          </h1>
          <h2 className="text-lg md:text-xl tracking-[0.3em] font-light mt-1 text-text-dim">
            STATUS: ONLINE_V.1.0
          </h2>
          <div className="flex flex-col text-[10px] text-text-muted tracking-wider mt-2 gap-1 uppercase">
            <p>SECTOR: PORTFOLIO_ALPHA</p>
            <p>PROTOCOL: NEXT.JS_15</p>
            <p>KERNEL: REACT_19</p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex flex-col items-end gap-6 mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] tracking-widest text-text-dim">
            <div className="flex justify-between w-32 border-b border-border pb-1">
              <span>PROJECTS</span>
              <span className="text-primary">06</span>
            </div>
            <div className="flex justify-between w-32 border-b border-border pb-1">
              <span>WRITINGS</span>
              <span className="text-primary">03</span>
            </div>
            <div className="flex justify-between w-32 border-b border-border pb-1">
              <span>EXPERIENCE</span>
              <span className="text-primary">3Y</span>
            </div>
            <div className="flex justify-between w-32 border-b border-border pb-1">
              <span>UPTIME</span>
              <span className="text-primary">99.9%</span>
            </div>
          </div>

          {/* Activity visualization */}
          <div className="flex gap-0.5 items-end h-6">
            {[40, 70, 30, 90, 60, 45, 80, 55, 75, 40, 65, 85].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-primary/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile navigation */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border p-4 z-50"
      >
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 text-text-dim hover:text-primary transition-colors"
            >
              <span className="text-[10px]">{item.num}</span>
              <span className="text-xs tracking-wider">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 hidden md:block" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 hidden md:block" />
    </main>
  );
}
