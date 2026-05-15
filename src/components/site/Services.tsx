import { Zap, TrendingUp, BarChart3, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Zap,
    label: "R299/month",
    title: "Online Presence Starter",
    subtitle: "For businesses getting online for the first time",
    desc: "Get your business visible online. A clean, professional one-page presence — customers find you, see what you do, and reach you instantly.",
    points: ["Give customers one professional place to find you online", "Help customers find your business on Google", "Turn visitors into WhatsApp enquiries instantly", "Looks professional on any phone, any time"],
  },
  {
    icon: TrendingUp,
    label: "R499/month",
    title: "Online Presence Business",
    subtitle: "For businesses ready to look established and capture more leads",
    desc: "Everything your business needs to look professional online. Builds trust, drives enquiries — the right choice for most growing SA businesses.",
    points: ["Give customers a full, established presence to explore", "Help more customers find your business on Google", "Capture leads even when you're busy or offline", "Turn visitors into enquiries — multiple ways to reach you", "3 content updates per month"],
    highlighted: true,
  },
  {
    icon: BarChart3,
    label: "R699/month",
    title: "Business Visibility Growth",
    subtitle: "For businesses ready to attract more enquiries online",
    desc: "Built for long-term business visibility. More reach, a blog and advanced SEO to compound your presence every month.",
    points: ["Build visibility that compounds every month you stay", "Attract more enquiries with advanced Google presence", "Publish content that builds authority in your industry", "Track what's working and keep improving", "5 content updates per month + priority queue"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Subscription plans</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            A Managed Online Presence for Every Stage of Your Business
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're starting small or ready to grow online, we've got a simple plan for you.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {plans.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl p-6 border transition-all ${
                s.highlighted
                  ? "bg-primary text-primary-foreground border-transparent shadow-elegant"
                  : "bg-card border-border hover:border-accent/40 hover:shadow-elegant"
              }`}
            >
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
                s.highlighted ? "bg-white/15 text-white" : "bg-accent/10 text-accent"
              }`}>
                <s.icon className="h-3.5 w-3.5" /> {s.label}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className={`mt-1 text-xs font-medium ${s.highlighted ? "text-white/60" : "text-accent"}`}>{s.subtitle}</p>
              <p className={`mt-2 text-sm ${s.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className={`flex items-center gap-2 ${s.highlighted ? "text-primary-foreground/80" : "text-foreground/80"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${s.highlighted ? "bg-brand-glow" : "bg-accent"}`} /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Yearly prices shown. 6-month plans also available — toggle on the pricing section below or chat with us.
        </p>
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-semibold">Need an Online Store?</p>
            <p className="mt-1 text-sm text-muted-foreground">Sell products online with a fully managed store. WhatsApp ordering included. From R699/month.</p>
          </div>
          <Link
            to="/online-store"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shrink-0"
          >
            See Online Store <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
