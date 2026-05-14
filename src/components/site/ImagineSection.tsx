const situations = [
  {
    q: "Tired of answering the same questions every day?",
    a: "Prices. Services. Location. Hours. Send customers one professional link instead.",
  },
  {
    q: "Most customers search before they message.",
    a: "If your business doesn't appear online, they move on to the next result.",
  },
  {
    q: "Agencies charge R10k–R50k upfront.",
    a: "Use your money for stock, equipment and growth — not a large invoice before you've earned a cent.",
  },
  {
    q: "Social media helps people discover you.",
    a: "A managed online presence helps them trust you. Those are two different things.",
  },
  {
    q: "Your business is real. Does it look it?",
    a: "Customers choose businesses that look established. A professional presence says you're serious.",
  },
];

export function ImagineSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-5xl px-6">

        {/* Real behaviour callout */}
        <div className="mb-14 rounded-2xl bg-primary text-primary-foreground overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Think about real behaviour</p>
              <p className="text-lg font-semibold text-white leading-snug">
                Someone sees your business on Instagram.
              </p>
              <p className="mt-3 text-white/70 text-sm">Then they immediately ask:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "Do they have a website?",
                  "Are they real?",
                  "Where are the reviews?",
                  "What exactly do they sell?",
                  "How do I trust them?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-glow shrink-0" />
                    <span className="italic">"{q}"</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-2xl font-bold text-white leading-snug">
                That second validation step{" "}
                <span className="text-gradient-brand">is your market.</span>
              </p>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Instagram gets you seen. A professional online presence gets you <span className="text-white font-medium">chosen</span>. Without it, customers who found you on social media go verify you elsewhere — and find your competitor instead.
              </p>
            </div>
          </div>
        </div>

        {/* Situations */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Sound like you?</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">This is what we hear every day.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {situations.map((s) => (
            <div key={s.q} className="rounded-2xl bg-card border border-border p-6 hover:border-accent/40 hover:shadow-elegant transition">
              <p className="font-semibold text-foreground text-sm leading-snug">{s.q}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.a}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="rounded-2xl bg-card border border-border p-8 sm:p-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Real situation. See yourself in it.</p>
          <div className="space-y-3 text-foreground/80 leading-relaxed">
            <p className="text-lg font-semibold text-foreground">Imagine you own a hair salon.</p>
            <p>
              A customer asks: <span className="italic text-foreground">"Can I see your work?"</span>
            </p>
            <p>
              You send 14 WhatsApp photos. They take 3 minutes to load.
              The customer gets annoyed. They find someone with a proper page online. They book there.
            </p>
            <p className="pt-2 font-semibold text-foreground">With a LunexWeb site:</p>
            <p>
              You send one link. They see your work in 2 seconds. They see your prices, your location, your reviews.
              They book. <span className="font-semibold text-accent">You get paid.</span>
            </p>
            <p className="pt-2 text-sm text-muted-foreground">
              That one link costs you R499 once — then R499 a month. A single booking covers it.
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-2 bg-muted text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="px-6 py-3 border-r border-border">Without a managed presence</div>
            <div className="px-6 py-3">With LunexWeb</div>
          </div>
          {[
            ["You send photos one by one on WhatsApp", "Customers browse your site and enquire directly"],
            ["You explain your prices every single time", "Prices are on your site — always up to date"],
            ["You look like you're just starting out", "You look like an established, trusted business"],
            ["Site breaks at 8pm — no one to call", "We manage it. We fix it. You don't even notice."],
            ["Pay R15k upfront before you earn a cent", "R499 once. Then from R499/month while you grow."],
          ].map(([before, after], i) => (
            <div
              key={i}
              className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
            >
              <div className="px-6 py-4 border-r border-border text-muted-foreground flex items-start gap-2">
                <span className="mt-0.5 text-red-400 shrink-0">✕</span> {before}
              </div>
              <div className="px-6 py-4 text-foreground flex items-start gap-2">
                <span className="mt-0.5 text-accent shrink-0">✓</span> {after}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
