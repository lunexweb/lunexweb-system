import { useState } from "react";
import { ShoppingBag, Check, MessageCircle, ArrowRight, Package, Globe, HeadphonesIcon, ShieldCheck, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { openChat } from "@/lib/site";

const highlights = [
  { icon: ShoppingBag, text: "Mobile-friendly online store" },
  { icon: Package, text: "Product catalog & categories" },
  { icon: MessageCircle, text: "WhatsApp ordering integration" },
  { icon: Globe, text: "SEO-ready + Google Business setup" },
  { icon: ShieldCheck, text: "Hosting, security & maintenance" },
  { icon: HeadphonesIcon, text: "Monthly support included" },
];

export function OnlineStoreSection() {
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
              Sell Products Online —{" "}
              <span className="text-brand-glow">Without the Technical Headache</span>
            </h2>

            {/* Story */}
            <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-5 space-y-3 text-sm leading-relaxed text-primary-foreground/80">
              <p className="font-semibold text-white">Imagine you already show products on WhatsApp.</p>
              <p>
                People can browse. But when they want to order, they still message you. You take the order manually, work out the total, type your banking details, wait for proof of payment, confirm — then pack. <span className="text-white/60">Every. Single. Order.</span>
              </p>
              <p>
                <span className="font-semibold text-white">With your LunexWeb store:</span> they browse, place their order, and automatically receive a professional PDF invoice — your banking details, itemised order, total. All on one page. You just confirm payment and pack.
              </p>
              <p className="pt-1 text-white/60 text-xs">
                A custom-built store like this costs R15,000–R30,000 upfront. Ours starts at R899/month — fully built and managed for you.
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
                    <span className="text-5xl font-bold tracking-tight">{term === "12" ? "R899" : "R1,099"}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {term === "12" ? "Yearly · best value" : "6-month plan"}
                  </p>
                </div>
                {term === "12" && (
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-600 px-2.5 py-1 text-xs font-semibold">
                    <Tag className="h-3 w-3" /> Save R2,800
                  </span>
                )}
              </div>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Once-off setup fee: {term === "12" ? "R899" : "R1,299"}
              </span>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Professional store design & build",
                  "WhatsApp ordering + enquiry forms",
                  "Product catalog & category pages",
                  "PDF invoice with banking details & order summary",
                  "Hosting, SSL & security",
                  "SEO-ready & Google Business setup",
                  "Monthly maintenance & support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-foreground/80">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openChat}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
              >
                <MessageCircle className="h-5 w-5" /> Chat to Get a Quote
              </button>

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
