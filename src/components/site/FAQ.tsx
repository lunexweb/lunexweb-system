import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What plans do you offer?", a: "We have three managed presence plans: Online Presence Starter (R499/month) — a professional one-page presence to get your business visible online; Online Presence Business (R799/month) — a full multi-page presence with better SEO and lead capture; Business Visibility Growth (R1,199/month) — a complete multi-section presence with a blog and advanced SEO for long-term visibility. We also manage online stores — chat to us for a quote on those." },
  { q: "What is the difference between the Starter and Business plan?", a: "The Online Presence Starter gives you a single, well-designed one-page presence — your business overview, services, contact details and a WhatsApp button all in one scroll. It's the fastest way to get visible online. The Online Presence Business expands this into a full multi-page presence, adds better SEO structure and lead capture forms — giving you a more established, higher-converting online presence." },
  { q: "Is there a setup fee?", a: "Yes — it's called an activation fee, and it covers the design, build and launch of your online presence. On a yearly plan: Starter R499, Business R799, Growth R999. On a 6-month plan: Starter R699, Business R999, Growth R1,299. Importantly: your monthly management fee only starts once your presence is live — not while you wait for it to be built. No hidden costs after that." },
  { q: "Is there a minimum term?", a: "Yes. All our plans are on a minimum-term management agreement — 6 months or 12 months. This gives us enough time to properly build, optimise and support your presence. After your minimum term, your plan continues monthly. The agreement simply sets out the monthly fee, what's included and the minimum period." },
  { q: "What's included — and what's not?", a: "Included: design and build of your online presence, hosting, SSL security, Google Search Console setup, SEO foundations, WhatsApp and contact integrations, monthly maintenance and technical support. Not included: paid ad spend (Facebook/Google budgets are separate), professional photography, and third-party transaction fees on online stores (e.g. PayFast charges per sale)." },
  { q: "What does the monthly fee actually cover?", a: "Your monthly fee covers hosting, SSL security, uptime monitoring, routine maintenance, technical support and small content updates (text changes, photo swaps, etc.). It does not cover full redesigns, adding sections outside your plan, or new functionality — those are quoted separately. Think of it as your business presence staying live, fast and maintained — every month, automatically." },
  { q: "What do I need to provide to get started?", a: "To build your presence we need: your business name and description, your logo (or we'll use a placeholder), your services or products, contact details, and any photos you'd like to use. You don't need a copywriter — just tell us about your business and we'll handle the rest. The more you give us, the faster we launch." },
  { q: "What happens if I'm slow to send my details?", a: "We understand life is busy. That said, projects where information hasn't been received within 14 days may be paused to keep our build schedule running for all clients. Once you send your details, we pick it straight back up and launch as quickly as possible. Our goal is to get you live fast — the sooner you send your details, the sooner you're visible online." },
  { q: "How long does it take to go live?", a: "Most presences are live within 24–48 hours of us receiving your content and details. Custom builds with complex features may take longer." },
  { q: "How do content updates work?", a: "Submit your update request via WhatsApp — a text change, new photo, updated price, or added service. We process it within 48 hours. It's not a back-and-forth agency process — you submit, we process, it's done. Content updates are included from the Business plan upward: Business gets 3 update requests per month, Growth gets 5 with priority processing. The Starter plan does not include content updates — it's designed to stay live and maintained as-is." },
  { q: "What if I need more updates than my plan allows?", a: "Additional update requests beyond your monthly allowance are billed at R150 per update, or you can upgrade your plan for a higher monthly allowance. Most businesses find their plan allowance is more than enough for routine changes. For a full redesign or new sections, we'll quote separately — those fall outside the subscription scope." },
  { q: "Do I need a domain name?", a: "Yes — every online presence needs a domain (e.g. yourbusiness.co.za). If you already have one, great — no extra charge. If you need us to register and manage one for you, we offer domain registration and management as an optional add-on for R39/month. This covers registration, renewal and DNS management." },
  { q: "Do I own my domain and content?", a: "Yes. Your domain name and all your content are always yours. If you ever decide to leave, we transfer everything to you — no lock-in on your assets." },
  { q: "What happens if I want to cancel?", a: "You can cancel at the end of your minimum term by giving 30 days written notice. If you cancel early, the remaining months of your term apply. Your domain and all site content are always yours." },
  { q: "Can I upgrade my plan?", a: "Yes — at any time. You pay the difference in monthly fee from your next billing date. No new setup fee. Additional sections and features are added within 24–48 hours. Your domain, SEO ranking and all existing content stay intact." },
  { q: "Can I downgrade my plan?", a: "Yes, you can downgrade at the end of your current term (6 or 12 months). We'll archive any content beyond the new plan's limits for 30 days — nothing is deleted without your confirmation. Just give us 30 days notice before your term ends." },
  { q: "Can I run Facebook or Google ads?", a: "Yes — every presence we manage is ad-ready from day one. We set up Facebook Pixel, Google Analytics and conversion tracking so your ad spend goes further and you can see what's working." },
  { q: "Are you based in South Africa?", a: "Yes. LunexWeb is a South African team building for South African businesses." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
