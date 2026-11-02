import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { BUSINESS, whatsappUrl, rentalCategories, reviews } from "@/lib/site";

export function CategoryCards({ limit }: { limit?: number }) {
  return <div className="category-grid">{rentalCategories.slice(0, limit || rentalCategories.length).map((item, i) => <article className="category-card" key={item.name}>
    <div className="category-image"><img src={item.image} alt={`${item.name} event rental inspiration`} loading="lazy"/><span className="image-number">0{i + 1}</span></div>
    <div className="category-info"><h3>{item.name}</h3><p>{item.description}</p><a href={whatsappUrl(`Hello ${BUSINESS.fullName}, I am interested in ${item.name}. Please let me know availability and pricing.`)} target="_blank" rel="noreferrer" className="text-link">Enquire about this <ArrowUpRight size={15}/></a></div>
  </article>)}</div>;
}

export function ReviewCards({ limit }: { limit?: number }) {
  return <div className="review-grid">{reviews.slice(0, limit || reviews.length).map((review) => <article className="review-card" key={review.name}>
    <div className="stars" aria-label="5 out of 5 stars"><Star/><Star/><Star/><Star/><Star/></div>
    <p>“{review.quote}”</p><div className="review-author"><span className="avatar">{review.name.charAt(0)}</span><strong>{review.name}</strong><span className="verified">Google review</span></div>
  </article>)}</div>;
}

export function RatingStrip() {
  return <div className="rating-strip"><div className="rating-score"><strong>{BUSINESS.rating}</strong><span><span className="stars">★★★★★</span><small>Google rating</small></span></div><div className="rating-divider"/><p><strong>{BUSINESS.reviewCount} customer reviews</strong><br/><span>Kind words from people who have experienced our service.</span></p></div>;
}
