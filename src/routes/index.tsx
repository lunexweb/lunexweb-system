import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { WhyRent } from "@/components/site/WhyRent";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { WhoItsFor } from "@/components/site/WhoItsFor";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LunexWeb — Professional Managed Websites for SA Businesses | From R299/Month" },
      {
        name: "description",
        content:
          "Get a professional business website fully managed for you. LunexWeb builds, hosts and maintains your website every month. No setup fees. From R299/month. South Africa.",
      },
      { property: "og:title", content: "LunexWeb — Managed Websites for SA Businesses | From R299/Month" },
      {
        property: "og:description",
        content:
          "We build, host and manage your business website for a simple monthly fee. From R299/month. No setup fees.",
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
      <HowItWorks />
      <Services />
      <WhyRent />
      <Pricing />
      <WhoItsFor />
      <WhyUs />
      <Portfolio />
      <FAQ />
      <CTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
