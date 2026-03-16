"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { ChefHat, Globe, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
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
        { label: "Newsletter", href: "/contact" },
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

      <div id="about" data-section="about">
        <AboutMetric
          title="Sohana's Story"
          metrics={[
            {
              icon: ChefHat,
              label: "Years of Culinary Excellence",
              value: "25+",
            },
            {
              icon: Globe,
              label: "Authentic Regional Cuisines",
              value: "4",
            },
            {
              icon: Users,
              label: "Happy Guests Annually",
              value: "5000+",
            },
            {
              icon: Award,
              label: "Premium Ingredients Sourced",
              value: "100%",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySeven
          title="What Makes Sohana Special"
          description="From authentic recipes passed down through generations to our commitment to fresh, premium ingredients, every element of Sohana reflects our passion for excellence."
          tag="Our Philosophy"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={false}
          features={[
            {
              id: "authentic-recipes",
              title: "Authentic Traditional Recipes",
              descriptions: [
                "Our culinary heritage spans generations. Each recipe is carefully preserved and executed with precision, honoring the traditions of South Asian cuisine while meeting the highest standards of French fine dining.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-variety-oriental-spices_23-2148294999.jpg",
              imageAlt: "spices herbs traditional cooking ingredients",
            },
            {
              id: "fresh-ingredients",
              title: "Premium Fresh Ingredients",
              descriptions: [
                "We source the finest spices, fresh produce, and premium proteins from trusted suppliers. Every ingredient is selected for quality, flavor, and sustainability, ensuring excellence in every dish.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/black-tomatoes-female-hands-closeup-cooking-kitchen_169016-39507.jpg",
              imageAlt: "fresh organic vegetables ingredients market",
            },
            {
              id: "warm-hospitality",
              title: "Genuine Warm Hospitality",
              descriptions: [
                "Hospitality is at the heart of South Asian culture. Our team treats every guest as family, ensuring your dining experience is comfortable, welcoming, and unforgettable from arrival to departure.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/person-paying-using-nfc-technology_23-2149893759.jpg",
              imageAlt: "restaurant staff hospitality service welcoming",
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