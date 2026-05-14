import { useEffect, useState, useRef } from "react";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { openChat } from "@/lib/site"; // used in mobile sheet

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

const pricingLinks = [
  { href: "/#pricing", label: "Website Pricing" },
  { href: "/online-store#pricing", label: "Online Store Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Lunexweb home">
            <img src="/portfolio/2.png" alt="Lunexweb — Web Design South Africa" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/#top" className="hover:text-foreground transition-colors">Home</Link>

            {/* Pricing dropdown */}
            <div
              ref={pricingRef}
              className="relative"
              onMouseEnter={() => setPricingOpen(true)}
              onMouseLeave={() => setPricingOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                Pricing <ChevronDown className={`h-3.5 w-3.5 transition-transform ${pricingOpen ? "rotate-180" : ""}`} />
              </button>
              {pricingOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-2 z-50">
                  <div className="rounded-xl border border-border bg-card shadow-elegant py-1.5">
                    {pricingLinks.map((l) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        className="block px-4 py-2.5 text-sm hover:bg-accent/5 hover:text-accent transition-colors"
                        onClick={() => setPricingOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/online-store" className="hover:text-foreground transition-colors">Online Store</Link>
            {links.slice(1).map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/get-started"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Get Started
            </Link>
            <button
              className={`md:hidden p-2 rounded-lg border transition ${
                scrolled
                  ? "bg-transparent border-border text-foreground hover:bg-accent/10"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Bottom sheet */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-background rounded-t-3xl shadow-2xl px-6 pt-4 pb-8">
          {/* Drag handle */}
          <div className="mx-auto w-10 h-1 rounded-full bg-border mb-6" />

          {/* Close button */}
          <button
            className="absolute top-4 right-5 p-2 rounded-full hover:bg-accent/10 transition text-muted-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="flex flex-col gap-1">
            <Link to="/#top" className="flex items-center py-4 text-base font-medium border-b border-border/50 hover:text-accent transition-colors" onClick={() => setOpen(false)}>Home</Link>
            <div>
              <p className="py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pricing</p>
              {pricingLinks.map((l) => (
                <Link key={l.href} to={l.href} className="flex items-center py-3 pl-3 text-base font-medium border-b border-border/30 hover:text-accent transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/online-store" className="flex items-center py-4 text-base font-medium border-b border-border/50 hover:text-accent transition-colors" onClick={() => setOpen(false)}>Online Store</Link>
            {links.slice(1).map((l) => (
              <Link key={l.href} to={l.href} className="flex items-center py-4 text-base font-medium border-b border-border/50 last:border-0 hover:text-accent transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => { setOpen(false); openChat(); }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3.5 font-semibold text-base hover:opacity-90 transition"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
