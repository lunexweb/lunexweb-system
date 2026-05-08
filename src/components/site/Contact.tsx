import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, EMAIL } from "@/lib/site";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "9174a541-881f-4a5d-b420-eb2d14d16d80");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error");
    }
  };

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

        <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 shadow-elegant space-y-4">
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
            disabled={result === "Sending...."}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3 font-medium shadow-glow hover:opacity-90 transition disabled:opacity-60"
          >
            <MessageCircle className="h-4 w-4" />
            {result === "Sending...." ? "Sending…" : "Send Message"}
          </button>
          {result === "Form Submitted Successfully" && (
            <p className="text-xs text-center text-green-600 font-medium">Message sent! We'll be in touch soon.</p>
          )}
          {result === "Error" && (
            <p className="text-xs text-center text-destructive">Something went wrong. Please try WhatsApp instead.</p>
          )}
        </form>
      </div>
    </section>
  );
}
