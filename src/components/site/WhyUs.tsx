import { Rocket, MapPin, CreditCard, Megaphone, Wallet, MessageCircle } from "lucide-react";
import designerImg from "@/assets/cyberco-web-designer-10160858_1920.png";

const items = [
  { icon: Rocket, title: "Live within 7–14 days", desc: "We move fast. Most stores are built and launched within two weeks of you contacting us." },
  { icon: MapPin, title: "Built for South Africa", desc: "PayFast, Ozow, Paystack & Peach Payments — we integrate SA payment gateways that your customers already trust." },
  { icon: CreditCard, title: "No setup fees ever", desc: "Just a flat monthly rental. We build, host and manage your store with zero upfront costs." },
  { icon: Megaphone, title: "Ad-ready from day one", desc: "Every store is set up for Facebook, Instagram and Google ads so your ad spend goes further." },
  { icon: Wallet, title: "Scales with your brand", desc: "Start with a Catalog Store and upgrade to a Full Store when you're ready — no rebuilding needed." },
  { icon: MessageCircle, title: "WhatsApp-first support", desc: "Direct line for technical issues, questions and help. You run the store — we make sure everything keeps working." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Why LunexWeb</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Why SA Brands Choose LunexWeb
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe South African brands deserve a fighting chance. WhatsApp got you started — but it can't be found on Google. Your dream store shouldn't cost you your entire budget before you've sold a single product.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <img
              src={designerImg}
              alt="Web designer building an online store"
              className="w-72 h-80 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-elegant transition">
              <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
