const audience = [
  {
    type: "Small business owners",
    situation: "Customers ask if you have a website — and you don't have a good answer yet.",
  },
  {
    type: "Service providers",
    situation: "You explain what you do over and over on WhatsApp instead of sending one link.",
  },
  {
    type: "New & startup businesses",
    situation: "You want to launch looking credible from day one — not like you're just starting out.",
  },
  {
    type: "Local shops & retailers",
    situation: "You want nearby customers to find you on Google before they find a competitor.",
  },
  {
    type: "Freelancers & sole traders",
    situation: "You want a professional presence that works for you even when you're with a client.",
  },
  {
    type: "Growing SMEs",
    situation: "You've outgrown DIY tools and need something managed, reliable and always on.",
  },
];

export function WhoItsFor() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Who this is for</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Sound familiar?
          </h2>
          <p className="mt-4 text-muted-foreground">
            If any of these situations sound like yours, LunexWeb is built exactly for you.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audience.map((item) => (
            <div key={item.type} className="rounded-xl bg-card border border-border p-5 hover:border-accent/40 hover:shadow-elegant transition">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{item.type}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.situation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
