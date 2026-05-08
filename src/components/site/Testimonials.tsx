const testimonials = [
  {
    name: "Thandi M.",
    role: "Owner, Greenleaf Wellness",
    quote: "LunexWeb built our clinic website in under two weeks. Bookings have doubled and patients say it looks so professional.",
  },
  {
    name: "Pieter van Wyk",
    role: "Atlas Estate Agents",
    quote: "Our listings finally rank on Google. The WhatsApp button alone brings us 5–10 new enquiries a week.",
  },
  {
    name: "Sipho N.",
    role: "Sentinel Security Co.",
    quote: "Our new website looks so professional. Clients mention it immediately and it's made a huge difference to how people see our business.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted by South African businesses
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-6 border border-border shadow-elegant">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand text-white grid place-items-center font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
