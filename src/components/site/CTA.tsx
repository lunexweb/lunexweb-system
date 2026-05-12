import { MessageCircle } from "lucide-react";
import { openChat } from "@/lib/site";
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
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <h2 className="relative text-3xl sm:text-5xl font-bold tracking-tight">
            Get Your Business Online Today
          </h2>
          <p className="relative mt-5 text-white/80 max-w-2xl mx-auto">
            R499 once-off setup. Then from R299/month — we build, host, and manage everything for you. <span className="text-white font-semibold">No technical stress. No agency fees.</span>
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:bg-white/90 transition"
            >
              View Plans
            </a>
            <button
              type="button"
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:bg-white/90 transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
