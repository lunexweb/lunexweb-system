import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Tag, Gift, Globe } from "lucide-react";

function addDomainFee(price: string): string {
  const num = parseInt(price.replace(/[R,]/g, ""), 10);
  const result = num + 39;
  return result >= 1000
    ? `R${Math.floor(result / 1000)},${String(result % 1000).padStart(3, "0")}`
    : `R${result}`;
}

const plans = [
  {
    name: "Online Presence Starter",
    subtitle: "For businesses getting online for the first time",
    price6: "R699",
    price12: "R499",
    period: "/month",
    badge: "",
    desc: "Give your business a simple, professional online presence so customers can find and trust you.",
    features: [
      "Makes your business searchable and credible online",
      "Gives customers one trusted place to learn about you",
      "Turns interest into WhatsApp conversations automatically",
      "Makes your business look established — even if you're just starting",
      "Works 24/7 without you doing anything",
      "Fully managed — no technical work for you",
    ],
    cta: "Activate Starter",
    featured: false,
    isCustom: false,
    setup12: "R499",
    setup6: "R699",
    savings: "R2,400/yr",
  },
  {
    name: "Online Presence Business",
    subtitle: "For businesses that want to look established and consistently generate enquiries",
    price6: "R1,099",
    price12: "R799",
    period: "/month",
    badge: "Best for most businesses",
    desc: "Turn your business into one that customers trust immediately — and choose over competitors.",
    features: [
      "Positions your business as the obvious professional choice",
      "Helps customers choose you instead of competitors",
      "Captures enquiries even when you're busy or closed",
      "Turns your online presence into a steady lead source",
      "Makes your business look bigger, more established, more reliable",
      "Gives customers multiple ways to contact you easily",
      "Fully managed — we handle everything for you",
    ],
    cta: "Activate Business",
    featured: true,
    isCustom: false,
    setup12: "R799",
    setup6: "R999",
    savings: "R3,600/yr",
  },
  {
    name: "Business Visibility Growth",
    subtitle: "For businesses ready to become the go-to choice in their area",
    price6: "R1,699",
    price12: "R1,199",
    period: "/month",
    badge: "",
    desc: "Build long-term visibility so your business becomes easier to find, easier to trust, and harder to ignore.",
    features: [
      "Builds consistent online visibility over time",
      "Positions your business as a leader in your space",
      "Helps your business appear more often in search results over time",
      "Turns online attention into steady enquiries",
      "Builds authority so customers trust you before contacting competitors",
      "Keeps your business visible even when you're not advertising",
      "Continuously improves your online presence month after month",
      "Priority management so changes happen faster",
    ],
    cta: "Activate Growth",
    featured: false,
    isCustom: false,
    setup12: "R999",
    setup6: "R1,299",
    savings: "R6,000/yr",
  },
];

export function Pricing({ addDomain, setAddDomain }: { addDomain: boolean; setAddDomain: (v: boolean) => void }) {
  const [term, setTerm] = useState<"6" | "12">("12");
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Know Exactly What You Get — and What It Costs
          </h2>
          <p className="mt-4 text-muted-foreground">
            One flat monthly fee. No hidden costs. Monthly management only starts once your presence is live.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-accent/5 border border-accent/30 p-4 sm:p-5 text-center max-w-xl mx-auto">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Gift className="h-4 w-4 text-accent" />
            Monthly only starts when you go live
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Pay a once-off activation fee. We build and launch your presence. Monthly management only begins once you're live — not while you wait.
          </p>
        </div>

        {/* Domain question */}
        <div className="mt-6 max-w-xl mx-auto">
          <p className="text-center text-sm font-semibold mb-3">Do you have a domain? <span className="text-muted-foreground font-normal">(e.g. www.yourbusiness.co.za)</span></p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAddDomain(false)}
              className={`rounded-xl border p-4 text-sm text-left transition-all ${
                !addDomain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  !addDomain ? "border-accent bg-accent" : "border-border"
                }`}>
                  {!addDomain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                Yes, I have one
              </div>
              <p className="mt-1 text-xs text-muted-foreground">No extra charge</p>
            </button>
            <button
              type="button"
              onClick={() => setAddDomain(true)}
              className={`rounded-xl border p-4 text-sm text-left transition-all ${
                addDomain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  addDomain ? "border-accent bg-accent" : "border-border"
                }`}>
                  {addDomain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                No, add one for me
              </div>
              <p className="mt-1 text-xs text-accent font-medium">+R39/month</p>
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
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
            const basePrice = term === "12" ? p.price12 : p.price6;
            const price = addDomain && !p.isCustom ? addDomainFee(basePrice) : basePrice;
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
                <p className={`mt-0.5 text-xs font-medium ${p.featured ? "text-white/60" : "text-accent"}`}>{p.subtitle}</p>
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
                    {addDomain && !p.isCustom && (
                      <p className="mt-0.5 text-xs text-accent font-medium flex items-center gap-1">
                        <Globe className="h-3 w-3" /> incl. domain (+R39)
                      </p>
                    )}
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
                    Activation fee: {term === "12" ? p.setup12 : p.setup6}
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
                  onClick={() => navigate(`/get-started?plan=${p.name.split(' ').pop()!.toLowerCase()}${addDomain ? '&domain=true' : ''}`)}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-medium transition self-end ${
                    p.featured
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-gradient-brand text-white hover:opacity-90"
                  }`}
                >
                  {p.cta} →
                </button>
              </div>
            );
          })}
        </div>


        <div className="mt-6 rounded-2xl bg-secondary border border-border p-6">
          <p className="text-sm font-semibold text-center mb-5">Every plan includes</p>
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            {[
              "Hosting & SSL security",
              "Monthly monitoring & maintenance",
              "Update submissions via WhatsApp",
              "Google Business Profile setup",
              "SEO foundations built in",
              "30-day satisfaction guarantee",
              "Your domain & content — always yours",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-4 text-center">
            Monthly management covers hosting, maintenance, updates and support. It does not cover full redesigns or new sections outside your plan — those are quoted separately.
            <span className="block mt-1 font-medium text-foreground">Cancel anytime after your minimum term with 30 days notice. Your domain and content are always yours.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
