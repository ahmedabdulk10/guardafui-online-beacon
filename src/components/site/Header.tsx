import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoBlue from "@/assets/guardafui-logo-transparent.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-card" : "bg-white"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-24 md:h-28 text-4xl">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <img src={logoBlue.url} alt="Guardafui Works" className="h-20 md:h-24 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-lg">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-medium text-charcoal/80 hover:text-navy transition-colors text-lg"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-amber text-navy-deep font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="container-prose py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-charcoal hover:text-navy"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber text-navy-deep font-semibold text-center px-5 py-3 rounded-full mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
