import { ShieldCheck, Search, Building2, Smartphone, TrendingUp, HeadphonesIcon } from "lucide-react";
import marketingImg from "@/assets/madartzgraphics-internet-marketing-1802618_1920.png";

const benefits = [
  {
    icon: Search,
    title: "Get found on Google",
    desc: "When customers search for your type of business nearby, your website shows up — not just a Facebook page that Google ignores.",
  },
  {
    icon: Building2,
    title: "Look like a serious business",
    desc: "A professional website builds trust instantly. Customers choose businesses that look credible and established online.",
  },
  {
    icon: ShieldCheck,
    title: "No upfront agency fees",
    desc: "Agencies charge R10,000–R50,000 upfront. With us, you pay one flat monthly fee — no large invoices before you've earned a cent.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first by default",
    desc: "Over 80% of SA internet users browse on their phones. Every site we build is designed for mobile from the ground up.",
  },
  {
    icon: TrendingUp,
    title: "Run ads that actually convert",
    desc: "Facebook, Instagram and Google ads perform better when they send traffic to a proper website — not just a WhatsApp number.",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed, not abandoned",
    desc: "Most businesses get a website built and then left to fend for themselves. We handle hosting, updates and support every month.",
  },
];

export function WhyRent() {
  return (
    <section id="why-managed" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why Rent a Website</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Stop Losing Customers to Businesses With Better Websites
            </h2>
            <p className="mt-4 text-muted-foreground">
              Customers search Google before they buy. If your business isn't there — a competitor is. Instagram and WhatsApp won't fix that.
            </p>
            <div className="mt-6 rounded-2xl bg-secondary border border-border p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">The problem isn't that you don't have a website.</span> It's that you don't have one that's fast, visible and maintained. A managed website solves all three — without you touching a line of code.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={marketingImg}
              alt="Business owner working on a laptop"
              loading="lazy"
              decoding="async"
              className="rounded-2xl shadow-elegant w-full object-cover max-h-[420px]"
            />
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-card p-6 border border-border hover:shadow-elegant hover:border-accent/40 transition"
            >
              <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
