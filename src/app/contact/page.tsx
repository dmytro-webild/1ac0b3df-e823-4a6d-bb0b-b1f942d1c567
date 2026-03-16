"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
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
          ctaTitle="Get in Touch with Sohana"
          ctaDescription="Have questions about our cuisine, menu, or want to arrange a special event? We'd love to hear from you. Contact us and let us help make your dining experience exceptional."
          ctaButton={{
            text: "Send a Message",
            href: "mailto:info@sohana.fr",
          }}
          ctaIcon={Mail}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "hours",
              title: "What are your hours of operation?",
              content:
                "We are open Tuesday through Sunday from 12:00 PM to 11:00 PM. We are closed on Mondays. For special occasions and private events, we can arrange extended hours.",
            },
            {
              id: "location",
              title: "Where is Sohana located?",
              content:
                "Sohana is situated in the heart of Paris, in the prestigious 8th arrondissement. Our address is 123 Avenue Montaigne, Paris, France. We are easily accessible by metro and offer nearby parking.",
            },
            {
              id: "contact-methods",
              title: "How can I contact you?",
              content:
                "You can reach us by phone at +33 1 23 45 67 89 or by email at info@sohana.fr. For reservations, visit our reservations page or call our dedicated reservations line. We also respond to inquiries through our social media channels.",
            },
            {
              id: "special-requests",
              title: "Can you accommodate special requests?",
              content:
                "Absolutely! Whether it's celebrating a milestone, arranging a private event, or discussing specific culinary preferences, we love working with our guests to create memorable experiences. Please reach out to discuss your needs.",
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