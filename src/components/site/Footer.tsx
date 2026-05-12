import { Link } from "react-router-dom";
import { EMAIL, openChat } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center bg-white rounded-md px-2 py-1">
            <img src="/portfolio/2.png" alt="Lunexweb" className="h-7 w-auto" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            We keep your business online, updated, and visible — without you lifting a finger.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/#services" className="hover:text-white">Services</Link></li>
            <li><Link to="/online-store" className="hover:text-white">Online Store</Link></li>
            <li><Link to="/#pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/#portfolio" className="hover:text-white">Portfolio</Link></li>

            <li><Link to="/#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><button type="button" onClick={openChat} className="hover:text-white transition-colors">Live Chat</button></li>
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
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <p>Built in South Africa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
