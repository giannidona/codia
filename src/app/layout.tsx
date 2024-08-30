import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "500"],
});

export const metadata: Metadata = {
  title: "Codia",
  description: "La página web ideal para tu negocio, hecha por nosotros.",
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
      </body>
    </html>
  );
}
