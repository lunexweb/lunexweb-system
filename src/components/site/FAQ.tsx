import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take to build my website?", a: "Most projects go live within 7–14 days. Larger custom systems take 3–6 weeks." },
  { q: "How does the pricing work?", a: "There is a once-off R499 setup fee to get your website built. After that, you pay a monthly fee from R299/month and we maintain and look after your website for you. You bring your own domain." },
  { q: "Can you help me appear on Google?", a: "Yes. Every Business and Premium plan includes Google Business Profile setup and SEO basics." },
  { q: "Do you manage social media pages?", a: "Yes — we can set up and manage your Facebook, Instagram and other social pages to keep your brand consistent and active online." },
  { q: "Can I run ads to my LunexWeb website?", a: "Yes — that is exactly what our websites are built for. Every website we create is designed to work with Facebook Ads, Google Ads, and Instagram Ads so your budget goes further and more visitors become customers." },
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
