export function ImagineSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-4xl px-6">

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
              The customer gets annoyed. They find someone else with a website. They book there.
            </p>
            <p className="pt-2 font-semibold text-foreground">With a LunexWeb site:</p>
            <p>
              You send one link. They see your work in 2 seconds. They see your prices, your location, your reviews.
              They book. <span className="font-semibold text-accent">You get paid.</span>
            </p>
            <p className="pt-2 text-sm text-muted-foreground">
              That one link costs you R499 once — then R299 a month. A single booking covers it.
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-2 bg-muted text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="px-6 py-3 border-r border-border">Without a managed website</div>
            <div className="px-6 py-3">With LunexWeb</div>
          </div>
          {[
            ["You send photos one by one on WhatsApp", "Customers browse your site and enquire directly"],
            ["You explain your prices every single time", "Prices are on your site — always up to date"],
            ["You look like you're just starting out", "You look like an established, trusted business"],
            ["Site breaks at 8pm — no one to call", "We manage it. We fix it. You don't even notice."],
            ["Pay R15k upfront before you earn a cent", "R499 once. Then R299/month while you grow."],
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
