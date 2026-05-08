import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
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

function App() {
  return (
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
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
