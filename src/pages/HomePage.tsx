import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyRent } from "@/components/site/WhyRent";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Rent A Professional Business Website From R299/Month | Lunexweb South Africa</title>
        <meta
          name="description"
          content="Rent a professional website for your business from R299/month. Lunexweb sets up and manages everything — hosting, updates, support, WhatsApp integration. R499 once-off setup."
        />
        <link rel="canonical" href="https://lunexweb-system.vercel.app/" />
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <HowItWorks />
        <WhyRent />
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
    </>
  );
}
