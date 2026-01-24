import type { Metadata, Viewport } from "next";
import { jetbrainsMono, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gg.dev"),
  title: {
    default: "GG | Developer Portfolio",
    template: "%s | GG",
  },
  description:
    "Full-stack developer portfolio showcasing projects and experience.",
  keywords: ["Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "GG" }],
  creator: "GG",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gg.dev",
    siteName: "GG Portfolio",
    title: "GG | Developer Portfolio",
    description: "Full-stack developer portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GG | Developer Portfolio",
    description: "Full-stack developer portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
