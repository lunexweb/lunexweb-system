import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What plans do you offer?", a: "We have three managed website plans: Starter (R299/month) — a 1-page professional website to get you online; Business (R499/month) — a multi-page website with up to 5 pages, better SEO and enquiry forms; Growth (R699/month) — up to 5 pages, a blog and advanced SEO for long-term visibility. We also build online stores — chat to us for a quote on those." },
  { q: "What is the difference between the Starter and Business plan?", a: "The Starter Website is a single, well-designed 1-page site — covers your business overview, services, contact details and a WhatsApp button all in one scroll. It's the fastest way to get online. The Business Website expands this into up to 5 pages, adds better SEO structure and enquiry forms — giving you a more established presence that ranks better and converts more visitors." },
  { q: "Is there a setup fee?", a: "Yes, there is a once-off setup fee that covers the design, build and launch of your website. On a yearly plan it's R499 for all plans. On a 6-month plan, the setup fee varies by package — Starter R699, Business R999, Growth R1,499. After that, you pay your flat monthly management fee with no hidden costs." },
  { q: "Is there a minimum term?", a: "Yes. All our websites are on a minimum-term management plan — 6 months or 12 months. This gives us enough time to properly build, optimise and support your site. After your minimum term, your plan continues monthly. We call it a 'website management agreement' — it simply sets out the monthly fee, what's included and the minimum period." },
  { q: "What's included — and what's not?", a: "Included: website design and build, hosting, SSL security, Google Search Console setup, SEO foundations, WhatsApp and contact integrations, monthly maintenance and technical support. Not included: paid ad spend (Facebook/Google budgets are separate), professional photography, and third-party transaction fees on online stores (e.g. PayFast charges per sale)." },
  { q: "How long does it take to go live?", a: "Most websites are live within 24–48 hours of us receiving your content and details. Custom builds with complex features may take longer." },
  { q: "Do I own my website and domain?", a: "Yes. Your domain name and all your website content are always yours. If you ever decide to leave, we transfer everything to you — no lock-in on your assets." },
  { q: "What happens if I want to cancel?", a: "You can cancel at the end of your minimum term by giving 30 days written notice. If you cancel early, the remaining months of your term apply. Your domain and all site content are always yours." },
  { q: "Can I upgrade my plan?", a: "Yes — at any time. You pay the difference in monthly fee from your next billing date. No new setup fee. Extra pages and features are added within 24–48 hours. Your domain, SEO ranking and all existing content stay intact." },
  { q: "Can I downgrade my plan?", a: "Yes, you can downgrade at the end of your current term (6 or 12 months). We'll archive any content beyond the new plan's limits for 30 days — nothing is deleted without your confirmation. Just give us 30 days notice before your term ends." },
  { q: "Can I run Facebook or Google ads to my website?", a: "Yes — every website we build is ad-ready from day one. We set up Facebook Pixel, Google Analytics and conversion tracking so your ad spend goes further and you can see what's working." },
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
