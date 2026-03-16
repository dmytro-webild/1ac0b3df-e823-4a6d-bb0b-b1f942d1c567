import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohana - Authentic South Asian Fine Dining in Paris, France",
  description: "Experience premium South Asian cuisine at Sohana in Paris. Authentic flavors, traditional recipes, and exceptional hospitality. Reserve your table today.",
  keywords: "South Asian restaurant Paris, fine dining France, Indian cuisine, authentic South Asian, premium restaurant, Tandoori, Biryani",
  metadataBase: new URL("https://sohana.fr"),
  alternates: {
    canonical: "https://sohana.fr",
  },
  openGraph: {
    title: "Sohana - Authentic South Asian Fine Dining",
    description: "Experience the warmth of traditional South Asian cuisine elevated to fine dining excellence at Sohana in Paris.",
    url: "https://sohana.fr",
    siteName: "Sohana Restaurant",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157779.jpg",
        alt: "Sohana fine dining restaurant interior",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohana - South Asian Fine Dining in Paris",
    description: "Discover authentic South Asian cuisine at Sohana. Premium ingredients, traditional recipes, warm hospitality.",
    images: ["http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157779.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${nunitoSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}