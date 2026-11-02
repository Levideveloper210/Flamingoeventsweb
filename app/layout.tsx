import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "Flamingo Events & Rentals Abuja | Beautiful Event Details",
  description: "Explore event decoration rentals, floral details, centrepieces and styling inspiration from Flamingo Events and Rentals in Garki, Abuja.",
  openGraph: {
    title: "Flamingo Events & Rentals Abuja",
    description: "Creating beautiful moments, one event at a time.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><FloatingWhatsApp/></body></html>;
}
