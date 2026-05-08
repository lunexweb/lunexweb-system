import { ShieldCheck, Search, Phone, Smartphone, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Look trustworthy",
    desc: "A professional website tells customers you're a real, established business — not just a Facebook page.",
  },
  {
    icon: Search,
    title: "Appear on Google",
    desc: "When customers search for your service in your area, your business shows up — instead of your competitors.",
  },
  {
    icon: Phone,
    title: "Get more enquiries",
    desc: "WhatsApp buttons, contact forms and click-to-call buttons turn visitors into real leads, every day.",
  },
  {
    icon: Smartphone,
    title: "Easier for customers to contact you",
    desc: "Your services, prices, hours and location — all in one place. No more 'inbox me for prices'.",
  },
  {
    icon: TrendingUp,
    title: "Compete with bigger businesses",
    desc: "Look as professional as a major brand at small-business prices. Price stops being the only way customers compare you.",
  },
  {
    icon: Clock,
    title: "Open online 24/7",
    desc: "While you sleep, your website is showing your services, taking enquiries and building trust with future customers.",
  },
];

export function WhyRent() {
  return (
    <section id="why-rent" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why Your Business Needs A Website</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            A Professional Website Helps Your Business Get More Customers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most South African customers search Google before contacting a business. If they can't find you online — or your business looks outdated — they often move to a competitor who looks more professional.
          </p>
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

        <div className="mt-14 rounded-2xl bg-secondary border border-border p-8 max-w-3xl mx-auto text-center">
          <p className="text-base text-muted-foreground">
            <span className="font-semibold text-foreground">"Facebook and WhatsApp are enough."</span> They're a great start — but they don't show up on Google, they don't show your services clearly, and they don't make your business look established. A professional website does all three.
          </p>
        </div>
      </div>
    </section>
  );
}
