import { Check, TrendingUp, Clock, Zap } from "lucide-react";

const growthFactors = [
  "A professional website",
  "Google Business Profile",
  "Social media activity",
  "Customer reviews",
  "Consistent advertising",
  "Clear offers and pricing",
];

const immediately = [
  "Your business looks professional and credible",
  "Customers have one central place to learn about you",
  "Your social media and ads look more trustworthy",
  "You stop answering the same questions over and over",
];

const overTime = [
  "Your Google visibility strengthens",
  "Your business becomes easier to discover online",
  "Returning customers have a place to refer others to",
  "Your online presence compounds with every month active",
];

export function FoundationSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Setting expectations</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            What Your Online Presence Actually Does
          </h2>
          <p className="mt-4 text-muted-foreground">
            Social media helps people <span className="text-foreground font-medium">discover</span> your business.
            Your website helps them <span className="text-foreground font-medium">trust</span> it.
            Those are two very different things.
          </p>
        </div>

        {/* Role + Growth two-col */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">

          {/* What a website gives */}
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">What your online presence gives customers</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                "One professional place to see your services",
                "Clear pricing and contact options",
                "A way to find you on Google Search",
                "Social proof: reviews and portfolio",
                "Confidence that your business is real and established",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What helps growth */}
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">What helps businesses grow online</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A website is the foundation — growth comes from consistency across all channels.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {growthFactors.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground border-t border-border pt-4">
              We help you build the professional foundation. Growth is built on top of that, consistently over time.
            </p>
          </div>
        </div>

        {/* What to expect timeline */}
        <div className="rounded-2xl bg-secondary border border-border overflow-hidden mb-5">
          <div className="px-8 pt-8 pb-5 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">What to expect after you go live</h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-8">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Immediately</p>
              <ul className="space-y-2.5">
                {immediately.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Over time</p>
              <ul className="space-y-2.5">
                {overTime.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Honest positioning line */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-7 text-center">
          <p className="text-lg font-semibold leading-snug max-w-2xl mx-auto">
            A website won't magically grow your business overnight —
            but it gives your business a professional online foundation{" "}
            <span className="text-brand-glow">customers can trust.</span>
          </p>
          <p className="mt-3 text-white/50 text-sm">
            Websites support business growth. They don't replace marketing.
          </p>
        </div>

      </div>
    </section>
  );
}
