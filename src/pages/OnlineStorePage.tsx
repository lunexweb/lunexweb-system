import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ShoppingBag, Package, MessageCircle, ShieldCheck, TrendingUp, Globe,
  HeadphonesIcon, Check, ArrowRight, Shirt, Sparkles, Home, Utensils,
  Users, Wrench, MapPin, Tag,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { openChat } from "@/lib/site";

const perfectFor = [
  { icon: Shirt, label: "Clothing brands" },
  { icon: Sparkles, label: "Beauty & skincare" },
  { icon: Home, label: "Furniture stores" },
  { icon: Utensils, label: "Food & catering" },
  { icon: ShoppingBag, label: "Local shops" },
  { icon: MessageCircle, label: "WhatsApp sellers" },
];

const included = [
  { icon: ShoppingBag, text: "Mobile-friendly online store" },
  { icon: Package, text: "Product catalog & product pages" },
  { icon: Package, text: "Product categories" },
  { icon: MessageCircle, text: "WhatsApp ordering integration" },
  { icon: MessageCircle, text: '"Request Quote" or enquiry option' },
  { icon: Package, text: "PDF invoice with banking details & order" },
  { icon: ShieldCheck, text: "Hosting & website security" },
  { icon: Globe, text: "SEO-ready setup" },
  { icon: MapPin, text: "Google Business profile setup" },
  { icon: HeadphonesIcon, text: "Monthly maintenance & support" },
];

const youManage = [
  "Products & pricing",
  "Inventory / stock",
  "Orders & delivery",
  "Customer communication",
];

const weManage = [
  "Website setup & design",
  "Layout & branding",
  "Hosting & maintenance",
  "Technical support",
  "Website updates & security",
];

const upgrades = [
  "Payment gateways",
  "Automated checkout",
  "Inventory systems",
  "Order tracking",
  "Full eCommerce functionality",
];

const pricingIncludes = [
  "Professional online store design & build",
  "WhatsApp ordering + enquiry system",
  "PDF invoice with banking details & order summary",
  "Product catalog setup",
  "Hosting, security & SSL",
  "Monthly management & support",
];

export function OnlineStorePage() {
  const [term, setTerm] = useState<"6" | "12">("12");

  return (
    <>
      <Helmet>
        <title>Managed Online Store for SA Businesses | LunexWeb — From R899/Month</title>
        <meta
          name="description"
          content="Get a professional online store built and managed for you. WhatsApp ordering, product catalog, SEO setup. No technical setup needed. From R899/month. South Africa."
        />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* Hero */}
        <section className="bg-gradient-hero text-white pt-28 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3 py-1 text-xs font-semibold text-whatsapp backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-whatsapp animate-pulse" />
              Managed Online Store · South Africa · From R899/Month
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
              Sell Online Without the{" "}
              <span className="text-gradient-brand">Technical Headache</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              A professional online store designed, built, hosted, and maintained for you. Your customers browse and order — you handle the products and delivery. We handle everything else.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                Get Your Store <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold hover:bg-white/10 transition"
              >
                See Pricing
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-whatsapp" /> No tech skills needed</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-whatsapp" /> Fast build & launch</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-whatsapp" /> Fully managed monthly</span>
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Perfect for</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                Built for SA Businesses That Sell Products
              </h2>
              <p className="mt-3 text-muted-foreground text-sm">
                If you're currently selling through WhatsApp, social media, or in person — a managed online store gives you a professional home base for your products.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {perfectFor.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-card border border-border p-5 hover:shadow-elegant hover:border-accent/40 transition">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">What's included</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                Everything Your Store Needs to Operate
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every online store we build is fully managed and ready for real customers from day one.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item.text} className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-4">
                  <Check className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works / Responsibility Split */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">How it works</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                You Run the Business. We Run the Website.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
                Customers browse your products and place orders through WhatsApp or enquiry forms. You handle pricing, stock, delivery and communication — we handle everything technical.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">You Manage</h3>
                </div>
                <ul className="space-y-3">
                  {youManage.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-primary text-primary-foreground p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-white/15 text-white grid place-items-center">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">We Manage</h3>
                </div>
                <ul className="space-y-3">
                  {weManage.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                      <Check className="h-4 w-4 text-brand-glow shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Upgrades */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl bg-card border border-border p-10">
              <div className="sm:flex items-start gap-8">
                <div className="shrink-0 mb-6 sm:mb-0">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent grid place-items-center">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider">Optional future upgrades</p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight">
                    Your Store Grows With Your Business
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm">
                    Start simple and lean. As your business grows, we can upgrade your store to a full eCommerce platform — no rebuilding required.
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    {upgrades.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-secondary">
          <div className="mx-auto max-w-lg px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">From R899/Month</h2>
              <p className="mt-4 text-muted-foreground text-sm">
                Fully managed. No technical setup needed on your end. Toggle below to compare plans.
              </p>
            </div>

            {/* Toggle */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex rounded-full border border-border bg-card p-1 gap-1">
                <button
                  onClick={() => setTerm("6")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    term === "6" ? "bg-gradient-brand text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  6-month
                </button>
                <button
                  onClick={() => setTerm("12")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition flex items-center gap-2 ${
                    term === "12" ? "bg-gradient-brand text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly <span className={`text-xs rounded-full px-2 py-0.5 font-semibold ${term === "12" ? "bg-white/20 text-white" : "bg-accent/10 text-accent"}`}>Save more</span>
                </button>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-primary text-primary-foreground p-8">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold">{term === "12" ? "R899" : "R1,099"}</span>
                <span className="text-primary-foreground/70">/month</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 text-white px-2.5 py-1 text-xs font-semibold mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Once-off setup fee: {term === "12" ? "R899" : "R1,299"}
              </span>
              {term === "12" && (
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 text-emerald-300 px-2.5 py-1 text-xs font-semibold">
                  <Tag className="h-3 w-3" /> Save R2,800 vs 6-month
                </span>
              )}
              {term === "6" && <div className="mb-4" />}
              <h3 className="font-semibold text-lg">What's in the price</h3>
              <ul className="mt-5 space-y-3">
                {pricingIncludes.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-primary-foreground/80">
                    <Check className="h-4 w-4 text-brand-glow shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={openChat}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-primary px-5 py-3.5 font-semibold hover:bg-white/90 transition"
              >
                <MessageCircle className="h-5 w-5" /> Chat to Get a Quote
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Once-off setup fee applies. Monthly management from R899/month. Your domain and store content are always yours.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
