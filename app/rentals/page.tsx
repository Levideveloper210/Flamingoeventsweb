 "use client";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BUSINESS, rentalCategories, whatsappUrl } from "@/lib/site";

export default function Rentals() {
 const [active, setActive] = useState("All");
 const [query, setQuery] = useState("");
 const filters = ["All", ...rentalCategories.map(x => x.name)];
 const items = useMemo(() => rentalCategories.filter(x => (active === "All" || x.name === active) && `${x.name} ${x.description}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
 return <><PageHero eyebrow="THE RENTAL COLLECTION" title="Find the finishing touch." text="Browse our decorative rental categories and enquire about the pieces that fit your event vision."/><section className="section"><div className="container"><div className="catalogue-top"><div><span className="eyebrow">EXPLORE THE COLLECTION</span><h2>Pieces for <em>your occasion.</em></h2><p>Pricing and availability are confirmed by our team. Select an item to enquire on WhatsApp.</p></div><label className="search-box"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search rental categories"/></label></div><div className="filter-row">{filters.map(f => <button key={f} onClick={() => setActive(f)} className={active === f ? "filter-chip active" : "filter-chip"}>{f}</button>)}</div><div className="category-grid catalogue-grid">{items.map((item, i) => <article className="category-card" key={item.name}><div className="category-image"><img src={item.image} alt={`${item.name} rental inspiration`} loading="lazy"/><span className="image-number">0{i + 1}</span></div><div className="category-info"><h3>{item.name}</h3><p>{item.description}</p><span className="price-note">Request a quote</span><a className="text-link" href={whatsappUrl(`Hello ${BUSINESS.fullName}, I am interested in renting ${item.name}. Please let me know its availability and pricing.`)} target="_blank" rel="noreferrer">Enquire about this item <ArrowUpRight size={15}/></a></div></article>)}</div>{items.length === 0 && <p className="empty-state">No categories match your search. Try another term.</p>}<p className="catalogue-note">The images shown are visual references and may be replaced with Flamingo’s actual inventory photographs. Please confirm the exact item, availability and rental terms with the business.</p></div></section></>;
}
