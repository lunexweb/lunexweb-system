import { useState } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/site";

export function ContactSection() {
  const [result, setResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  const inputCls = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "59f8028f-b537-4f79-8389-7103202cdf5f");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    if (data.success) {
      setResult("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setResult("error");
    }
  }

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
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition">
              <span className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center"><MessageCircle className="h-5 w-5" /></span>
              WhatsApp Us
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

        <form onSubmit={handleSubmit} className="rounded-2xl bg-card border border-border p-6 shadow-elegant space-y-4">
          <div>
            <label className="text-sm font-medium">Your name</label>
            <input type="text" name="name" required maxLength={100} className={inputCls} />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" name="email" required maxLength={255} className={inputCls} />
          </div>
          <div>
            <label className="text-sm font-medium">How can we help?</label>
            <textarea name="message" required rows={4} maxLength={1000} className={inputCls} />
          </div>
          <button
            type="submit"
            disabled={result === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3 font-medium shadow-glow hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            {result === "sending" ? "Sending..." : "Send Message"}
          </button>
          {result === "success" && (
            <p className="text-center text-sm text-emerald-500 font-medium">Message sent! We'll be in touch soon.</p>
          )}
          {result === "error" && (
            <p className="text-center text-sm text-red-500 font-medium">Something went wrong. Please try WhatsApp or email.</p>
          )}
        </form>
      </div>
    </section>
  );
}
