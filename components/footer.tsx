import Link from "next/link";
import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS, whatsappUrl } from "@/lib/site";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-top">
      <div className="footer-brand">
        <Link href="/" className="brand brand-light"><span className="brand-mark">F</span><span><strong>FLAMINGO</strong><small>EVENTS & RENTALS · ABUJA</small></span></Link>
        <p>Beautiful details. Thoughtful styling. Memorable celebrations.</p>
        <a className="footer-social" href={whatsappUrl("Hello Flamingo Events and Rentals, I would like to make an enquiry.")} target="_blank" rel="noreferrer"><Instagram size={16}/> Connect with us <ArrowUpRight size={14}/></a>
      </div>
      <div><h4>Explore</h4><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/rentals">Rental catalogue</Link><Link href="/gallery">Gallery</Link><Link href="/reviews">Customer reviews</Link></div>
      <div><h4>Get in touch</h4><p><Phone size={15}/> {BUSINESS.phone}</p><p><MapPin size={15}/> Garki, Abuja, Nigeria</p><a href={whatsappUrl("Hello Flamingo, I would like to enquire about your rentals.")} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={14}/></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Flamingo Events and Rentals Abuja.</span><span>Designed for beautiful moments.</span></div>
  </footer>;
}
