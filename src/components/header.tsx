import Link from "next/link";

const navItems = [
  { href: "/projects", label: "PROJECTS", num: "01" },
  { href: "/writings", label: "WRITINGS", num: "02" },
  { href: "/about", label: "ABOUT", num: "03" },
];

export function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-6 py-3 h-16"
    >
      {/* Logo / Home link */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <div className="w-5 h-5 border-2 border-primary rotate-45 animate-pulse-slow" />
          <span className="text-lg font-bold tracking-wider">GG_SYS</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul role="list" className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-2 text-sm tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-[10px] text-text-muted">{item.num}</span>
                <span className="group-hover:tracking-[0.15em] transition-all">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Status indicator */}
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
        <span className="text-xs font-bold tracking-widest">ONLINE</span>
      </div>
    </header>
  );
}
