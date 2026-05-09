import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";
import ctaBg from "@/assets/tumisu-online-4275963_1920.jpg";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl text-white p-10 sm:p-16 text-center shadow-elegant">
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <h2 className="relative text-3xl sm:text-5xl font-bold tracking-tight">
            Ready to Sell Online?{" "}
            <span className="text-gradient-brand">Get Your Store Live in 14 Days</span>
          </h2>
          <p className="relative mt-5 text-white/80 max-w-2xl mx-auto">
            No setup fees. No contracts. Just a flat monthly rental — we build, host and manage your store while you focus on your brand. <span className="text-white font-semibold">From R799/month.</span>
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
          >
            <MessageCircle className="h-5 w-5" /> Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
