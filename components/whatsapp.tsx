import { MessageCircle } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/lib/site";

export function WhatsAppButton({ label = "Chat on WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={whatsappUrl(`Hello ${BUSINESS.fullName}, I would like to make an enquiry.`)} target="_blank" rel="noreferrer">
      <MessageCircle size={17} /> {label}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsappUrl(`Hello ${BUSINESS.fullName}, I would like to make an enquiry.`)} target="_blank" rel="noreferrer" aria-label="Chat with Flamingo on WhatsApp">
      <MessageCircle size={25} />
    </a>
  );
}
