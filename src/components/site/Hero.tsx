import { ArrowRight, Clock, Check, Banknote, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/pexels-shkrabaanthony-6207729.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white lg:min-h-screen flex items-center pt-16 pb-12 lg:pb-0">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.62_0.18_255/.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
            <Building2 className="h-3 w-3 text-brand-glow" />
            Managed Online Presence · South Africa · From R299/month
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight">
            Most customers judge your business{" "}
            <span className="text-gradient-brand">before they contact you.</span>
          </h1>
          <p className="mt-3 text-base lg:text-lg font-medium text-white/90 max-w-lg">
            We make sure what they see makes them choose you.
          </p>
          <p className="mt-2 text-sm text-white/60 max-w-lg leading-relaxed">
            Fully managed online presence — built, hosted, and maintained for you every month. No technical work. No stress.
          </p>

          <ul className="mt-4 space-y-1.5">
            {[
              "Professional online presence that builds trust instantly",
              "Customers find and contact you with one click",
              "Online visitors turn into enquiries automatically",
              "Visible, updated, and working — every month, done for you",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <Check className="h-4 w-4 text-brand-glow shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-medium hover:bg-white/10 transition"
            >
              View Plans
            </a>
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Choose your level</p>
            <div className="space-y-1">
              {[
                { plan: "Starter",  price: "R299/mo", outcome: "Get found online" },
                { plan: "Business", price: "R499/mo", outcome: "Look established and trusted", highlight: true },
                { plan: "Growth",   price: "R699/mo", outcome: "Become the go-to choice in your area" },
              ].map((p) => (
                <div key={p.plan} className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs ${
                  p.highlight ? "bg-white/10 text-white" : "text-white/60"
                }`}>
                  <span className="font-semibold">{p.plan}</span>
                  <span className="text-white/40 mx-2">→</span>
                  <span className="flex-1">{p.outcome}</span>
                  <span className={`font-semibold ml-2 ${p.highlight ? "text-brand-glow" : ""}`}>{p.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-white/40">Activation from R299 · Live in 24–48 hours · Monthly starts when you go live</p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 max-w-lg">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <Building2 className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">Fully managed</p>
              <p className="text-xs text-white/50 mt-0.5">No tech work</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <Clock className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">24–48 hours</p>
              <p className="text-xs text-white/50 mt-0.5">Live fast</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
              <Banknote className="h-4 w-4 text-brand-glow mx-auto mb-1" />
              <p className="text-xs font-semibold text-white">From R299/mo</p>
              <p className="text-xs text-brand-glow mt-0.5 font-medium">Monthly starts once live</p>
            </div>
          </div>
        </div>
        <div className="relative animate-float hidden lg:flex lg:items-center lg:justify-center">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Professional business presence on laptop"
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
