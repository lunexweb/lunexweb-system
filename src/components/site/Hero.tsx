import { MessageCircle, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import { WHATSAPP_LINK } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white lg:min-h-screen flex items-center pt-16 pb-12 lg:pb-0">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.62_0.18_255/.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3 py-1 text-xs font-semibold text-whatsapp backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-whatsapp animate-pulse" />
            Launch Offer · R499 Setup + 1st Month FREE
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Rent A Professional Website For Your{" "}
            <span className="text-gradient-brand">Business</span>
          </h1>
          <p className="mt-3 text-base lg:text-lg text-white/70 max-w-xl">
            We help South African businesses look professional online — without huge upfront costs. <span className="text-white font-semibold">R499 setup + your 1st month free.</span> Then just R299/month while we design, host and manage everything.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition"
            >
              View Packages <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-5 hidden sm:flex flex-wrap gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-glow" /> South African team</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-brand-glow" /> Fast turnaround</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand-glow" /> Built to run ads</div>
          </div>
        </div>
        <div className="relative animate-float hidden lg:block">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Modern responsive website dashboard"
            width={1280}
            height={960}
            className="relative rounded-2xl shadow-elegant border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
