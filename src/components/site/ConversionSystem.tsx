import { Eye, MessageCircle, BadgeCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    number: "01",
    title: "A landing page that actually converts",
    desc: "Slow, cluttered pages lose visitors before they read your offer. Every presence in the system is built clean and fast-loading — designed to move visitors from 'just browsing' to messaging you.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "WhatsApp & contact on every page",
    desc: "Every plan includes a prominent WhatsApp button, click-to-call and enquiry form placed exactly where customers look — so no interested visitor leaves without a way to reach you.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Your offer, clear within seconds",
    desc: "Confusion kills conversions. Visitors need to instantly understand what you sell, who it's for and how to start. Setup includes writing and designing your presence with that clarity built in from day one.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Fast build & launch",
    desc: "Most agencies take 4–8 weeks. Once you submit your details, your presence is built and launched — typically within 24–48 hours, so you start getting found on Google right away.",
  },
];

export function ConversionSystem() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">What makes it work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            4 Things That Make Your Online Presence Actually Bring You Customers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most SA businesses miss one or more of these. Every LunexWeb presence is built with all four from day one.
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
            <span className="font-semibold text-foreground">Most businesses overthink it.</span> A fast, clean presence, a clear offer, and a WhatsApp button customers can actually find — that's what turns visitors into enquiries. All of it is included in your plan.
          </p>
        </div>
      </div>
    </section>
  );
}
