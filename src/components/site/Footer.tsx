import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import logoWhite from "@/assets/guardafui-logo-transparent.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-white text-charcoal/80 border-t border-border">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center mb-4">
            <img src={logoWhite.url} alt="Guardafui Works" className="h-36 md:h-44 w-auto -ml-3" />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-charcoal/60">
            A remote tech studio helping small businesses look established from day one — custom
            websites, business email, hosting, and Google Business setup.
          </p>
          <a
            href="mailto:info@guardafuiworks.com"
            className="inline-flex items-center gap-2 mt-5 text-navy hover:text-amber transition-colors text-sm font-medium"
          >
            <Mail size={16} /><span>info@guardafuiworks.com</span>
          </a>
        </div>

        <div>
          <h4 className="text-navy font-sans font-semibold text-sm uppercase tracking-wider mb-4">

            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-amber transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-amber transition-colors">Pricing</Link></li>
            <li><Link to="/portfolio" className="hover:text-amber transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-navy font-sans font-semibold text-sm uppercase tracking-wider mb-4">
            Follow
          </h4>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 rounded-full border border-navy/20 text-navy flex items-center justify-center hover:bg-amber hover:text-navy-deep hover:border-amber transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-6 text-xs text-charcoal/50 flex flex-col md:flex-row justify-between gap-2">

          <span>© {new Date().getFullYear()} Guardafui Works. All rights reserved.</span>
          <span>A guiding beacon for small business online.</span>
        </div>
      </div>
    </footer>
  );
}
