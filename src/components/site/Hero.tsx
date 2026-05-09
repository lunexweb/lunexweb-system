import { MessageCircle, ArrowRight, ShieldCheck, Zap, ShoppingBag } from "lucide-react";
import heroImg from "@/assets/pexels-shkrabaanthony-6207729.jpg";
import { WHATSAPP_LINK } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white lg:min-h-screen flex items-center pt-16 pb-12 lg:pb-0">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.62_0.18_255/.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3 py-1 text-xs font-semibold text-whatsapp backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-whatsapp animate-pulse" />
            South African Ecommerce Stores · Monthly Rental
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Rent Your Own{" "}
            <span className="text-gradient-brand">Online Store</span>
            {" "}— We Build & Manage It
          </h1>
          <p className="mt-3 text-base lg:text-lg text-white/70 max-w-xl">
            We build professional online stores for South African brands — from simple catalog stores with WhatsApp ordering to fully powered stores with payment gateways and dashboards. <span className="text-white font-semibold">No setup fees. Just a flat monthly rental.</span>
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
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-brand-glow" /> Live within 7–14 days</div>
            <div className="flex items-center gap-2"><ShoppingBag className="h-4 w-4 text-brand-glow" /> Built for SA brands</div>
          </div>
        </div>
        <div className="relative animate-float hidden lg:flex lg:items-center lg:justify-center">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Modern ecommerce store dashboard"
            width={1280}
            height={960}
            className="relative rounded-2xl shadow-elegant border border-white/10 w-full max-h-[72vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
