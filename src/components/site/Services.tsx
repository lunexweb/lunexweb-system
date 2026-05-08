import { Globe, MapPin, Share2, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Professional business websites built to run ads and convert visitors into paying customers — on Google, Facebook, and Instagram.",
    points: ["Built to run ads", "Mobile responsive", "Conversion focused"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "We help your business appear on Google Search and Maps so nearby customers can easily find and contact you.",
    points: ["Maps setup", "Local visibility", "Review strategy"],
  },
  {
    icon: Share2,
    title: "Social Media & Digital Marketing",
    desc: "Professional social media pages that make your business look active, trusted, and ready for customers.",
    points: ["Social media setup", "Content creation", "Brand consistency"],
  },
  {
    icon: Wrench,
    title: "Monthly Website Management",
    desc: "We keep your website updated, running properly, and looking professional every month.",
    points: ["Updates & edits", "Hosting included", "Technical support"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">What we do</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Helping Your Business Look Professional Online
          </h2>
          <p className="mt-4 text-muted-foreground">
            Your customers search online before they contact you. We help your business look trustworthy, professional, and easy to reach.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-card p-6 border border-border hover:border-accent/40 hover:shadow-elegant transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
