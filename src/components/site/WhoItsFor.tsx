import { Check } from "lucide-react";

const forList = [
  "Small businesses",
  "Startups & new businesses",
  "Service providers",
  "Local shops & retailers",
  "Freelancers & sole traders",
  "Growing SMEs",
];

export function WhoItsFor() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Who this is for</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Built for South African Businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're just starting out or growing fast, we manage your online presence so you can focus on running your business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {forList.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-4">
              <div className="h-7 w-7 rounded-full bg-accent/10 text-accent grid place-items-center shrink-0">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
