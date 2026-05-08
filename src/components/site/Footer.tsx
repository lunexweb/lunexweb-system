import { Link } from "react-router-dom";
import { WHATSAPP_LINK, EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center bg-white rounded-md px-2 py-1">
            <img src="/portfolio/2.png" alt="Lunexweb" className="h-7 w-auto" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Helping South African businesses look professional online and attract more customers.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/#services" className="hover:text-white">Services</Link></li>
            <li><Link to="/#pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/#portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: +27 78 999 2503</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
            <li>Johannesburg, South Africa</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} LunexWeb. All rights reserved.</p>
          <p>Built in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
