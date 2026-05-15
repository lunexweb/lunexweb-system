import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Package, ShieldCheck, Clock, CreditCard, Globe, ArrowUpDown,
  XCircle, FileCheck, Check, MessageCircle, ChevronRight, Download, Loader2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WHATSAPP_NUMBER } from "@/lib/site";

async function generateContractPDF(data: {
  name: string; business: string; pkg: string;
  term: string; phone: string; email: string;
  monthlyBase: string; activationBase: string;
  monthlyTotal: string; activationTotal: string;
  domainAddon: boolean;
}) {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF("p", "mm", "a4");
  const W = 210, margin = 18, cW = W - margin * 2;
  const date = new Date().toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

  const NAVY: [number,number,number]  = [10, 28, 60];
  const BLUE: [number,number,number]  = [37, 99, 235];
  const DARK: [number,number,number]  = [17, 24, 39];
  const MID:  [number,number,number]  = [75, 85, 99];
  const LIGHT:[number,number,number]  = [243, 244, 246];
  const WHITE:[number,number,number]  = [255, 255, 255];
  const GREEN:[number,number,number]  = [5, 150, 105];

  let y = 0;

  const addFooter = (pg: number) => {
    const total = doc.getNumberOfPages();
    doc.setFillColor(...NAVY);
    doc.rect(0, 287, 210, 10, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(6.5);
    doc.setFont("helvetica", "normal");
    doc.text("LunexWeb | www.lunexweb.com | 078 999 2503", margin, 293);
    doc.text(`Page ${pg} of ${total}`, W - margin, 293, { align: "right" });
    doc.text("CONFIDENTIAL — Intended solely for the named client.", W / 2, 293, { align: "center" });
  };

  const chk = (needed: number) => {
    if (y + needed > 277) {
      doc.addPage();
      y = 22;
    }
  };

  // ── Logo ──────────────────────────────────────────────
  let logoB64 = "";
  try {
    logoB64 = await new Promise<string>((res) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width; c.height = img.height;
        c.getContext("2d")!.drawImage(img, 0, 0);
        res(c.toDataURL("image/png"));
      };
      img.onerror = () => res("");
      img.src = "/portfolio/2.png";
    });
  } catch { logoB64 = ""; }

  // ── Header ────────────────────────────────────────────
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, 210, 48, "F");
  doc.setFillColor(...BLUE);
  doc.rect(0, 0, 210, 2.5, "F");

  if (logoB64) {
    doc.setFillColor(...WHITE);
    doc.roundedRect(margin, 9, 42, 18, 2, 2, "F");
    doc.addImage(logoB64, "PNG", margin + 2, 10, 38, 16);
  } else {
    doc.setTextColor(...WHITE);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("LunexWeb", margin, 21);
  }

  doc.setTextColor(180, 200, 235);
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "normal");
  doc.text("www.lunexweb.com", W - margin, 12, { align: "right" });
  doc.text("078 999 2503", W - margin, 17, { align: "right" });
  doc.text("sales@lunexweb.com", W - margin, 22, { align: "right" });

  doc.setTextColor(...WHITE);
  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.text("ONLINE PRESENCE SERVICE AGREEMENT", margin, 37);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 200, 235);
  doc.text("Managed Online Presence Services — Terms & Conditions", margin, 43);

  y = 56;

  // ── Client Details Card ───────────────────────────────
  const cardY = y;
  const cardH = 58;
  doc.setFillColor(...LIGHT);
  doc.roundedRect(margin, cardY, cW, cardH, 3, 3, "F");
  doc.setFillColor(...BLUE);
  doc.roundedRect(margin, cardY, cW, 9, 3, 3, "F");
  doc.rect(margin, cardY + 5, cW, 4, "F");
  doc.setTextColor(...WHITE);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("CLIENT AGREEMENT DETAILS", margin + 4, cardY + 6.5);
  doc.text(`Signed: ${date}`, W - margin - 4, cardY + 6.5, { align: "right" });

  y = cardY + 13;
  const c1 = margin + 4, c2 = W / 2 + 2;
  const row = (l1: string, v1: string, l2: string, v2: string) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
    doc.text(l1.toUpperCase(), c1, y); doc.text(l2.toUpperCase(), c2, y);
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...DARK);
    const v1Lines = doc.splitTextToSize(v1, 80);
    const v2Lines = doc.splitTextToSize(v2, 80);
    doc.text(v1Lines[0] ?? "", c1, y + 4.5); doc.text(v2Lines[0] ?? "", c2, y + 4.5);
    y += 13;
  };
  row("Full Name", data.name, "Business Name", data.business);
  row("Package", data.pkg, "Contract Term", data.term);
  row("Phone Number", data.phone, "Email", data.email || "—");
  y = cardY + cardH + 4;

  // ── Pricing Summary Card ──────────────────────────────
  const pcH = data.domainAddon ? 58 : 46;
  doc.setFillColor(235, 245, 255);
  doc.roundedRect(margin, y, cW, pcH, 3, 3, "F");
  doc.setFillColor(...BLUE);
  doc.roundedRect(margin, y, cW, 8, 3, 3, "F");
  doc.rect(margin, y + 4, cW, 4, "F");
  doc.setTextColor(...WHITE);
  doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
  doc.text("SELECTED PLAN SUMMARY", margin + 4, y + 6);
  y += 12;
  const pc1 = margin + 4, pc2 = W / 2 + 2;

  // Monthly fee
  doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
  doc.text("MONTHLY FEE", pc1, y);
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...BLUE);
  doc.text(data.monthlyTotal + "/mo", pc1, y + 5);
  if (data.domainAddon) {
    doc.setFontSize(7); doc.setTextColor(...MID);
    doc.text(`(${data.monthlyBase} base + R39 domain)`, pc1, y + 10);
  }

  // Activation fee
  doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
  doc.text("ACTIVATION FEE (ONCE-OFF)", pc2, y);
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...DARK);
  doc.text(data.activationTotal, pc2, y + 5);
  if (data.domainAddon) {
    doc.setFontSize(7); doc.setTextColor(...MID);
    doc.text(`(${data.activationBase} setup + R39 domain)`, pc2, y + 10);
  }

  y += data.domainAddon ? 17 : 10;

  // Domain add-on status (always shown)
  doc.setDrawColor(200, 215, 240); doc.setLineWidth(0.2);
  doc.line(pc1, y, W - margin, y);
  y += 4;
  doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
  doc.text("DOMAIN ADD-ON", pc1, y);
  y += 4;
  if (data.domainAddon) {
    doc.setFillColor(...BLUE);
    doc.circle(pc1 + 2, y - 1, 1.5, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(...BLUE);
    doc.text("Included — R39/month, registered and managed by LunexWeb", pc1 + 6, y);
  } else {
    doc.setFillColor(...MID);
    doc.circle(pc1 + 2, y - 1, 1.5, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(...MID);
    doc.text("Not included — client owns and manages their own domain", pc1 + 6, y);
  }
  y += 8;

  doc.setFont("helvetica", "italic"); doc.setFontSize(7.5); doc.setTextColor(...GREEN);
  doc.text("Monthly billing starts only once your presence is live — not during build.", pc1, y);
  y += 10;

  // ── Section helper ────────────────────────────────────
  const sec = (num: string, title: string, body: string) => {
    chk(30);
    doc.setFillColor(...BLUE);
    doc.circle(margin + 4, y + 3, 3.5, "F");
    doc.setTextColor(...WHITE);
    doc.setFontSize(7); doc.setFont("helvetica", "bold");
    doc.text(num, margin + 4, y + 4, { align: "center" });
    doc.setTextColor(...DARK);
    doc.setFontSize(9.5); doc.setFont("helvetica", "bold");
    doc.text(title.toUpperCase(), margin + 10, y + 4);
    doc.setDrawColor(...BLUE); doc.setLineWidth(0.25);
    doc.line(margin + 10, y + 6, W - margin, y + 6);
    y += 11;
    doc.setTextColor(...MID); doc.setFontSize(8.5); doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(body, cW - 8);
    lines.forEach((l: string) => { chk(5.5); doc.text(l, margin + 6, y); y += 5; });
    y += 5;
  };

  const domainNote = data.domainAddon
    ? `Domain add-on: Included — R39/month, registered and managed by LunexWeb on behalf of the Client. Domain ownership remains with the Client at all times.`
    : `Domain add-on: Not selected — the Client owns and manages their own domain. LunexWeb will point and configure the domain as part of the service at no extra charge.`;
  sec("01", "Service Packages",
    `${data.name}, on behalf of ${data.business}, has confirmed the following package: ${data.pkg}. ` +
    `Monthly fee: ${data.monthlyTotal}/month. ` +
    `Activation fee (once-off, due before build begins): ${data.activationTotal}. ` +
    `${domainNote} ` +
    `Monthly billing begins only once the online presence is live — not while it is being built.`);

  sec("02", "Services Included",
    "Each package includes the following standard services: online presence setup and initial design configuration; hosting and domain pointing; SSL security certificate; Google Search Console and basic SEO setup; contact form integration; basic maintenance and content updates (within approved scope); uptime monitoring; and WhatsApp-based support for service-related queries.");

  sec("03", "Important Terms & Conditions",
    "Only content and design approved by the Client before launch will be used on the website. No changes outside the approved scope will be made without a separate written agreement. LunexWeb is responsible solely for maintaining the website and ensuring correct functionality. Redesigns, additional pages, or work outside the agreed scope will be quoted and charged separately. The Client is responsible for managing their own business content, branding, and operational information.");

  sec("04", "Contract Term",
    "This agreement is valid for a fixed minimum period of either 6 (six) months or 12 (twelve) months from the date of onboarding, as selected by the Client at signup. After the minimum term, the plan continues on a monthly basis until cancelled. Renewal terms will be agreed upon in writing prior to expiry.");

  sec("05", "Payment Terms",
    "Monthly payments are due on the Client's preferred payment date, between the 1st and 7th of each month, selected at the time of onboarding. Payment requests are sent via Trailbill.com. The Client will receive a payment request on their chosen date each month. Non-payment will result in the suspension or removal of the website. A reconnection fee of 25% of the monthly package price applies after any suspension due to non-payment. LunexWeb reserves the right to withhold services until all outstanding amounts are settled.");

  sec("06", "Domain Ownership",
    "By default, the Client is responsible for purchasing and renewing their own domain name. LunexWeb will point and configure the domain as part of the service. Optional Domain Add-On (R39/month): where selected, LunexWeb registers and manages the domain on the Client's behalf for the duration of the agreement — ownership remains with the Client at all times. All online presence content and assets remain the property of the Client at all times.");

  sec("07", "Upgrades & Downgrades",
    "Upgrades may be requested at any time. The Client pays the difference in monthly fee from the next billing date. No new setup fee applies. Downgrades are permitted at the end of the current minimum term only, with 30 days written notice. Content beyond the new plan's page limit will be archived for 30 days before any removal.");

  sec("08", "Cancellation Policy",
    "Cancellation of this agreement is only permitted upon completion of the full minimum contract term. Written notice of cancellation must be submitted at least 30 days prior to the renewal date. Early cancellation requests will be reviewed on a case-by-case basis and may be subject to an early termination fee equivalent to the remaining months of the minimum term.");

  sec("09", "Acceptance of Terms",
    "By completing the sign request form, the Client confirms that they have read, understood, and agreed to all terms and conditions outlined in this Website Service Agreement. This agreement is legally binding upon submission and confirmation by LunexWeb.");

  // ── Signature Block ───────────────────────────────────
  chk(52);
  y += 4;
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, y, cW, 48, 3, 3, "F");
  doc.setFillColor(...GREEN);
  doc.roundedRect(margin, y, cW, 9, 3, 3, "F");
  doc.rect(margin, y + 5, cW, 4, "F");
  doc.setTextColor(...WHITE);
  doc.setFontSize(8); doc.setFont("helvetica", "bold");
  doc.text("DIGITAL ACCEPTANCE & SIGNATURE", margin + 4, y + 6.5);
  y += 13;

  doc.setTextColor(...DARK); doc.setFontSize(8.5); doc.setFont("helvetica", "italic");
  const aText = `I, ${data.name}, representing ${data.business}, hereby confirm that I have read, understood, and agree to be legally bound by all terms and conditions of this Website Service Agreement with LunexWeb.`;
  doc.splitTextToSize(aText, cW - 8).forEach((l: string) => { doc.text(l, margin + 4, y); y += 5; });
  y += 5;

  const sc1 = margin + 4, sc2 = W / 2 + 4;
  doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
  doc.text("SIGNED BY", sc1, y); doc.text("DATE SIGNED", sc2, y);
  y += 4;
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...DARK);
  doc.text(data.name, sc1, y); doc.text(date, sc2, y);
  y += 4;
  doc.setDrawColor(...GREEN); doc.setLineWidth(0.3);
  doc.line(sc1, y, sc1 + 76, y); doc.line(sc2, y, sc2 + 76, y);
  y += 7;
  doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.setTextColor(...MID);
  doc.text("BUSINESS", sc1, y); doc.text("PACKAGE SELECTED", sc2, y);
  y += 4;
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...DARK);
  doc.text(data.business, sc1, y);
  doc.text(data.pkg, sc2, y);

  // ── Footers on all pages ──────────────────────────────
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) { doc.setPage(i); addFooter(i); }

  const filename = `LunexWeb-Agreement-${data.name.replace(/\s+/g, "-")}-${new Date().getFullYear()}.pdf`;
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  return { url, filename };
}

const PLAN_PRICES: Record<string, Record<string, { monthly: string; activation: string }>> = {
  "6 months": {
    Starter:       { monthly: "R449",   activation: "R449" },
    Business:      { monthly: "R699",   activation: "R699" },
    Growth:        { monthly: "R999",   activation: "R999" },
    "Online Store":{ monthly: "R999",   activation: "R999" },
  },
  "12 months": {
    Starter:       { monthly: "R299",   activation: "R299" },
    Business:      { monthly: "R499",   activation: "R499" },
    Growth:        { monthly: "R699",   activation: "R699" },
    "Online Store":{ monthly: "R699",   activation: "R699" },
  },
};

const paymentDays = Array.from({ length: 7 }, (_, i) => i + 1);

const sections = [
  { num: "01", icon: Package,     title: "Service Packages" },
  { num: "02", icon: Check,       title: "Services Included" },
  { num: "03", icon: ShieldCheck, title: "Important Terms" },
  { num: "04", icon: Clock,       title: "Contract Term" },
  { num: "05", icon: CreditCard,  title: "Payment Terms" },
  { num: "06", icon: Globe,       title: "Domain Ownership" },
  { num: "07", icon: ArrowUpDown, title: "Upgrades & Downgrades" },
  { num: "08", icon: XCircle,     title: "Cancellation Policy" },
  { num: "09", icon: FileCheck,   title: "Acceptance of Terms" },
];

const included = [
  "Website setup and initial design configuration",
  "Website hosting and domain pointing",
  "SSL security certificate",
  "Google Search Console and basic SEO setup",
  "WhatsApp and contact form integration",
  "Basic maintenance and content updates (within approved scope)",
  "Uptime monitoring to ensure website availability",
  "WhatsApp-based support for service-related queries",
];

function SectionCard({
  num, icon: Icon, title, children,
}: {
  num: string; icon: React.ElementType; title: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold text-accent/60 tracking-widest uppercase">Section {num}</span>
          <h2 className="text-base font-bold tracking-tight leading-tight">{title}</h2>
        </div>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-foreground">
        {label} <span className="text-accent">*</span>
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition placeholder:text-muted-foreground/50";

export function TermsPage() {
  const [form, setForm] = useState({
    name: "", business: "", package: "", term: "", phone: "", email: "", agreed: false, domain: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<{ url: string; filename: string } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGenerating(true);
    try {
      const result = await generateContractPDF({
        name: form.name,
        business: form.business,
        pkg: `${form.package} — ${form.term}`,
        term: form.term,
        phone: form.phone,
        email: form.email,
        monthlyBase: selectedPricing?.monthly ?? "Custom",
        activationBase: selectedPricing?.activation ?? "Custom",
        monthlyTotal: domainExtra || selectedPricing?.monthly || "Custom",
        activationTotal: activationExtra || (selectedPricing?.activation ?? "Custom"),
        domainAddon: form.domain,
      });
      if (result) setPdfBlob(result);
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
    const msg = [
      `Hi LunexWeb — I'd like to sign the Website Service Agreement.`,
      ``,
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Package: ${form.package} (${form.term})`,
      `Monthly fee: ${domainExtra || selectedPricing?.monthly || "Custom"}/month`,
      `Activation fee: ${activationExtra || (selectedPricing?.activation ?? "Custom")}${form.domain ? " (incl. domain R39)" : ""}`,
      form.domain ? `Domain add-on: Yes — +R39/month (incl. in activation & monthly)` : `Domain add-on: No — I have my own domain`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      ``,
      `I confirm I have read and agree to the Terms & Conditions on lunexweb.com/terms.`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setGenerating(false);
    setSubmitted(true);
  }

  const selectedPricing = form.term && form.package ? PLAN_PRICES[form.term]?.[form.package] : null;
  const addR39 = (price: string) => {
    const n = parseInt(price.replace(/[R,]/g, ""), 10);
    return `R${(n + 39).toLocaleString("en-ZA")}`;
  };
  const domainExtra = form.domain && selectedPricing && selectedPricing.monthly !== "Custom"
    ? addR39(selectedPricing.monthly)
    : selectedPricing?.monthly ?? "";
  const activationExtra = form.domain && selectedPricing && selectedPricing.activation !== "Custom"
    ? addR39(selectedPricing.activation)
    : selectedPricing?.activation ?? "";

  const isValid = form.name.trim() && form.business.trim() && form.package &&
    form.term && form.phone.trim() && form.agreed;

  return (
    <>
      <Helmet>
        <title>Online Presence Service Agreement — LunexWeb</title>
        <meta name="description" content="Read LunexWeb's Online Presence Service Agreement and Terms & Conditions for monthly managed online presence plans in South Africa." />
        <link rel="canonical" href="https://lunexweb.com/terms" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">

        {/* Hero */}
        <div className="relative overflow-hidden bg-primary pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-3xl px-6 relative text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider mb-5">
              <FileCheck className="h-3.5 w-3.5" /> Legal Document
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground leading-tight">
              Online Presence<br />Service Agreement
            </h1>
            <p className="mt-5 text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
              This agreement is between <span className="text-primary-foreground font-medium">LunexWeb</span> (Service Provider) and the Client for the provision of managed online presence services. By proceeding with onboarding, the Client agrees to all terms set out below.
            </p>
            <a
              href="#sign"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Sign this agreement <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick nav chips */}
        <div className="bg-secondary border-b border-border sticky top-0 z-10 overflow-x-auto">
          <div className="mx-auto max-w-5xl px-6 py-3 flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
            {sections.map((s) => (
              <a
                key={s.num}
                href={`#s${s.num}`}
                className="flex-shrink-0 text-xs font-medium text-muted-foreground hover:text-accent transition px-3 py-1.5 rounded-full hover:bg-accent/10"
              >
                {s.num}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-16 space-y-5">

          {/* Section 01 */}
          <div id="s01">
            <SectionCard num="01" icon={Package} title="Service Packages">
              <p className="mb-5">The Client must select and confirm a package prior to onboarding. Package selection determines the scope of work and monthly billing amount.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Starter",      price6: "R449/mo",  price12: "R299/mo",  act6: "R449",   act12: "R299",  desc: "1-page online presence" },
                  { name: "Business",     price6: "R699/mo",  price12: "R499/mo",  act6: "R699",   act12: "R499",  desc: "Full multi-page online presence", highlight: true },
                  { name: "Growth",       price6: "R999/mo",  price12: "R699/mo",  act6: "R999",   act12: "R699",  desc: "Multi-section + blog & advanced SEO" },
                  { name: "Online Store", price6: "R999/mo",  price12: "R699/mo",  act6: "R999",   act12: "R699",  desc: "Full managed e-commerce store" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-xl p-4 border ${p.highlight ? "border-accent/50 bg-accent/5" : "border-border bg-background"}`}
                  >
                    {p.highlight && (
                      <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Most Popular</span>
                    )}
                    <div className="font-bold text-foreground">{p.name}</div>
                    <div className="flex gap-3 mt-1 items-baseline">
                      <span className="text-base font-bold text-accent">{p.price12} <span className="text-xs font-normal text-muted-foreground">12-month</span></span>
                      <span className="text-xs text-muted-foreground">{p.price6} 6-month</span>
                    </div>
                    <div className="text-xs mt-1 text-muted-foreground">{p.desc}</div>
                    <div className="text-xs mt-1.5 text-muted-foreground/70">
                      Activation: <span className="font-medium text-foreground">{p.act12}</span> (12-mo) · <span className="font-medium text-foreground">{p.act6}</span> (6-mo)
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs">Optional domain registration add-on available at <span className="font-semibold">R39/month</span> for clients who need a domain registered and managed on their behalf.</p>
            </SectionCard>
          </div>

          {/* Section 02 */}
          <div id="s02">
            <SectionCard num="02" icon={Check} title="Services Included">
              <p className="mb-4">Each package includes the following standard services:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5 h-4 w-4 rounded-full bg-accent/15 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-accent" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Section 03 */}
          <div id="s03">
            <SectionCard num="03" icon={ShieldCheck} title="Important Terms & Conditions">
              <ul className="space-y-2.5">
                {[
                  "Only content and design approved by the Client before launch will be used on the website.",
                  "No changes outside the approved scope will be made without a separate written agreement.",
                  "LunexWeb is responsible solely for maintaining the website and ensuring correct functionality.",
                  "Redesigns, additional pages, or work outside the agreed scope will be quoted and charged separately.",
                  "The Client is responsible for managing their own business content, branding, and operational information.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <ChevronRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          {/* Section 04 */}
          <div id="s04">
            <SectionCard num="04" icon={Clock} title="Contract Term">
              <p>
                This agreement is valid for a fixed minimum period of either{" "}
                <span className="font-semibold text-foreground">6 (six) months</span> or{" "}
                <span className="font-semibold text-foreground">12 (twelve) months</span> from the date of onboarding, as selected by the Client at signup. After the minimum term, the plan continues on a monthly basis until cancelled. Renewal terms will be agreed upon in writing prior to expiry.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[{ label: "6-Month Term", note: "Higher monthly rate" }, { label: "12-Month Term", note: "Best monthly rate" }].map((t) => (
                  <div key={t.label} className="rounded-xl border border-border bg-background p-4 text-center">
                    <div className="font-semibold text-foreground text-sm">{t.label}</div>
                    <div className="text-xs mt-1">{t.note}</div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Section 05 */}
          <div id="s05">
            <SectionCard num="05" icon={CreditCard} title="Payment Terms">
              <ul className="space-y-2.5">
                {[
                  <span>Monthly payments are due on the Client's <span className="font-semibold text-foreground">preferred payment date</span>, between the <span className="font-semibold text-foreground">1st and 7th</span> of each month, selected at the time of onboarding.</span>,
                  <span>Payment requests are sent via <span className="font-semibold text-foreground">Trailbill.com</span>. The Client will receive a payment request on their chosen date each month.</span>,
                  "Non-payment will result in the suspension or removal of the website.",
                  "A reconnection fee of 25% of the monthly package price applies after any suspension due to non-payment.",
                  "LunexWeb reserves the right to withhold services until all outstanding amounts are settled.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ChevronRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          {/* Section 06 */}
          <div id="s06">
            <SectionCard num="06" icon={Globe} title="Domain Ownership">
              <p className="mb-3">By default, the Client is responsible for purchasing and renewing their own domain name. LunexWeb will point and configure the domain as part of the service.</p>
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-xs mb-3">
                <span className="font-semibold text-accent">Optional Domain Add-On — R39/month:</span> Where selected, LunexWeb registers and manages the domain on the Client's behalf for the duration of the agreement. Domain ownership remains with the Client at all times.
              </div>
              <p><span className="font-semibold text-foreground">All online presence content and assets remain the property of the Client at all times.</span></p>
            </SectionCard>
          </div>

          {/* Section 07 */}
          <div id="s07">
            <SectionCard num="07" icon={ArrowUpDown} title="Upgrades & Downgrades">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-background border border-border p-4">
                  <div className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1.5">
                    <span className="text-accent">↑</span> Upgrading
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> At any time</li>
                    <li className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> Pay the difference from next billing date</li>
                    <li className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> No new setup fee</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-background border border-border p-4">
                  <div className="font-semibold text-foreground text-sm mb-2 flex items-center gap-1.5">
                    <span className="text-muted-foreground">↓</span> Downgrading
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex gap-1.5"><ChevronRight className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> End of current minimum term only</li>
                    <li className="flex gap-1.5"><ChevronRight className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> 30 days written notice required</li>
                    <li className="flex gap-1.5"><ChevronRight className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" /> Excess content archived 30 days before removal</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Section 08 */}
          <div id="s08">
            <SectionCard num="08" icon={XCircle} title="Cancellation Policy">
              <p>
                Cancellation is only permitted upon completion of the full minimum contract term. Written notice must be submitted at least{" "}
                <span className="font-semibold text-foreground">30 days prior</span> to the renewal date. Early cancellation requests will be reviewed on a case-by-case basis and may be subject to an early termination fee equivalent to the remaining months of the minimum term.
              </p>
            </SectionCard>
          </div>

          {/* Section 09 */}
          <div id="s09">
            <SectionCard num="09" icon={FileCheck} title="Acceptance of Terms">
              <p>
                By completing the sign request form below, the Client confirms that they have read, understood, and agreed to all terms and conditions outlined in this Website Service Agreement. This agreement is legally binding upon submission and confirmation by LunexWeb.
              </p>
            </SectionCard>
          </div>
        </div>

        {/* Sign Request Form */}
        <div id="sign" className="bg-secondary border-t border-border py-20">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                <MessageCircle className="h-3.5 w-3.5" /> Sign Request
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Fill in your details below. We'll receive your request on WhatsApp, confirm your package and preferred payment date, and send you a final copy for your records.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl bg-card border border-border p-12 text-center">
                <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Almost done — one last step!</h3>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  Your signed contract PDF has been downloaded. Now attach it to the WhatsApp chat that just opened before you send.
                </p>
                <div className="mt-6 space-y-3 max-w-sm mx-auto text-left">
                  <div className="rounded-xl bg-secondary border border-border p-4 flex items-start gap-3">
                    <Download className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">1. Find your PDF</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Check your <strong>Downloads folder</strong> for <span className="font-mono text-xs">LunexWeb-Agreement-[YourName].pdf</span></p>
                      {pdfBlob && (
                        <a
                          href={pdfBlob.url}
                          download={pdfBlob.filename}
                          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent text-white px-3 py-1.5 text-xs font-semibold hover:opacity-90 transition"
                        >
                          <Download className="h-3 w-3" /> Download again
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="rounded-xl bg-secondary border border-border p-4 flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">2. Attach it on WhatsApp</p>
                      <p className="text-xs text-muted-foreground mt-0.5">In the WhatsApp chat that opened, tap the <strong>paperclip / attach icon</strong>, select the PDF, then send.</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-accent">3. We'll confirm within 24 hours</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Once we receive your signed agreement, we'll confirm and get your website started.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl bg-card border border-border p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required className={inputCls} />
                  </Field>
                  <Field label="Business Name">
                    <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Your business name" required className={inputCls} />
                  </Field>
                </div>

                {/* Step 1 — Term */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Step 1 — Choose your contract term</p>
                  <div className="grid grid-cols-2 gap-3">
                    {(["6 months", "12 months"] as const).map((t) => (
                      <button
                        key={t} type="button"
                        onClick={() => setForm((p) => ({ ...p, term: t, package: "", domain: false }))}
                        className={`rounded-xl border p-4 text-left transition-all ${
                          form.term === t ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-background hover:border-accent/40"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            form.term === t ? "border-accent bg-accent" : "border-border"
                          }`}>
                            {form.term === t && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="font-semibold text-sm">{t === "12 months" ? "12-Month (Yearly)" : "6-Month"}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground ml-6">{t === "12 months" ? "Best monthly rate" : "Higher monthly rate"}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 — Package (only if term selected) */}
                {form.term && (
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Step 2 — Choose your package</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {Object.entries(PLAN_PRICES[form.term]).map(([plan, prices]) => (
                        <button
                          key={plan} type="button"
                          onClick={() => setForm((p) => ({ ...p, package: plan }))}
                          className={`rounded-xl border p-4 text-left transition-all ${
                            form.package === plan ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-background hover:border-accent/40"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">{plan}</span>
                            {plan === "Business" && <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Popular</span>}
                          </div>
                          <p className="mt-1 text-base font-bold text-accent">{prices.monthly}<span className="text-xs font-normal text-muted-foreground">/mo</span></p>
                          <p className="text-xs text-muted-foreground mt-0.5">Activation: <span className="font-medium text-foreground">{prices.activation}</span></p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3 — Domain add-on (only if package selected) */}
                {form.package && (
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Step 3 — Do you have a domain?</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => setForm((p) => ({ ...p, domain: false }))}
                        className={`rounded-xl border p-4 text-left transition-all ${
                          !form.domain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-background hover:border-accent/40"
                        }`}>
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            !form.domain ? "border-accent bg-accent" : "border-border"
                          }`}>{!form.domain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}</div>
                          <span className="font-semibold text-sm">Yes, I have one</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground ml-6">No extra charge</p>
                      </button>
                      <button type="button" onClick={() => setForm((p) => ({ ...p, domain: true }))}
                        className={`rounded-xl border p-4 text-left transition-all ${
                          form.domain ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-background hover:border-accent/40"
                        }`}>
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            form.domain ? "border-accent bg-accent" : "border-border"
                          }`}>{form.domain && <div className="h-1.5 w-1.5 rounded-full bg-white" />}</div>
                          <span className="font-semibold text-sm">No, add one for me</span>
                        </div>
                        <p className="mt-1 text-xs text-accent font-medium ml-6">+R39/month</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* Price Summary */}
                {form.package && selectedPricing && (
                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 space-y-2">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">Your plan summary</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Plan</span>
                      <span className="font-semibold">{form.package} · {form.term}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly fee</span>
                      <span className="font-bold text-foreground">{domainExtra || selectedPricing.monthly}{form.domain && selectedPricing.monthly !== "Custom" ? " (incl. domain)" : ""}/mo</span>
                    </div>
                    {form.domain && <div className="flex justify-between text-xs text-muted-foreground"><span>└ Base {selectedPricing.monthly}/mo + Domain R39/mo</span></div>}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Activation fee (once-off)</span>
                      <span className="font-semibold">{activationExtra || selectedPricing.activation}{form.domain && selectedPricing.activation !== "Custom" ? " (incl. domain)" : ""}</span>
                    </div>
                    <div className="border-t border-accent/20 pt-2 text-xs text-muted-foreground">
                      Monthly billing starts once your presence goes live — not during build.
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Contact Number">
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="082 000 0000" required className={inputCls} />
                  </Field>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">Email <span className="text-muted-foreground font-normal text-xs">(optional)</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputCls} />
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
                  <input
                    type="checkbox" id="agreed" name="agreed" checked={form.agreed} onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-border accent-accent flex-shrink-0"
                  />
                  <label htmlFor="agreed" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I confirm that I have read and understood the Website Service Agreement above, and I agree to be bound by its terms and conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!isValid || generating}
                  className="w-full rounded-full bg-gradient-brand text-white py-3.5 font-semibold text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {generating ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Generating your contract PDF...</>
                  ) : (
                    <><Download className="h-4 w-4" /> Download Contract &amp; Send via WhatsApp</>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Clicking will download your signed contract PDF and open WhatsApp. Attach the PDF to the WhatsApp chat before sending.
                </p>
              </form>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
