"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { ChefHat, Star } from "lucide-react";

export default function GalleryPage() {
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

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Signature Dishes"
          description="Discover our most celebrated creations, each crafted with precision and passion to showcase the depth of South Asian cuisine."
          tag="Chef's Selection"
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
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-meat-slices-with-mushed-potatoes-seasonings-wooden-desk-meat-bread-meal-potato-food-dish_140725-96621.jpg?_wi=3",
              imageAlt: "butter chicken tandoori Indian cuisine plated",
            },
            {
              id: "biryani-royal",
              name: "Royal Biryani",
              price: "€32",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-grated-carrot-salad-with-garlic-walnuts-seasonings-dark-blue-rustic-desk-health-vegetable-diet-ripe-salad-color_140725-121253.jpg?_wi=3",
              imageAlt: "biryani rice dish Indian cuisine fragrant",
            },
            {
              id: "tandoori-salmon",
              name: "Tandoori Salmon",
              price: "€35",
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-salmon-fillets-ice-with-rosemary-spices_84443-74003.jpg?_wi=3",
              imageAlt: "tandoori salmon fish grilled spiced plated",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Guests Say"
          description="Hear from the people who have experienced the magic of Sohana firsthand."
          tag="Guest Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              name: "Charlotte Martin",
              date: "2024-01-15",
              title: "An Exceptional Experience",
              quote: "The flavors were absolutely incredible. Every dish was a masterpiece, and the service was impeccable. We will definitely return.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-mature-woman-smiling_23-2148407645.jpg",
              avatarAlt: "professional woman headshot portrait studio",
            },
            {
              id: "2",
              name: "Alexandre Petit",
              date: "2024-01-10",
              title: "Best South Asian Dining in Paris",
              quote: "Sohana has set a new standard for South Asian cuisine in France. The authenticity combined with fine dining elegance is remarkable.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-9486.jpg",
              avatarAlt: "professional man headshot portrait studio",
            },
            {
              id: "3",
              name: "Isabelle Rousseau",
              date: "2024-01-05",
              title: "Perfect for Special Occasions",
              quote: "We celebrated our anniversary at Sohana. The ambiance, food, and hospitality made it truly unforgettable. Highly recommended!",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-office-smiling_273609-5131.jpg",
              avatarAlt: "professional woman portrait smiling friendly",
            },
            {
              id: "4",
              name: "Marc Beaumont",
              date: "2023-12-28",
              title: "A Culinary Journey Worth Taking",
              quote: "From the moment we arrived until we left, everything was perfect. The chef's passion for the cuisine shines through in every plate.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-posing-as-professional_114579-15939.jpg",
              avatarAlt: "professional man portrait smiling friendly",
            },
            {
              id: "5",
              name: "Sophie Leclerc",
              date: "2023-12-20",
              title: "Authentic, Elegant, Delicious",
              quote: "I was skeptical about South Asian fine dining, but Sohana completely changed my perspective. This place is pure magic.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",
              avatarAlt: "professional woman portrait diverse background",
            },
            {
              id: "6",
              name: "Thomas Gaston",
              date: "2023-12-15",
              title: "Worth Every Euro",
              quote: "Premium pricing for premium quality. The entire experience justifies every aspect of Sohana's reputation.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-businessman-smiling_74855-1511.jpg",
              avatarAlt: "professional man portrait diverse background",
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