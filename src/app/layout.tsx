import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { CartProvider } from "@/context/cart-context";
import { CartDialog } from "@/components/cart/cart-dialog";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Gear",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <CartDialog />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
