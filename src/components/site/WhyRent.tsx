import { ShieldCheck, Search, ShoppingBag, Smartphone, TrendingUp, Clock } from "lucide-react";
import shoppingImg from "@/assets/simonrtr120-shopping-10235472_1920.jpg";

const benefits = [
  {
    icon: ShoppingBag,
    title: "Sell beyond WhatsApp",
    desc: "A proper online store lets customers browse, choose and pay — without you having to manually handle every order.",
  },
  {
    icon: Search,
    title: "Get found on Google",
    desc: "When people search for what you sell, your store shows up — not just a Facebook page that Google ignores.",
  },
  {
    icon: ShieldCheck,
    title: "Look like a real brand",
    desc: "A professional store builds trust. Customers spend more and come back when your brand looks credible and established.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first shopping",
    desc: "Over 80% of SA shoppers buy on their phones. Every store we build is designed for mobile from the ground up.",
  },
  {
    icon: TrendingUp,
    title: "Run ads that actually work",
    desc: "Facebook, Instagram and Google ads perform better when they send traffic to a proper store — not a WhatsApp number.",
  },
  {
    icon: Clock,
    title: "Sell 24/7 without lifting a finger",
    desc: "Your store takes orders and processes payments while you sleep, travel or focus on sourcing new stock.",
  },
];

export function WhyRent() {
  return (
    <section id="why-rent" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why Your Brand Needs An Online Store</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Stop Losing Sales to Brands With Better Stores
            </h2>
            <p className="mt-4 text-muted-foreground">
              South African shoppers search online before they buy. If your brand only lives on Instagram and WhatsApp, you're losing customers to competitors with a proper store every single day.
            </p>
            <div className="mt-6 rounded-2xl bg-secondary border border-border p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">"Instagram and WhatsApp are enough."</span> They're a great start — but they don't rank on Google, they don't process payments automatically, and they don't make your brand look like a serious business. A proper online store does all three.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={shoppingImg}
              alt="Online shopping — laptop with ecommerce store and shopping cart"
              className="rounded-2xl shadow-elegant w-full object-cover max-h-[420px]"
            />
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-card p-6 border border-border hover:shadow-elegant hover:border-accent/40 transition"
            >
              <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
