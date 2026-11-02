import { PageHero } from "@/components/page-hero";
import { RatingStrip, ReviewCards } from "@/components/cards";
import { BUSINESS } from "@/lib/site";
export default function Reviews() {
 return <><PageHero eyebrow="KIND WORDS" title="Experiences worth sharing." text="A few words from customers who have rented from or experienced Flamingo Events and Rentals."/><section className="section soft-section"><div className="container"><RatingStrip/><div className="section-heading reviews-heading"><div><span className="eyebrow">CUSTOMER FEEDBACK</span><h2>Thank you for <em>choosing Flamingo.</em></h2></div><a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer" className="button button-dark">Read our Google reviews</a></div><ReviewCards/></div></section></>;
}
