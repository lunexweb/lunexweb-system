import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground pl-4 pr-5 py-3 font-medium shadow-glow hover:scale-105 transition"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
