import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";
import saleImg from "@/assets/coffeebeanworks-sale-1956066_1920.png";

const plans = [
  {
    name: "Catalog Store",
    price6: "R899",
    price12: "R799",
    period: "/month",
    badge: "",
    desc: "Perfect for brands just starting out. Customers add to cart and place their order — you get the order via WhatsApp and they receive a PDF with your banking details to pay.",
    features: [
      "Product catalog (up to 30 products)",
      "Add to cart & checkout flow",
      "Order sent to you via WhatsApp",
      "Auto-generated PDF with banking details sent to customer",
      "Mobile-first design",
      "Hosting & security included",
      "Your own dashboard — manage products & stock yourself",
      "SEO basics included",
    ],
    cta: "Get Catalog Store",
    featured: false,
  },
  {
    name: "Full Store",
    price6: "R1,499",
    price12: "R1,299",
    period: "/month",
    badge: "Most Popular",
    desc: "A complete online store with payment gateway, admin dashboard and order management — everything your brand needs to sell seriously online.",
    features: [
      "Unlimited products",
      "Payment gateway (PayFast / Ozow / Paystack)",
      "Admin dashboard & order management",
      "Inventory tracking",
      "Discount codes & promotions",
      "Mobile-first design",
      "Hosting, security & backups",
      "SEO & Google Business setup",
      "Your own admin dashboard — full control over products, stock & orders",
      "Technical support & uptime monitoring",
    ],
    cta: "Get Full Store",
    featured: true,
  },
  {
    name: "Custom",
    price6: "Custom",
    price12: "Custom",
    period: " quote",
    badge: "",
    desc: "For brands with complex needs — large catalogs, multi-vendor, custom integrations, booking systems or unique functionality.",
    features: [
      "Custom design & functionality",
      "Multi-vendor or marketplace",
      "Advanced integrations & APIs",
      "Custom dashboards & portals",
      "Priority support",
    ],
    cta: "Request Quote",
    featured: false,
  },
];

export function Pricing() {
  const [term, setTerm] = useState<"6" | "12">("6");

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Your Online Store From R899/month
            </h2>
            <p className="mt-4 text-muted-foreground">
              No setup fees. <span className="font-semibold text-foreground">6-month management plan</span> — we build and host your store, you get the dashboard to run it yourself. Save more on a 12-month plan.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <img
              src={saleImg}
              alt="Sale price tags"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Plan term toggle */}
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
              12-month plan
              <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${
                term === "12" ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
              }`}>
                Save 2 months
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
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
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-0.5">
                  <span className="text-4xl font-bold tracking-tight">{price}</span>
                  <span className={`ml-0.5 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {p.period}
                  </span>
                </div>
                <p className={`mt-1 text-xs font-medium ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {term === "6" ? "6-month management plan" : "12-month management plan · best value"}
                </p>
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
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All plans are on a minimum-term management agreement. After your term, your plan continues monthly. Your domain and store content are always yours.
        </p>
      </div>
    </section>
  );
}
