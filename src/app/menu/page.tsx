"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { ChefHat, Calendar, Star } from "lucide-react";

export default function MenuPage() {
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

      <div id="menu-products" data-section="menu-products">
        <ProductCardThree
          title="Our Complete Menu"
          description="Explore the full range of our signature dishes and specialty preparations. Each item is crafted with care using the finest ingredients and traditional South Asian culinary techniques."
          tag="Full Selection"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "butter-chicken",
              name: "Butter Chicken Tandoori",
              price: "€28",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-meat-slices-with-mushed-potatoes-seasonings-wooden-desk-meat-bread-meal-potato-food-dish_140725-96621.jpg?_wi=2",
            },
            {
              id: "biryani-royal",
              name: "Royal Biryani",
              price: "€32",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-grated-carrot-salad-with-garlic-walnuts-seasonings-dark-blue-rustic-desk-health-vegetable-diet-ripe-salad-color_140725-121253.jpg?_wi=2",
            },
            {
              id: "tandoori-salmon",
              name: "Tandoori Salmon",
              price: "€35",
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-salmon-fillets-ice-with-rosemary-spices_84443-74003.jpg?_wi=2",
            },
          ]}
        />
      </div>

      <div id="menu-testimonials" data-section="menu-testimonials">
        <TestimonialCardFive
          title="Guest Favorites"
          description="Discover why our guests keep coming back for these beloved dishes."
          tag="Most Loved"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              name: "Charlotte Martin",
              date: "2024-01-15",
              title: "Butter Chicken is Perfection",
              quote: "The butter chicken is absolutely divine. The creamy sauce and tender chicken make it my go-to order every time I visit.",
              tag: "Guest Favorite",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-mature-woman-smiling_23-2148407645.jpg",
            },
            {
              id: "2",
              name: "Alexandre Petit",
              date: "2024-01-10",
              title: "Royal Biryani - A Must Try",
              quote: "The biryani is an experience in itself. Every grain of rice is perfectly cooked with exquisite spices and tender meat.",
              tag: "Guest Favorite",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-9486.jpg",
            },
            {
              id: "3",
              name: "Isabelle Rousseau",
              date: "2024-01-05",
              title: "Tandoori Salmon is Exceptional",
              quote: "The tandoori salmon is perfectly spiced and cooked to flaky perfection. A seafood lover's dream.",
              tag: "Guest Favorite",
              avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-office-smiling_273609-5131.jpg",
            },
          ]}
        />
      </div>

      <div id="menu-contact" data-section="menu-contact">
        <ContactFaq
          ctaTitle="Ready to Experience Our Menu?"
          ctaDescription="Book your table now and let our culinary team take you on an unforgettable gastronomic journey through authentic South Asian cuisine."
          ctaButton={{
            text: "Reserve Your Seat",
            href: "/reservations",
          }}
          ctaIcon={Calendar}
          useInvertedBackground={false}
          animationType="slide-up"
          faqs={[
            {
              id: "menu-changes",
              title: "Does the menu change seasonally?",
              content: "Yes, our menu evolves with the seasons to showcase the freshest ingredients. We always maintain our signature dishes while adding seasonal specials.",
            },
            {
              id: "special-requests",
              title: "Can you accommodate special requests?",
              content: "Absolutely. If you have specific preferences or dietary needs, please inform us when making your reservation and our chef will be happy to prepare something special.",
            },
            {
              id: "tasting-menu",
              title: "Do you offer a tasting menu?",
              content: "Yes, we offer a curated tasting menu experience. Contact us for details and pricing on this premium option.",
            },
            {
              id: "pairing-options",
              title: "What beverage pairings do you recommend?",
              content: "Our sommelier recommends carefully selected wines, craft cocktails, and non-alcoholic beverages that complement each dish perfectly.",
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