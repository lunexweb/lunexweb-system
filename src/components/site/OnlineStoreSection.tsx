import { useState } from "react";
import { ShoppingBag, Check, MessageCircle, ArrowRight, Package, Globe, HeadphonesIcon, ShieldCheck, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: ShoppingBag, text: "Makes your products easy to find, browse, and understand" },
  { icon: Package, text: "Turns product interest into real customer enquiries and orders" },
  { icon: ShieldCheck, text: "Gives your business a professional online storefront customers trust" },
  { icon: MessageCircle, text: "Reduces time spent answering repetitive product questions" },
  { icon: Globe, text: "Helps customers decide faster with a clean product experience" },
  { icon: HeadphonesIcon, text: "Works 24/7 — customers can explore your products anytime" },
];

export function OnlineStoreSection({ addDomain }: { addDomain: boolean }) {
  const [term, setTerm] = useState<"6" | "12">("12");

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
              <ShoppingBag className="h-3.5 w-3.5" /> Managed Online Store
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Your products deserve more than{" "}
              <span className="text-brand-glow">Instagram posts and WhatsApp lists.</span>
            </h2>
            <p className="mt-3 text-primary-foreground/70 text-base leading-relaxed">
              Turn your products into a professional online buying experience — one that makes customers trust your business and decide faster.
            </p>

            {/* Story */}
            <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-5 space-y-3 text-sm leading-relaxed text-primary-foreground/80">
              <p className="font-semibold text-white">Right now, every sale starts with a manual conversation.</p>
              <p>
                You share products on WhatsApp. Customers ask for prices one by one. You type banking details, wait for proof of payment, confirm manually — then pack. <span className="text-white/60">Every. Single. Order.</span>
              </p>
              <p>
                <span className="font-semibold text-white">With your LunexWeb store:</span> customers browse everything, see prices instantly, and enquire or order directly — without needing to message you first. Your business looks established and ready to sell.
              </p>
              <p className="pt-1 text-white/60 text-xs">
                A custom-built store like this costs R15,000–R30,000 upfront. Ours is fully built and managed for you — no upfront investment that size.
              </p>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center shrink-0">
                    <item.icon className="h-4 w-4 text-brand-glow" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <Link
              to="/online-store"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition"
            >
              See everything that's included <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: pricing card */}
          <div className="mt-12 lg:mt-0">
            <div className="rounded-2xl bg-white text-foreground p-8 shadow-elegant">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">Online Store Pricing</p>

              {/* Toggle */}
              <div className="mt-4 inline-flex rounded-full border border-border bg-secondary p-1 gap-1">
                <button
                  onClick={() => setTerm("6")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    term === "6" ? "bg-gradient-brand text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  6-month
                </button>
                <button
                  onClick={() => setTerm("12")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition flex items-center gap-1.5 ${
                    term === "12" ? "bg-gradient-brand text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly <span className={`text-xs rounded-full px-1.5 py-0.5 font-semibold ${term === "12" ? "bg-white/20 text-white" : "bg-accent/10 text-accent"}`}>Save more</span>
                </button>
              </div>

              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tight">{term === "12" ? (addDomain ? "R738" : "R699") : (addDomain ? "R1,038" : "R999")}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {term === "12" ? "Yearly · best value" : "6-month plan"}
                  </p>
                  {addDomain && (
                    <p className="mt-0.5 text-xs text-accent font-medium flex items-center gap-1">
                      <Globe className="h-3 w-3" /> incl. domain (+R39)
                    </p>
                  )}
                </div>
                {term === "12" && (
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-600 px-2.5 py-1 text-xs font-semibold">
                    <Tag className="h-3 w-3" /> Save R3,600/yr
                  </span>
                )}
              </div>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Once-off setup fee: Custom quote
              </span>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Makes your products easy to find, browse, and understand",
                  "Turns product interest into real customer enquiries and orders",
                  "Gives your business a professional storefront customers trust",
                  "Reduces time spent answering repetitive product questions",
                  "Helps customers decide faster with a clean product experience",
                  "Makes your business look established and ready to sell online",
                  "Fully managed — no setup stress, no technical work",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-foreground/80">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/get-started?plan=store"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
              >
                Get Your Store →
              </Link>

              <Link
                to="/online-store"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
              >
                See full details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
