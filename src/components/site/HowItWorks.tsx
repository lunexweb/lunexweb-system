import { LayoutDashboard, MessageCircle, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: LayoutDashboard,
    title: "Choose your plan",
    description: "Pick a presence plan that fits your business. Not sure which? We'll recommend the right one.",
  },
  {
    icon: MessageCircle,
    title: "Submit your business details",
    description: "Fill in your business info, services, photos and logo. No technical skills needed — your plan handles the rest.",
  },
  {
    icon: Rocket,
    title: "We activate & launch",
    description: "Your presence goes live within 24–48 hours. Monthly management only starts once you're live — not while you wait.",
  },
  {
    icon: TrendingUp,
    title: "Your presence compounds",
    description: "Every month we update, monitor and optimise. Your Google ranking builds. Customers find you more. The longer you stay, the stronger your presence gets.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            How It Works — and How It Keeps Working
          </h2>
          <p className="mt-4 text-muted-foreground">
            No tech skills. No stress. We handle everything.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
