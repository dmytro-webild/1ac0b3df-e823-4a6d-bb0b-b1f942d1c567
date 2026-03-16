"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Sparkles, Heart, ChefHat, Globe, Users, Award, Star, Calendar } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Authentic South Asian Flavors in the Heart of France"
          description="Experience the warmth of traditional South Asian cuisine elevated to fine dining excellence. Sohana brings generations of culinary mastery, fresh ingredients, and genuine hospitality to every plate."
          tag="Premium Fine Dining"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "View Menu",
              href: "/menu",
            },
            {
              text: "Reserve a Table",
              href: "/reservations",
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157779.jpg"
          imageAlt="Elegant Sohana restaurant interior with warm lighting and fine dining setup"
          mediaAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          testimonials={[
            {
              name: "Marie Dupont",
              handle: "Food Critic",
              testimonial: "Sohana is a revelation - authentic flavors beautifully presented with impeccable service.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/carefree-woman-with-alluring-appearance-wonderful-shining-hair-wearing-black-leather-jacket_176532-8115.jpg",
            },
            {
              name: "Jean Claude",
              handle: "Restaurant Enthusiast",
              testimonial: "The best South Asian dining experience in France. Every dish tells a story.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-corrects-belt-fees-groom-man-s-hands-dressing-man-buttons-pants-jeans_8353-5893.jpg",
            },
            {
              name: "Sophie Laurent",
              handle: "Travel Writer",
              testimonial: "A culinary journey through South Asia without leaving Paris. Extraordinary.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_8353-12611.jpg",
            },
            {
              name: "Philippe Rousseau",
              handle: "Michelin Guide",
              testimonial: "Sohana elevates traditional cuisine to fine dining standards with remarkable skill.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-confident-middle-aged-businessman-black-background_176420-5559.jpg",
            },
          ]}
          testimonialRotationInterval={6000}
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
            },
            {
              id: "fresh-ingredients",
              title: "Premium Fresh Ingredients",
              descriptions: [
                "We source the finest spices, fresh produce, and premium proteins from trusted suppliers. Every ingredient is selected for quality, flavor, and sustainability, ensuring excellence in every dish.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/black-tomatoes-female-hands-closeup-cooking-kitchen_169016-39507.jpg",
            },
            {
              id: "warm-hospitality",
              title: "Genuine Warm Hospitality",
              descriptions: [
                "Hospitality is at the heart of South Asian culture. Our team treats every guest as family, ensuring your dining experience is comfortable, welcoming, and unforgettable from arrival to departure.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/person-paying-using-nfc-technology_23-2149893759.jpg",
            },
          ]}
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
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-meat-slices-with-mushed-potatoes-seasonings-wooden-desk-meat-bread-meal-potato-food-dish_140725-96621.jpg",
            },
            {
              id: "biryani-royal",
              name: "Royal Biryani",
              price: "€32",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-grated-carrot-salad-with-garlic-walnuts-seasonings-dark-blue-rustic-desk-health-vegetable-diet-ripe-salad-color_140725-121253.jpg",
            },
            {
              id: "tandoori-salmon",
              name: "Tandoori Salmon",
              price: "€35",
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-salmon-fillets-ice-with-rosemary-spices_84443-74003.jpg",
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
            },
            {
              id: "2",
              name: "Alexandre Petit",
              date: "2024-01-10",
              title: "Best South Asian Dining in Paris",
              quote: "Sohana has set a new standard for South Asian cuisine in France. The authenticity combined with fine dining elegance is remarkable.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-9486.jpg",
            },
            {
              id: "3",
              name: "Isabelle Rousseau",
              date: "2024-01-05",
              title: "Perfect for Special Occasions",
              quote: "We celebrated our anniversary at Sohana. The ambiance, food, and hospitality made it truly unforgettable. Highly recommended!",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-office-smiling_273609-5131.jpg",
            },
            {
              id: "4",
              name: "Marc Beaumont",
              date: "2023-12-28",
              title: "A Culinary Journey Worth Taking",
              quote: "From the moment we arrived until we left, everything was perfect. The chef's passion for the cuisine shines through in every plate.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-posing-as-professional_114579-15939.jpg",
            },
            {
              id: "5",
              name: "Sophie Leclerc",
              date: "2023-12-20",
              title: "Authentic, Elegant, Delicious",
              quote: "I was skeptical about South Asian fine dining, but Sohana completely changed my perspective. This place is pure magic.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",
            },
            {
              id: "6",
              name: "Thomas Gaston",
              date: "2023-12-15",
              title: "Worth Every Euro",
              quote: "Premium pricing for premium quality. The entire experience justifies every aspect of Sohana's reputation.",
              tag: "Verified Guest",
              avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-businessman-smiling_74855-1511.jpg",
            },
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured In"
          description="Sohana has been recognized by leading culinary publications and travel guides for excellence in fine dining."
          tag="Media Recognition"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Michelin Guide France",
            "Le Figaro Cuisine",
            "Paris Bobo Magazine",
            "Gastronomy Weekly",
            "French Travel Digest",
            "Elite Restaurant Rankings",
            "Cuisine Excellence",
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/set-flat-design-catering-logos_23-2149008495.jpg",
            "http://img.b2bpic.net/free-vector/retro-badges_23-2147503766.jpg",
            "http://img.b2bpic.net/free-vector/flat-bastille-day-badge-collection_23-2148966638.jpg",
            "http://img.b2bpic.net/free-vector/restaurant-logo-template_23-2149493624.jpg",
            "http://img.b2bpic.net/free-vector/hand-drawn-travel-agency-labels_23-2149645617.jpg",
            "http://img.b2bpic.net/free-vector/gradient-film-awards-ceremony-background_52683-157456.jpg",
            "http://img.b2bpic.net/free-vector/retro-restaurant-logo_23-2148474165.jpg",
          ]}
        />
      </div>

      <div id="contact-section" data-section="contact-section">
        <ContactFaq
          ctaTitle="Ready to Dine with Us?"
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
              content: "We recommend smart casual to business casual attire. Jackets are appreciated but not required. We want you to feel comfortable while maintaining the elegance of our establishment.",
            },
            {
              id: "dietary-restrictions",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. We can accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us when making your reservation so our chef can prepare a special menu.",
            },
            {
              id: "private-events",
              title: "Can we host private events?",
              content: "Yes, Sohana is available for private dining events, celebrations, and special occasions. Please contact us directly to discuss your event requirements.",
            },
            {
              id: "wine-selection",
              title: "Do you have wine pairings?",
              content: "Our sommelier has carefully curated a selection of wines and beverages that pair beautifully with our South Asian cuisine. Wine pairing recommendations are available upon request.",
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