import { Package, CreditCard, Globe, Settings } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Choose your package",
    description: "Pick the monthly plan that fits your business. Starter, Business or Pro.",
  },
  {
    icon: CreditCard,
    title: "Pay R499 setup — 1st month FREE",
    description: "A small one-time fee to get your professional website built and live. Your first month of management is on us.",
  },
  {
    icon: Globe,
    title: "Buy your domain (±R150/year)",
    description: "We help you secure your own domain (yourbusiness.co.za) — you own it forever.",
  },
  {
    icon: Settings,
    title: "We set up & manage everything monthly",
    description: "Hosting, security, updates, content changes, support — all handled. You focus on customers.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Get Online in 4 Simple Steps
          </h2>
          <p className="mt-4 text-muted-foreground">
            No technical headaches. No long contracts. Just a professional website your business can afford.
          </p>
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
