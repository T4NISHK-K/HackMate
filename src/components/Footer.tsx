import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Explore", href: "/explore" },
      { name: "Compare", href: "/compare" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Community", href: "#" },
      { name: "Support", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style dangerouslySetInnerHTML={{
        __html: `
          .glass {
            backdrop-filter: blur(3px) saturate(180%);
            background: radial-gradient(circle, #fff9 0%, #ffdce64d 60%, #f9f2f4 100%);
            border: 1px solid #ff96b41a;
            justify-content: center;
            align-items: center;
            transition: all .3s;
            display: flex;
          }
          .glass:where(.dark, .dark *) {
            display: flex;
            backdrop-filter: blur(2px) !important;
            background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
            border: 1px solid #ffffff0d !important;
            border-radius: 16px !important;
            justify-content: center !important;
            align-items: center !important;
          }
        `
      }} />
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-700 text-2xl font-extrabold text-white shadow-md">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-br from-rose-200 to-rose-500 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              HackMate
            </span>
          </Link>
          <p className="text-foreground mb-6 max-w-xs text-center text-sm md:text-left">
            HackMate connects developers through AI-powered skill matching to build amazing projects together.
          </p>
          <div className="mt-2 flex gap-3 text-rose-400">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-foreground transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-foreground transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-foreground transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="mb-3 text-xs font-semibold tracking-widest text-rose-400 uppercase">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; 2025 HackMate. All rights reserved.</span>
      </div>
    </footer>
  );
}