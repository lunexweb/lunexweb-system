import { Eye, MessageCircle, BadgeCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    number: "01",
    title: "A landing page that actually converts",
    desc: "Slow, cluttered websites lose visitors before they read your offer. We build clean, fast-loading pages designed to move visitors from 'just browsing' to messaging you.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "WhatsApp & contact on every page",
    desc: "We place a prominent WhatsApp button, click-to-call, and enquiry form exactly where customers look — so no interested visitor leaves without a way to reach you.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Your offer, clear within seconds",
    desc: "Confusion kills conversions. Visitors need to instantly understand what you sell, who it's for, and how to start. We write and design your site with that clarity built in.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Fast build & launch",
    desc: "Most agencies take 4–8 weeks. We move fast — your site is built and launched shortly after we receive your details, so you start getting found on Google right away.",
  },
];

export function ConversionSystem() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">What makes it work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            4 Things That Make a Website Actually Bring You Customers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most SA business websites fail at one or more of these. Every LunexWeb site is built with all four from day one.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group rounded-2xl bg-card border border-border p-8 hover:shadow-elegant hover:border-accent/40 transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0 group-hover:bg-accent/20 transition">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="text-5xl font-bold text-border/50 leading-none">{p.number}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-secondary border border-border p-6 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Most businesses overthink it.</span> A fast website, a clear offer, and a WhatsApp button customers can actually find — that's what turns visitors into enquiries. We handle all of it for you.
          </p>
        </div>
      </div>
    </section>
  );
}
