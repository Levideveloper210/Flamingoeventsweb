import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Flower2, HeartHandshake, BadgeCheck } from "lucide-react";
import { images, BUSINESS, whatsappUrl } from "@/lib/site";
import { CategoryCards, RatingStrip, ReviewCards } from "@/components/cards";
import { WhatsAppButton } from "@/components/whatsapp";

export default function Home() {
  return <>
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(28,13,34,.82) 0%, rgba(28,13,34,.58) 48%, rgba(28,13,34,.12) 100%), url('${images.hero}')` }}>
      <div className="container hero-content"><span className="eyebrow eyebrow-light">EVENT STYLING · DECOR RENTALS · ABUJA</span><h1>Creating beautiful moments, <em>one event</em> at a time.</h1><p>Thoughtful details and elegant rental pieces to help make your celebration feel truly unforgettable.</p><div className="hero-actions"><Link href="/rentals" className="button button-gold">Explore our rentals <ArrowRight size={17}/></Link><WhatsAppButton label="Book / enquire on WhatsApp" className="button-outline"/></div><div className="hero-caption"><span className="caption-line"/><span>THE ART OF CELEBRATING BEAUTIFULLY</span></div></div>
      <div className="hero-stamp"><span>F</span><small>MADE FOR<br/>YOUR MOMENTS</small></div>
    </section>

    <section className="trust-section"><div className="container"><RatingStrip/></div></section>

    <section className="section intro-section"><div className="container intro-grid"><div className="intro-image"><img src={images.decor} alt="Elegant event table styling with flowers and candles"/><div className="image-note"><span>01 /</span> THE LITTLE DETAILS MATTER</div></div><div className="intro-copy"><span className="eyebrow">WELCOME TO FLAMINGO</span><h2>Every celebration deserves a <em>beautiful setting.</em></h2><p>From delicate floral touches to statement décor pieces, Flamingo Events and Rentals helps you bring your event vision together with beautiful details and attentive service.</p><p>Explore our rental collection and tell us what you are planning. We’ll help you find the right pieces for your occasion.</p><Link href="/about" className="text-link">Discover our story <ArrowUpRight size={16}/></Link></div></div></section>

    <section className="section soft-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">THE COLLECTION</span><h2>Details that make <em>the difference.</em></h2></div><Link href="/rentals" className="text-link">View all rentals <ArrowUpRight size={16}/></Link></div><CategoryCards limit={4}/></div></section>

    <section className="section"><div className="container feature-grid"><div className="feature-copy"><span className="eyebrow">WHY FLAMINGO</span><h2>Beautiful pieces. <em>Thoughtful service.</em></h2><p>We believe the right details can transform a space. Our focus is on helping you create a setting that feels considered, welcoming and memorable.</p><div className="feature-list"><div><Flower2/><span><strong>Details worth noticing</strong><small>Decorative pieces that bring your event vision to life.</small></span></div><div><BadgeCheck/><span><strong>Quality you can feel</strong><small>Clean, neat rental items and careful presentation.</small></span></div><div><HeartHandshake/><span><strong>Service with care</strong><small>Friendly support as you plan your celebration.</small></span></div></div><Link href="/services" className="text-link">Explore our services <ArrowUpRight size={16}/></Link></div><div className="feature-image"><img src={images.wedding} alt="Elegant wedding reception styling"/><div className="feature-tag"><Sparkles size={17}/><span>Make room for<br/><strong>beautiful moments.</strong></span></div></div></div></section>

    <section className="gallery-band"><div className="container gallery-band-inner"><div><span className="eyebrow eyebrow-light">A LITTLE INSPIRATION</span><h2>Set the scene for <em>something special.</em></h2><p>Browse visual inspiration for your next celebration.</p></div><Link href="/gallery" className="button button-gold">Explore the gallery <ArrowRight size={17}/></Link></div></section>

    <section className="section soft-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">KIND WORDS</span><h2>Our customers <em>say it best.</em></h2></div><Link href="/reviews" className="text-link">Read all reviews <ArrowUpRight size={16}/></Link></div><ReviewCards limit={3}/><div className="center-cta"><a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer" className="text-link">Read our Google reviews <ArrowUpRight size={16}/></a></div></div></section>

    <section className="cta-section"><div className="container cta-inner"><span className="eyebrow eyebrow-light">LET’S MAKE IT BEAUTIFUL</span><h2>Planning something <em>special?</em></h2><p>Tell us about your event and the pieces you have in mind. We’ll help you take the next step.</p><div className="hero-actions"><Link href="/contact" className="button button-gold">Start an enquiry <ArrowRight size={17}/></Link><a href={whatsappUrl("Hello Flamingo Events and Rentals, I am planning an event and would like to enquire.")} target="_blank" rel="noreferrer" className="button button-outline">Chat on WhatsApp</a></div></div></section>
  </>;
}
