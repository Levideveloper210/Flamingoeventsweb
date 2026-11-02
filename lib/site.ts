export const BUSINESS = {
  name: "Flamingo Events & Rentals",
  fullName: "Flamingo Events and Rentals Abuja",
  phone: "+234 911 454 0253",
  whatsapp: "2349114540253",
  address: "Area 2, Block 4, Flat 3, Ajaokuta Street, Garki, Abuja 900001, Federal Capital Territory, Nigeria",
  rating: "4.9",
  reviewCount: 9,
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Flamingo+Events+and+Rentals+Abuja"
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const images = {
  hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90",
  flowers: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
  table: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  candles: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
  bouquet: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1000&q=85",
  decor: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
  arch: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1000&q=85",
  lamp: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
  cake: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85",
  venue: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85",
  drape: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85"
};

export const rentalCategories = [
  { name: "Flowers & Bouquets", description: "Floral details that bring softness, colour and life to your celebration.", image: images.flowers },
  { name: "Centrepieces", description: "Thoughtful table accents that make every place setting feel special.", image: images.table },
  { name: "Moroccan Lamps", description: "Decorative lighting to add warmth and a little magic to your space.", image: images.lamp },
  { name: "Luxury Cake Stands", description: "A beautiful focal point for your cake and dessert display.", image: images.cake },
  { name: "Backdrops", description: "Statement settings for ceremonies, photographs and special moments.", image: images.wedding },
  { name: "Love Arches", description: "Romantic arch details for proposals, weddings and engagements.", image: images.arch },
  { name: "Fabrics & Draping", description: "Soft layers and elegant finishes for your venue styling.", image: images.drape },
  { name: "Charger Plates", description: "Polished finishing touches for a considered tablescape.", image: images.decor },
  { name: "Neon Lights", description: "Personalise your event scene with a modern decorative glow.", image: images.lamp },
  { name: "Chandeliers", description: "Elegant lighting details for a memorable atmosphere.", image: images.venue },
  { name: "Plinths", description: "Versatile display pieces for cakes, florals and event styling.", image: images.cake },
  { name: "Other Decor Items", description: "Explore more decorative pieces for your event concept.", image: images.candles }
];

export const reviews = [
  { name: "Ruth Oryongo", quote: "They have super neat flowers, a beautiful environment and top-notch customer service. I also rented centrepieces and a Moroccan lamp." },
  { name: "Sunday Michael", quote: "They have very new and beautiful centrepieces. Their customer service is top-notch!" },
  { name: "Umar Sule Adi", quote: "I rented a bouquet for my sister and they delivered swiftly. The flower was also very neat. I recommend them." },
  { name: "Bukata Abache Musa", quote: "I have a good review for you. Your light is very, very bright. You just gained a customer." },
  { name: "Obam Jonah", quote: "I rented their luxurious cake stand. I really loved it, and they delivered too." },
  { name: "Eluke Elizabeth", quote: "Exceptional service, definitely using them again." },
  { name: "JP Floriest", quote: "Their service was excellent, and everything was handled professionally. Highly recommended!" },
  { name: "Mattolina Onomourhoya", quote: "Their decoration rental items are new, clean and very neat. They have flowers, love arches, centrepieces and fabrics for draping." },
  { name: "Folashade Janet Afolabi", quote: "Beautiful. Excellent customer service." }
];
