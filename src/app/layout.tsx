import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codiawebs.com"),
  title: "Codia",
  description: "La página web ideal para tu negocio, hecha por nosotros.",
  keywords: ["agencia", "desarrollo web", "landingpages", "e-commerce"],
  openGraph: {
    url: "https://codiawebs.com",
    images: [
      {
        url: "/logo-seo.png",
        width: 1200,
        height: 630,
        alt: "Codia Logo",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={`bg-gray-950 ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
