import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, ArrowLeft, ChevronRight, MessageCircle, CheckCircle2, Shield, Clock, Globe } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

function withDomain(price: string): string {
  const num = parseInt(price.replace(/[R,]/g, ""), 10);
  const result = num + 39;
  return result >= 1000
    ? `R${Math.floor(result / 1000)},${String(result % 1000).padStart(3, "0")}`
    : `R${result}`;
}

const PLANS = [
  { id: "starter",  name: "Online Presence Starter",    price12: "R499",   price6: "R699",   setup12: "R499",  setup6: "R699",   desc: "One-page presence — get found online fast." },
  { id: "business", name: "Online Presence Business",   price12: "R799",   price6: "R1,099", setup12: "R799",  setup6: "R999",   desc: "Full multi-page presence — most popular.", popular: true },
  { id: "growth",   name: "Business Visibility Growth", price12: "R1,199", price6: "R1,699", setup12: "R999",  setup6: "R1,299", desc: "Multi-section + blog — long-term visibility." },
  { id: "store",    name: "Online Store",               price12: "R1,999", price6: "R1,999", setup12: "Custom", setup6: "Custom", desc: "Full managed online store — WhatsApp ordering & product catalog." },
];

const INDUSTRIES = [
  "Accounting & Finance", "Beauty & Hair", "Cleaning Services", "Construction & Trades",
  "Delivery & Logistics", "Education & Tutoring", "Events & Entertainment", "Food & Catering",
  "Healthcare & Wellness", "Legal Services", "Marketing & Media", "Motor & Auto",
  "Property & Real Estate", "Retail & Shop", "Security Services", "Technology & IT",
  "Travel & Tourism", "Other",
];

interface Form {
  plan: string; term: "12" | "6";
  businessName: string; industry: string; services: string; tagline: string;
  contactName: string; phone: string; email: string; timeline: string; notes: string;
}

function ProgressBar({ step }: { step: number }) {
  const labels = ["Choose plan", "Your business", "Your details"];
  return (
    <div className="flex items-center gap-0 mb-10">
      {labels.map((label, i) => {
        const s = i + 1;
        const done = step > s;
        const active = step === s;
        return (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
              done ? "bg-accent text-white" : active ? "bg-accent text-white ring-4 ring-accent/20" : "bg-secondary text-muted-foreground border border-border"
            }`}>
              {done ? <Check className="h-4 w-4" /> : s}
            </div>
            <span className={`ml-2 text-xs font-medium hidden sm:block mr-2 ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
              {label}
            </span>
            {s < 3 && <div className={`flex-1 h-px mx-2 ${step > s ? "bg-accent" : "bg-border"}`} />}
          </div>
        );
      })}
    </div>
  );
}

function Step1({ form, update, addDomain, setAddDomain, onNext }: {
  form: Form; update: (k: keyof Form, v: string) => void;
  addDomain: boolean; setAddDomain: (v: boolean) => void; onNext: () => void;
}) {
  const sel = PLANS.find(p => p.id === form.plan)!;
  const displayPrice = (p12: string, p6: string) => {
    const base = form.term === "12" ? p12 : p6;
    return addDomain ? withDomain(base) : base;
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Choose your plan</h1>
      <p className="mt-1 text-muted-foreground text-sm">Select the plan that fits your business. You can upgrade anytime.</p>

      {/* Subscription term */}
      <div className="mt-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Subscription term</p>
        <div className="grid grid-cols-2 gap-3">
          {(["12", "6"] as const).map(t => (
            <button
              key={t}
              type="button"
              onClick={() => update("term", t)}
              className={`rounded-xl border p-3 text-sm transition-all text-left ${
                form.term === t ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <div className="font-semibold">{t === "12" ? "Yearly" : "6-month"}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {t === "12"
                  ? `${addDomain ? withDomain(sel.price12) : sel.price12}/mo · Activation ${sel.setup12}`
                  : `${addDomain ? withDomain(sel.price6) : sel.price6}/mo · Activation ${sel.setup6}`}
              </div>
              {t === "12" && <div className="mt-1 text-xs text-accent font-medium">Best value</div>}
            </button>
          ))}
        </div>
      </div>

      {/* Domain question */}
      <div className="mt-4 rounded-xl border border-border bg-secondary p-4">
        <p className="text-sm font-semibold mb-3">Do you have a domain? <span className="text-muted-foreground font-normal text-xs">(e.g. www.yourbusiness.co.za)</span></p>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => setAddDomain(false)}
            className={`rounded-lg border p-3 text-sm text-left transition-all ${
              !addDomain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
            }`}>
            <div className="flex items-center gap-2 font-semibold">
              <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                !addDomain ? "border-accent bg-accent" : "border-border"
              }`}>{!addDomain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}</div>
              Yes, I have one
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">No extra charge</p>
          </button>
          <button type="button" onClick={() => setAddDomain(true)}
            className={`rounded-lg border p-3 text-sm text-left transition-all ${
              addDomain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
            }`}>
            <div className="flex items-center gap-2 font-semibold">
              <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                addDomain ? "border-accent bg-accent" : "border-border"
              }`}>{addDomain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}</div>
              No, add one for me
            </div>
            <p className="mt-0.5 text-xs text-accent font-medium">+R39/month</p>
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {PLANS.map(p => (
          <button
            key={p.id}
            type="button"
            onClick={() => update("plan", p.id)}
            className={`w-full text-left rounded-xl border p-4 transition-all ${
              form.plan === p.id ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card hover:border-accent/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  form.plan === p.id ? "border-accent bg-accent" : "border-border"
                }`}>
                  {form.plan === p.id && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{p.name}</span>
                    {p.popular && <span className="text-xs bg-gradient-brand text-white px-2 py-0.5 rounded-full font-medium">Most popular</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="font-bold text-sm">{displayPrice(p.price12, p.price6)}<span className="text-muted-foreground font-normal">/mo</span></p>
                {addDomain && <p className="text-xs text-accent"><Globe className="inline h-3 w-3" /> +R39</p>}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold hover:opacity-90 transition"
      >
        Continue <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Step2({ form, update, onNext, onBack }: { form: Form; update: (k: keyof Form, v: string) => void; onNext: () => void; onBack: () => void }) {
  const valid = form.businessName.trim().length > 1 && form.industry && form.services.trim().length > 5;
  return (
    <div>
      <h1 className="text-2xl font-bold">Tell us about your business</h1>
      <p className="mt-1 text-muted-foreground text-sm">This is used to build your online presence. The more detail, the better.</p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Business name <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={form.businessName}
            onChange={e => update("businessName", e.target.value)}
            placeholder="e.g. Acme Industrial"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Industry <span className="text-red-400">*</span></label>
          <select
            value={form.industry}
            onChange={e => update("industry", e.target.value)}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">What services or products do you offer? <span className="text-red-400">*</span></label>
          <textarea
            value={form.services}
            onChange={e => update("services", e.target.value)}
            placeholder="e.g. Tax returns, bookkeeping, payroll, financial statements..."
            rows={3}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Short tagline <span className="text-xs text-muted-foreground font-normal">(optional)</span></label>
          <input
            type="text"
            value={form.tagline}
            onChange={e => update("tagline", e.target.value)}
            placeholder="e.g. Fast, reliable accounting for SA businesses"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!valid}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Step3({ form, update, selectedPlan, addDomain, setAddDomain, onSubmit, onBack }: {
  form: Form; update: (k: keyof Form, v: string) => void;
  selectedPlan: typeof PLANS[0]; addDomain: boolean; setAddDomain: (v: boolean) => void;
  onSubmit: () => void; onBack: () => void;
}) {
  const valid = form.contactName.trim().length > 1 && form.phone.trim().length > 7;
  const price = form.term === "12" ? selectedPlan.price12 : selectedPlan.price6;
  const setup = form.term === "12" ? selectedPlan.setup12 : selectedPlan.setup6;

  return (
    <div>
      <h1 className="text-2xl font-bold">Your contact details</h1>
      <p className="mt-1 text-muted-foreground text-sm">We'll use these to reach you once your presence is live.</p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Your name <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={form.contactName}
            onChange={e => update("contactName", e.target.value)}
            placeholder="e.g. Thabo Nkosi"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">WhatsApp / phone number <span className="text-red-400">*</span></label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => update("phone", e.target.value)}
            placeholder="e.g. 078 123 4567"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Email address <span className="text-xs text-muted-foreground font-normal">(optional)</span></label>
          <input
            type="email"
            value={form.email}
            onChange={e => update("email", e.target.value)}
            placeholder="e.g. hello@yourbusiness.co.za"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">When do you want to go live?</label>
          <select
            value={form.timeline}
            onChange={e => update("timeline", e.target.value)}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
          >
            <option value="asap">As soon as possible</option>
            <option value="week">Within a week</option>
            <option value="month">Within a month</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Anything else we should know? <span className="text-xs text-muted-foreground font-normal">(optional)</span></label>
          <textarea
            value={form.notes}
            onChange={e => update("notes", e.target.value)}
            placeholder="e.g. I already have a domain, I want a dark colour scheme..."
            rows={3}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
          />
        </div>
      </div>

      {/* Order summary */}
      <div className="mt-6 rounded-2xl bg-secondary border border-border p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Your order</p>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">{selectedPlan.name} plan ({form.term === "12" ? "yearly" : "6-month"})</span>
          <span className="font-semibold">{price}/month</span>
        </div>
        <div className="flex justify-between text-sm border-t border-border pt-2">
          <span className="text-muted-foreground">Activation fee (once-off)</span>
          <span className="font-semibold">{setup}</span>
        </div>

        {addDomain && (
          <div className="flex items-center gap-1.5 mt-3 text-xs text-accent font-medium border border-accent/30 bg-accent/5 rounded-lg px-3 py-2">
            <Globe className="h-3.5 w-3.5 shrink-0" /> Domain registration included — +R39/month
          </div>
        )}
        <p className="mt-3 text-xs text-muted-foreground">Monthly billing only starts once your presence is live.</p>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Shield className="h-3.5 w-3.5 text-accent shrink-0" />
        30-day satisfaction guarantee. Not happy with the result? Full refund on your activation fee.
      </div>

      <div className="mt-6 flex gap-3">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!valid}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-glow"
        >
          <MessageCircle className="h-4 w-4" /> Activate my plan
        </button>
      </div>
    </div>
  );
}

function ConfirmationScreen({ plan }: { plan: typeof PLANS[0] }) {
  const fileMessage = encodeURIComponent(
    `Hi LunexWeb! I just submitted my ${plan.name} plan intake form. Here are my files:\n\n📎 Logo:\n📸 Photos:\n🎨 Brand colours (if any):`
  );
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet><title>Plan Activated — LunexWeb</title></Helmet>
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-2xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <img src="/portfolio/2.png" alt="LunexWeb" className="h-7 w-auto" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center">
          <div className="h-20 w-20 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-2xl font-bold">Your plan is being activated!</h1>
          <p className="mt-3 text-muted-foreground">
            Your {plan.name} plan intake has been submitted. Our team will be in touch via WhatsApp within a few hours to confirm and begin your build.
          </p>

          <div className="mt-8 rounded-2xl bg-secondary border border-border p-6 text-left space-y-4">
            <p className="text-sm font-semibold">What happens next</p>
            {[
              { n: "1", label: "Send your logo & photos", desc: "Tap the button below to send your brand files to our build team via WhatsApp." },
              { n: "2", label: "We build your presence", desc: "Your presence is typically live within 24–48 hours of receiving your files." },
              { n: "3", label: "You review & approve", desc: "We send you a preview link. Once you approve, it goes live on your domain." },
            ].map(s => (
              <div key={s.n} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{s.n}</div>
                <div>
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${fileMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
          >
            <MessageCircle className="h-5 w-5" /> Send my logo & photos
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Live within 24–48 hours of receiving your files
          </div>
        </div>
      </div>
    </div>
  );
}

export function GetStartedPage() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "business";
  const initialDomain = searchParams.get("domain") === "true";

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [addDomain, setAddDomain] = useState(initialDomain);
  const [form, setForm] = useState<Form>({
    plan: PLANS.find(p => p.id === initialPlan) ? initialPlan : "business",
    term: "12",
    businessName: "", industry: "", services: "", tagline: "",
    contactName: "", phone: "", email: "", timeline: "asap", notes: "",
  });

  const update = (field: keyof Form, value: string) => setForm(prev => ({ ...prev, [field]: value }));
  const selectedPlan = PLANS.find(p => p.id === form.plan)!;

  const handleSubmit = () => {
    const price = form.term === "12" ? selectedPlan.price12 : selectedPlan.price6;
    const setup = form.term === "12" ? selectedPlan.setup12 : selectedPlan.setup6;
    const message = encodeURIComponent(
      `🚀 NEW PLAN ACTIVATION\n\n` +
      `Plan: ${selectedPlan.name} — ${price}/month (${form.term === "12" ? "Yearly" : "6-month"})\n` +
      `Activation fee: ${setup}\n` +
      (addDomain ? `Domain add-on: +R39/month\n` : "") +
      `\n`+
      `🏢 BUSINESS\n` +
      `Name: ${form.businessName}\n` +
      `Industry: ${form.industry}\n` +
      `Services: ${form.services}\n` +
      `Tagline: ${form.tagline || "—"}\n\n` +
      `👤 CONTACT\n` +
      `Name: ${form.contactName}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || "—"}\n\n` +
      `⏱ Timeline: ${form.timeline}\n` +
      `📋 Notes: ${form.notes || "None"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) return <ConfirmationScreen plan={selectedPlan} />;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get Started — LunexWeb</title>
        <meta name="description" content="Activate your managed online presence plan. Fill in your business details and go live in 24–48 hours." />
      </Helmet>

      <div className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-2xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <img src="/portfolio/2.png" alt="LunexWeb" className="h-7 w-auto" />
          <div className="text-xs text-muted-foreground">Step {step} of 3</div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-10">
        <ProgressBar step={step} />
        {step === 1 && <Step1 form={form} update={update} addDomain={addDomain} setAddDomain={setAddDomain} onNext={() => setStep(2)} />}
        {step === 2 && <Step2 form={form} update={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 form={form} update={update} selectedPlan={selectedPlan} addDomain={addDomain} setAddDomain={setAddDomain} onSubmit={handleSubmit} onBack={() => setStep(2)} />}
      </div>
    </div>
  );
}
