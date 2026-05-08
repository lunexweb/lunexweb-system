import { Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, EMAIL } from "@/lib/site";

export function ContactSection() {
  const formKey = import.meta.env.VITE_FORM_KEY ?? "";
  const formEndpoint = "https://" + "api.web3forms.com" + "/submit";

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Get in touch</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Tell Us About Your Business
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'll recommend the best setup based on your business goals and budget.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition">
              <span className="h-10 w-10 rounded-lg bg-whatsapp/15 text-whatsapp grid place-items-center"><MessageCircle className="h-5 w-5" /></span>
              WhatsApp us
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-3 hover:text-accent transition">
              <span className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center"><Phone className="h-5 w-5" /></span>
              +27 78 999 2503
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent transition">
              <span className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center"><Mail className="h-5 w-5" /></span>
              {EMAIL}
            </a>
          </div>
        </div>

        <form action={formEndpoint} method="POST" className="rounded-2xl bg-card border border-border p-6 shadow-elegant space-y-4">
          <input type="hidden" name="access_key" value={formKey} />
          <div>
            <label className="text-sm font-medium">Your name</label>
            <input type="text" name="name" required maxLength={100} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" name="email" required maxLength={255} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium">How can we help?</label>
            <textarea name="message" required rows={4} maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3 font-medium shadow-glow hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
