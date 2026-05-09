import { Package, MessageCircle, Globe, Settings } from "lucide-react";
import shopperImg from "@/assets/tanrica-sale-9839498_1920.png";

const steps = [
  {
    icon: Package,
    title: "Pick your store type",
    description: "Choose the Catalog Store (WhatsApp ordering) or Full Store (payment gateway + dashboard) — whichever fits where your brand is right now.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp us your details",
    description: "Send us your brand name, products, logo and any content you have. We handle the rest — no technical skills needed from you.",
  },
  {
    icon: Globe,
    title: "We build & launch your store",
    description: "Your store goes live within 7–14 days on your own domain. We set up SEO, Google Business and ad-ready tracking from day one.",
  },
  {
    icon: Settings,
    title: "You run it — we keep it live",
    description: "Your dashboard gives you full control over products, stock, orders and promotions. We handle hosting, security and technical support so everything keeps running smoothly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Your Store Live in 4 Simple Steps
            </h2>
            <p className="mt-4 text-muted-foreground">
              No technical headaches. No upfront fees. Just a professional online store your brand can afford — built and managed for you.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <img
              src={shopperImg}
              alt="Happy online shopper"
              className="w-52 h-52 object-contain"
            />
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-card border border-border p-6 hover:shadow-elegant transition"
            >
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-brand text-white text-sm font-bold grid place-items-center shadow-glow">
                {i + 1}
              </div>
              <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent grid place-items-center">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
