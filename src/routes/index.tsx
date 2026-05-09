import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LunexWeb — Websites & Google for South African Businesses" },
      {
        name: "description",
        content:
          "LunexWeb builds professional websites and Google Business profiles that help South African businesses get more customers online.",
      },
      { property: "og:title", content: "LunexWeb — Web Design & Google for SA Businesses" },
      {
        property: "og:description",
        content:
          "Premium websites and Google profiles built to convert visitors into customers. Monthly plans from R299.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <Portfolio />
      <FAQ />
      <CTA />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
