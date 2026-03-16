"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Calendar, Mail, Phone } from "lucide-react";

export default function ReservationsPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Restaurant",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Reservations",
      items: [
        { label: "Book a Table", href: "/reservations" },
        { label: "Private Events", href: "/contact" },
        { label: "Group Bookings", href: "/contact" },
        { label: "Gift Certificates", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Phone", href: "tel:+33123456789" },
        { label: "Email", href: "mailto:info@sohana.fr" },
        { label: "Location", href: "/contact" },
        { label: "Hours", href: "/contact" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "Instagram", href: "https://instagram.com/sohanafood" },
        { label: "Facebook", href: "https://facebook.com/sohanafood" },
        { label: "Newsletter", href: "#newsletter" },
        { label: "Blog", href: "/contact" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="grid"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Sohana"
          navItems={navItems}
          button={{
            text: "Reserve a Table",
            href: "/reservations",
          }}
        />
      </div>

      <div id="contact-section" data-section="contact-section">
        <ContactFaq
          ctaTitle="Ready to Reserve Your Table?"
          ctaDescription="Experience the magic of authentic South Asian cuisine at Sohana. Reserve your table now and embark on a culinary journey you won't forget."
          ctaButton={{
            text: "Book Your Table",
            href: "/reservations",
          }}
          ctaIcon={Calendar}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "dress-code",
              title: "What is the dress code?",
              content:
                "We recommend smart casual to business casual attire. Jackets are appreciated but not required. We want you to feel comfortable while maintaining the elegance of our establishment.",
            },
            {
              id: "dietary-restrictions",
              title: "Do you accommodate dietary restrictions?",
              content:
                "Absolutely. We can accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us when making your reservation so our chef can prepare a special menu.",
            },
            {
              id: "private-events",
              title: "Can we host private events?",
              content:
                "Yes, Sohana is available for private dining events, celebrations, and special occasions. Please contact us directly to discuss your event requirements.",
            },
            {
              id: "wine-selection",
              title: "Do you have wine pairings?",
              content:
                "Our sommelier has carefully curated a selection of wines and beverages that pair beautifully with our South Asian cuisine. Wine pairing recommendations are available upon request.",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 Sohana Restaurant. All rights reserved. Authentic South Asian Fine Dining in France."
        />
      </div>
    </ThemeProvider>
  );
}