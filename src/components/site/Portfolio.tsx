const projects = [
  {
    title: "Snalo Delivery",
    tag: "Delivery & Logistics",
    outcome: "Customers book and enquire directly — no more back-and-forth on WhatsApp",
    url: "https://snalo-delivery.vercel.app/",
    image: "/portfolio/snalo.png",
  },
  {
    title: "Jila Services",
    tag: "Accounting",
    outcome: "Professional credibility online that wins clients before the first call",
    url: "https://www.jilaservices.co.za/",
    image: "/portfolio/jila.png",
  },
  {
    title: "Linda Jacobs Properties",
    tag: "Real Estate",
    outcome: "Property listings visible on Google — buyers enquire directly from the page",
    url: "https://linda-jacobs.vercel.app/",
    image: "/portfolio/linda.png",
  },
  {
    title: "Amonz Group",
    tag: "Tradespeople",
    outcome: "Quote requests come in from search — no agency, no middleman",
    url: "https://amonz-group-2.vercel.app/",
    image: "/portfolio/amonz.png",
  },
  {
    title: "Dominant Multi Projects",
    tag: "Security Services",
    outcome: "Established online presence that competes with firms 10× their size",
    url: "https://dominantmultiprojects.com/",
    image: "/portfolio/dominant.png",
  },
  {
    title: "Unique Medical & Wellness",
    tag: "Healthcare",
    outcome: "Patients find services, read about the practice and book — all in one place",
    url: "https://uniquemedicalandwellness.com/",
    image: "/portfolio/unique.png",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Live presences</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Real SA Businesses Running on LunexWeb
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Every presence below is live, hosted and actively managed on our platform. Click any to see it in action.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-border bg-card shadow-elegant hover:shadow-xl hover:border-accent/40 transition-all block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider bg-black/60 text-white/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 border-t border-border">
                <h3 className="font-semibold text-sm">{p.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{p.outcome}</p>
                <p className="mt-3 text-xs text-accent font-semibold group-hover:underline">
                  View live presence →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
