import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { WhyRent } from "@/components/site/WhyRent";
import { ConversionSystem } from "@/components/site/ConversionSystem";
import { ImagineSection } from "@/components/site/ImagineSection";
import { Pricing } from "@/components/site/Pricing";
import { OnlineStoreSection } from "@/components/site/OnlineStoreSection";
import { WhyUs } from "@/components/site/WhyUs";
import { WhoItsFor } from "@/components/site/WhoItsFor";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>LunexWeb — Professional Managed Websites for SA Businesses | From R299/Month</title>
        <meta
          name="description"
          content="Get a professional business website fully managed for you. LunexWeb builds, hosts and maintains your website every month. R499 once-off setup. From R299/month. South Africa."
        />
        <link rel="canonical" href="https://lunexweb.com/" />
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Services />
        <WhyRent />
        <ConversionSystem />
        <ImagineSection />
        <Pricing />
        <OnlineStoreSection />
        <WhoItsFor />
        <WhyUs />
        <Portfolio />
        <FAQ />
        <CTA />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
