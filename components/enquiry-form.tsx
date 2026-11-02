 "use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/lib/site";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = [
      ["Full name", "name"], ["Phone number", "phone"], ["Event type", "eventType"],
      ["Event date", "date"], ["Event location", "location"], ["Guest count", "guests"],
      ["Items / services required", "items"], ["Additional information", "notes"]
    ];
    const lines = fields.map(([label, key]) => `${label}: ${String(data.get(key) || "Not provided")}`);
    const message = `Hello ${BUSINESS.fullName}, I would like to check availability and request a quote.\\n\\n${lines.join("\\n")}\\n\\nPlease confirm availability and pricing. Thank you.`;
    setSent(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Full name *<input name="name" required placeholder="Your full name"/></label>
      <label>Phone number *<input name="phone" type="tel" required placeholder="+234..."/></label>
      <label>Event type *<select name="eventType" required defaultValue=""><option value="" disabled>Select event type</option><option>Wedding</option><option>Engagement</option><option>Proposal</option><option>Birthday</option><option>Corporate event</option><option>Other celebration</option></select></label>
      <label>Event date *<input name="date" type="date" required/></label>
      <label>Event location *<input name="location" required placeholder="Venue / area in Abuja"/></label>
      <label>Estimated guest count <input name="guests" type="number" min="1" placeholder="e.g. 100"/></label>
      <label className="full-field">Rental items or services required *<textarea name="items" required rows={3} placeholder="Tell us what you are interested in..."/></label>
      <label className="full-field">Additional information<textarea name="notes" rows={3} placeholder="Share your theme, colours or any special details (optional)."/></label>
    </div>
    <button className="button button-primary form-submit" type="submit">Check availability & get a quote <ArrowUpRight size={17}/></button>
    {sent && <p className="form-note">WhatsApp should open in a new tab. Send your message there to complete the enquiry.</p>}
    <p className="form-disclaimer">Submitting an enquiry does not confirm a booking. Our team will confirm availability and pricing with you.</p>
  </form>;
}
