import { Rocket, MapPin, MessageCircle, ArrowUpRight, HeadphonesIcon } from "lucide-react";
import shoppingImg from "@/assets/simonrtr120-shopping-10235472_1920.jpg";

const items = [
  { icon: Rocket, title: "We move fast", desc: "Your online presence is live quickly after we receive your details. No drawn-out agency timelines." },
  { icon: MapPin, title: "Built for South Africa", desc: "A local team that understands SA customers, SA payment needs and what it takes to grow a business here." },
  { icon: MessageCircle, title: "WhatsApp-first support", desc: "Direct line for anything — questions, updates, changes. You always have someone to message." },
  { icon: ArrowUpRight, title: "Upgrade anytime", desc: "Start on Starter and move to Business or Growth when you're ready. No rebuilding. No extra setup fees." },
  { icon: HeadphonesIcon, title: "No technical stress", desc: "Hosting, security, updates — all handled. You never have to think about it. We do that." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why LunexWeb</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Why SA Businesses Choose LunexWeb
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every South African business deserves a professional online presence — without paying agency prices or figuring it all out yourself. We handle everything so you can focus on what you do best.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/70">
              Built on a growing network of web professionals across South Africa.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <img
              src={shoppingImg}
              alt="South African business owner online"
              loading="lazy"
              decoding="async"
              className="w-72 h-80 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
        <div className="mt-14 max-w-5xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {items.slice(0, 3).map((it) => (
              <div key={it.title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-elegant transition">
                <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {items.slice(3).map((it) => (
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
      </div>
    </section>
  );
}
