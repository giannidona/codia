import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["500"],
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
      <body className={`bg-black ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
