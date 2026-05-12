import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { openChat } from "@/lib/site";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/online-store", label: "Online Store" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            {links.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openChat}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </button>
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
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="flex items-center py-4 text-base font-medium border-b border-border/50 last:border-0 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
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
