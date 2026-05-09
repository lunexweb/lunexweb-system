import { ShoppingCart, CreditCard, Search, Wrench } from "lucide-react";
import servicesImg from "@/assets/andrespradagarcia-online-6817350_1920.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "Catalog Store",
    desc: "A clean, mobile-first store where customers add to cart and checkout — you get the order on WhatsApp and they receive a PDF with your banking details.",
    points: ["Add to cart & checkout flow", "Order via WhatsApp + PDF", "Up to 30 products"],
  },
  {
    icon: CreditCard,
    title: "Full Ecommerce Store",
    desc: "A complete online store with a payment gateway, admin dashboard, inventory management and order tracking — built for serious SA brands.",
    points: ["PayFast / Ozow / Paystack", "Admin dashboard", "Order & inventory management"],
  },
  {
    icon: Search,
    title: "SEO & Ad-Ready Setup",
    desc: "Every store we build is optimised for Google and designed to run Facebook, Instagram and Google ads from day one.",
    points: ["Google Business setup", "SEO foundations", "Built for paid ads"],
  },
  {
    icon: Wrench,
    title: "Hosting & Technical Support",
    desc: "We keep your store online, fast and secure every month. You get your own dashboard to manage products, stock and orders — we handle everything under the hood.",
    points: ["Hosting, uptime & security", "Technical support", "You control your dashboard"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">What we do</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Online Stores Built & Managed For SA Brands
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you're just launching or ready to scale, we build the right store for your stage — and manage it every month so it keeps selling.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <img
              src={servicesImg}
              alt="Shopping cart on keyboard — ecommerce services"
              className="w-72 h-48 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-card p-6 border border-border hover:border-accent/40 hover:shadow-elegant transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
