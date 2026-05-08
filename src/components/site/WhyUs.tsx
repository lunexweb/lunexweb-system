import { Rocket, MapPin, Search, Megaphone, Wallet, MessageCircle } from "lucide-react";

const items = [
  { icon: Rocket, title: "Fast turnaround", desc: "Most websites live within 7–14 days." },
  { icon: MapPin, title: "South African focused", desc: "Built for the local market and customers." },
  { icon: Search, title: "Easy To Find Online", desc: "Your business is set up to appear professionally on Google and mobile devices." },
  { icon: Megaphone, title: "Built To Run Ads", desc: "Every website we build is designed to work with Facebook, Google, and Instagram ads from day one." },
  { icon: Wallet, title: "Affordable monthly plans", desc: "From just R299/month — no big upfront fees." },
  { icon: MessageCircle, title: "WhatsApp-first support", desc: "Quick replies, no email chasing." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why LunexWeb</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Why Businesses Choose LunexWeb
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-elegant transition">
              <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
