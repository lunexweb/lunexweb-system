import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

const plans = [
  {
    name: "Starter",
    priceMain: "R299",
    priceCents: ".99",
    period: "/month",
    setup: "R299",
    desc: "Perfect for businesses that need a professional online presence without large upfront costs.",
    features: [
      "Professional landing page",
      "WhatsApp integration",
      "Mobile responsive",
      "Monthly maintenance included",
    ],
    cta: "Start on WhatsApp",
    featured: false,
  },
  {
    name: "Business",
    priceMain: "R499",
    priceCents: ".99",
    period: "/month",
    setup: "R499",
    desc: "Best for growing businesses that want more visibility, more enquiries, and a stronger online presence.",
    features: [
      "Multi-page website",
      "Google Business setup",
      "SEO basics included",
      "Monthly updates",
    ],
    cta: "Get Business Plan",
    featured: true,
  },
  {
    name: "Premium",
    priceMain: "Custom",
    priceCents: "",
    period: " quote",
    setup: "",
    desc: "For businesses needing advanced systems, bookings, customer portals, or custom functionality.",
    features: [
      "Advanced custom systems",
      "Booking systems",
      "Dashboard systems",
    ],
    cta: "Request Quote",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Professional Online Presence From R299/month
          </h2>
          <p className="mt-4 text-muted-foreground">
            R499 once-off setup — <span className="font-semibold text-foreground">your 1st month is free</span>. After that, pay monthly. You bring your own domain (±R150/year) — we handle everything else.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 border transition-all flex flex-col ${
                p.featured
                  ? "bg-primary text-primary-foreground border-transparent shadow-elegant scale-[1.02]"
                  : "bg-card border-border hover:shadow-elegant"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.setup && (
                <p className={`mt-3 text-xs font-medium ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.setup} setup · 1st month FREE · then
                </p>
              )}
              <div className={`${p.setup ? "mt-1" : "mt-4"} flex items-baseline gap-0.5`}>
                <span className="text-4xl font-bold tracking-tight">{p.priceMain}</span>
                {p.priceCents && (
                  <sup className={`text-base font-bold self-start mt-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {p.priceCents}
                  </sup>
                )}
                <span className={`ml-0.5 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.period}
                </span>
              </div>
              <p className={`mt-3 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 ${p.featured ? "text-brand-glow" : "text-accent"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-medium transition self-end ${
                  p.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-gradient-brand text-white hover:opacity-90"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
