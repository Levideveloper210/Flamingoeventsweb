 "use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppButton } from "./whatsapp";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Rentals", "/rentals"], ["Gallery", "/gallery"], ["Reviews", "/reviews"], ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">F</span>
          <span><strong>FLAMINGO</strong><small>EVENTS & RENTALS · ABUJA</small></span>
        </Link>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        <nav className={open ? "main-nav nav-open" : "main-nav"}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <WhatsAppButton label="Enquire now" className="nav-cta" />
        </nav>
      </div>
    </header>
  );
}
