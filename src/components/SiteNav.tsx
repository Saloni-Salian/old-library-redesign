import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/catalogue", label: "Catalogue" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/support", label: "Support" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-deep/95 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center">
            <span className="font-serif text-gold text-lg leading-none">OL</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-ink text-lg leading-none">The Old Library</div>
            <div className="text-[0.6rem] tracking-[0.3em] text-gold/80 uppercase mt-1">
              Family Lending Library
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-ink/85 hover:text-gold text-sm tracking-wider uppercase transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:inline-flex text-ink/85 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/membership"
            className="hidden md:inline-flex items-center px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Join
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-emerald-deep border-t border-gold/20 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-ink/90 hover:text-gold text-sm tracking-wider uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block text-ink/80 hover:text-gold text-sm tracking-wider uppercase pt-4 border-t border-gold/20"
          >
            Sign in
          </Link>
          <Link
            to="/membership"
            onClick={() => setOpen(false)}
            className="block text-gold text-sm tracking-wider uppercase"
          >
            Join the Library
          </Link>
        </div>
      )}
    </header>
  );
}
