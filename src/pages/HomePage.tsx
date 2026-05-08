import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Web Design South Africa | Affordable Business Websites — Lunexweb</title>
        <meta
          name="description"
          content="Lunexweb builds professional, ads-ready websites for South African businesses. Based in Johannesburg, serving Cape Town, Durban, Pretoria & all SA cities. Plans from R299/month + R499 once-off setup."
        />
        <link rel="canonical" href="https://lunexweb-system.vercel.app/" />
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
