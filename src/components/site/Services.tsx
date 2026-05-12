import { Zap, TrendingUp, BarChart3, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Zap,
    label: "R299/month",
    title: "Starter Website",
    desc: "Get your business online with a clean 1-page website. Customers find you, see what you do, and contact you instantly.",
    points: ["1-page professional site", "Mobile-friendly design", "WhatsApp button", "Basic SEO & Google Search Console"],
  },
  {
    icon: TrendingUp,
    label: "R499/month",
    title: "Business Website",
    desc: "A full multi-page website that builds trust and drives more enquiries — the choice for most growing SA businesses.",
    points: ["Up to 5 pages (extra on request)", "Better SEO structure", "Enquiry forms", "Priority support"],
    highlighted: true,
  },
  {
    icon: BarChart3,
    label: "R699/month",
    title: "Growth Website",
    desc: "A complete website built for long-term visibility — more pages, a blog, and advanced SEO to grow your presence month by month.",
    points: ["Up to 5 pages (extra on request)", "Blog / news section", "Advanced SEO setup", "Content updates support"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">What we offer</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            A Managed Website for Every Stage of Your Business
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
            <p className="mt-1 text-sm text-muted-foreground">Sell products online with a fully managed catalog store. WhatsApp ordering included. From R899/month.</p>
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
