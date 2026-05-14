import { ShieldCheck, Search, Building2, Smartphone, TrendingUp, HeadphonesIcon } from "lucide-react";
import marketingImg from "@/assets/madartzgraphics-internet-marketing-1802618_1920.png";

const benefits = [
  {
    icon: Search,
    title: "Get found on Google",
    desc: "When someone types \"plumber Johannesburg\" or \"hair salon near me\" — your business appears. Google is where buying decisions start. Be there.",
  },
  {
    icon: Building2,
    title: "Look like a serious business",
    desc: "A strong online presence builds trust instantly. Customers choose businesses that look credible and established — not just a social media page.",
  },
  {
    icon: ShieldCheck,
    title: "No upfront agency fees",
    desc: "Agencies charge R10,000–R50,000 upfront. With us, you pay one flat monthly fee — no large invoices before you've earned a cent.",
  },
  {
    icon: Smartphone,
    title: "Looks great on every phone",
    desc: "Most of your customers will see your business on a phone first. Every presence we manage looks sharp, loads fast and works perfectly on mobile.",
  },
  {
    icon: TrendingUp,
    title: "Run ads that actually convert",
    desc: "Facebook, Instagram and Google ads perform better when they send traffic to a dedicated landing page — not just a WhatsApp number.",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed, not abandoned",
    desc: "Most businesses get a site built and then left alone. We handle hosting, updates and support every month — always on, always maintained.",
  },
];

export function WhyRent() {
  return (
    <section id="why-managed" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why Managed Presence</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              97% of customers search online before they buy.
              <span className="text-accent"> Be the result they find.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Google is the first place customers go when they need a service. If your business isn't showing up — someone else is getting that customer. Every day you're invisible is a day of lost revenue.
            </p>
            <div className="mt-6 rounded-2xl bg-secondary border border-border p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Being found is only half the battle.</span> You also need to look credible when they land on your page. We handle both — search visibility and a professional presence that turns visitors into enquiries.
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
