import { MessageCircle, ArrowRight, Clock, UserCheck, Banknote } from "lucide-react";
import heroImg from "@/assets/pexels-shkrabaanthony-6207729.jpg";
import { openChat } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white lg:min-h-screen flex items-center pt-16 pb-12 lg:pb-0">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.62_0.18_255/.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3 py-1 text-xs font-semibold text-whatsapp backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-whatsapp animate-pulse" />
            Managed Websites · South Africa · From R299/Month
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
            Most websites get built.{" "}
            <span className="text-white/50">Then forgotten.</span>
            <br />
            <span className="text-gradient-brand">Ours get managed. Every month.</span>
          </h1>
          <p className="mt-4 text-base lg:text-lg text-white/70 max-w-xl">
            So yours actually works — built for you, live in 24–48 hours, managed every month. You focus on your business. We handle your website.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-5 w-5" /> Tell me what you need
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-medium hover:bg-white/10 transition"
            >
              See plans <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <Clock className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">24–48 hours</p>
              <p className="text-xs text-white/50 mt-0.5">Not weeks</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <UserCheck className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">One person</p>
              <p className="text-xs text-white/50 mt-0.5">Just WhatsApp</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <Banknote className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">R499 setup</p>
              <p className="text-xs text-white/50 mt-0.5">Not R15k</p>
            </div>
          </div>
        </div>
        <div className="relative animate-float hidden lg:flex lg:items-center lg:justify-center">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Professional business website on laptop"
            width={1280}
            height={960}
            fetchPriority="high"
            decoding="async"
            className="relative rounded-2xl shadow-elegant border border-white/10 w-full max-h-[72vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
