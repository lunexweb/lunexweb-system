import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the difference between the Catalog Store and the Full Store?", a: "The Catalog Store lets customers add to cart and place their order — you receive the order via WhatsApp and the customer gets an auto-generated PDF with your banking details to make payment. No payment gateway needed. The Full Store adds a payment gateway (PayFast or Ozow), an admin dashboard, inventory management and order tracking — everything for a brand that wants to sell fully online with automated payments." },
  { q: "Is there a setup fee?", a: "No. There are no setup fees and no hidden costs. You pay a flat monthly fee — we build, host and manage your store for that one fee." },
  { q: "Is there a minimum term?", a: "Yes. All our stores are on a minimum-term management plan — 6 months or 12 months. This ensures we have enough time to properly build, optimise and support your store. After your minimum term, your plan continues on a monthly basis. We call it a 'website management agreement' rather than a contract — it simply sets out the monthly fee, what's included and the minimum period." },
  { q: "What's included — and what's not?", a: "Included: store build, hosting, SSL security, your own dashboard to manage everything, technical support and SEO basics. Not included: paid ad spend (Facebook/Google budget is separate), professional photography and third-party transaction fees (e.g. PayFast charges per sale)." },
  { q: "What happens if I want to cancel?", a: "You can cancel at the end of your minimum term by giving 30 days written notice. If you cancel early, the remaining months of your term apply. Your domain name and all your store content are always yours — we'll transfer everything to you." },
  { q: "How long does it take to get my store live?", a: "Most stores are live within 7–14 days. Custom builds with complex features take 3–6 weeks." },
  { q: "Can I update my products myself?", a: "Yes — that's exactly how it works. You get your own dashboard where you control everything: add products, update stock, set prices, manage orders and run promotions. You have full control over your store. Our role is to keep the site running fast, secure and online." },
  { q: "Which payment gateways do you support?", a: "We integrate PayFast, Ozow, Paystack and Peach Payments — the most widely used and trusted SA payment gateways. Your customers can pay by card, EFT or instant EFT." },
  { q: "Can I run Facebook or Google ads to my store?", a: "Yes — every store we build is ad-ready from day one. We set up Facebook Pixel, Google Analytics and conversion tracking so your ad spend goes further and you can see exactly what's working." },
  { q: "What happens if I want to upgrade from Catalog to Full Store?", a: "We upgrade your existing store — no rebuilding from scratch. You keep your domain, SEO ranking and all your content. Just let us know when you're ready." },
  { q: "Are you based in South Africa?", a: "Yes. LunexWeb is a South African team building for South African brands." },
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
