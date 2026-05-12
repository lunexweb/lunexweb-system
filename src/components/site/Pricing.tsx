import { useState } from "react";
import { Check, MessageCircle, Tag } from "lucide-react";
import { openChat } from "@/lib/site";

const plans = [
  {
    name: "Starter Website",
    price6: "R449",
    price12: "R299",
    period: "/month",
    badge: "",
    desc: "Perfect for getting your business online. A clean 1-page website that helps customers find you and contact you easily.",
    features: [
      "1-page professional website",
      "Mobile-friendly design",
      "WhatsApp button",
      "Basic SEO setup",
      "Hosting & security included",
      "Monthly management & support",
    ],
    cta: "Get Starter Website",
    featured: false,
    isCustom: false,
    setup6: "R699",
    savings: "R2,000",
  },
  {
    name: "Business Website",
    price6: "R699",
    price12: "R499",
    period: "/month",
    badge: "Best for most businesses",
    desc: "A full multi-page website that builds trust and generates more enquiries — the right choice for most growing SA businesses.",
    features: [
      "Up to 5 pages (extra pages on request)",
      "Mobile-friendly design",
      "WhatsApp button + contact form",
      "Enquiry forms",
      "Google Search Console setup",
      "Better SEO structure",
      "Custom branding & colour scheme",
      "Hosting & security included",
      "Monthly management & priority support",
    ],
    cta: "Get Business Website",
    featured: true,
    isCustom: false,
    setup6: "R999",
    savings: "R2,900",
  },
  {
    name: "Growth Website",
    price6: "R999",
    price12: "R699",
    period: "/month",
    badge: "",
    desc: "For businesses that want long-term online visibility. More pages, a blog and advanced SEO to grow your presence every month.",
    features: [
      "Up to 5 pages (extra pages on request)",
      "Mobile-friendly design",
      "WhatsApp button + contact form",
      "Enquiry forms",
      "Google Search Console setup",
      "Advanced SEO setup",
      "Blog / news section",
      "Monthly content updates support",
      "Google Analytics & conversion tracking",
      "Custom branding & colour scheme",
      "Hosting & security included",
      "Monthly management & support",
    ],
    cta: "Get Growth Website",
    featured: false,
    isCustom: false,
    setup6: "R1,499",
    savings: "R4,600",
  },
];

export function Pricing() {
  const [term, setTerm] = useState<"6" | "12">("12");

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Know Exactly What You Get — and What It Costs
          </h2>
          <p className="mt-4 text-muted-foreground">
            One flat monthly fee. No hidden costs. Pick a plan and we handle everything — design, build, hosting and monthly management.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1 gap-1">
            <button
              onClick={() => setTerm("6")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                term === "6"
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              6-month plan
            </button>
            <button
              onClick={() => setTerm("12")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition flex items-center gap-2 ${
                term === "12"
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly plan
              <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${
                term === "12" ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
              }`}>
                Save more
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((p) => {
            const price = term === "12" ? p.price12 : p.price6;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 border transition-all flex flex-col ${
                  p.featured
                    ? "bg-primary text-primary-foreground border-transparent shadow-elegant scale-[1.02]"
                    : "bg-card border-border hover:shadow-elegant"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-4xl font-bold tracking-tight">{price}</span>
                      <span className={`ml-0.5 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {p.period}
                      </span>
                    </div>
                    <p className={`mt-1 text-xs font-medium ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      {p.isCustom ? "Setup fee applies · contact for quote" : term === "6" ? "6-month plan" : "Yearly · best value"}
                    </p>
                  </div>
                  {term === "12" && !p.isCustom && (
                    <span className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${p.featured ? "bg-emerald-400/20 text-emerald-300" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"}`}>
                      <Tag className="h-3 w-3" /> Save {p.savings}
                    </span>
                  )}
                </div>
                {!p.isCustom && (
                  <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    p.featured
                      ? "bg-white/15 text-white"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    Once-off setup fee: {term === "12" ? "R499" : p.setup6}
                  </span>
                )}
                <p className={`mt-3 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-brand-glow" : "text-accent"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openChat}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-medium transition self-end ${
                    p.featured
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-gradient-brand text-white hover:opacity-90"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" /> {p.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          Toggle above to compare 6-month and yearly plans. All plans include a once-off setup fee — R499 on yearly (same for all plans). 6-month setup fees vary by plan. After your minimum term your plan continues monthly. Your domain and content are always yours.
        </p>

      </div>
    </section>
  );
}
