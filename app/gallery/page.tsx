import { PageHero } from "@/components/page-hero";
import { images } from "@/lib/site";
const gallery = [
 ["Floral details", images.flowers], ["Elegant tablescapes", images.table], ["Wedding atmosphere", images.wedding], ["Romantic styling", images.arch], ["Decorative lighting", images.lamp], ["Cake display inspiration", images.cake], ["Event setting", images.venue], ["Soft draping", images.drape], ["Celebration details", images.decor]
];
export default function Gallery() {
 return <><PageHero eyebrow="VISUAL INSPIRATION" title="A gallery of beautiful details." text="Explore ideas, textures and event styling inspiration for your next celebration."/><section className="section"><div className="container"><div className="gallery-grid">{gallery.map(([name, image], i) => <figure className={`gallery-item gallery-item-${i % 3}`} key={name}><img src={image} alt={`${name} event inspiration`} loading="lazy"/><figcaption><span>0{i + 1}</span>{name}</figcaption></figure>)}</div><p className="catalogue-note">These are illustrative inspiration photographs, not confirmed photographs of previous Flamingo events. Replace them with the business’s own event and inventory photographs when available.</p></div></section></>;
}
