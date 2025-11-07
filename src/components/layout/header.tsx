"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "HEADPHONES", href: "/headphones" },
    { name: "SPEAKERS", href: "/speakers" },
    { name: "EARPHONES", href: "/earphones" },
  ];

  return (
    <header className="bg-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-[165px]">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between border-b border-white/10 py-8 lg:py-9">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4 text-white" />
            ) : (
              <Menu className="h-4 w-4 text-white" />
            )}
          </button>

          {/* Logo - Centered on mobile, left on desktop */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 text-[25px] font-bold text-white lg:relative lg:left-0 lg:translate-x-0"
          >
            audiophile
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block lg:ml-auto lg:mr-auto">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cart Icon */}
          <button
            onClick={openCart}
            className="relative ml-auto lg:ml-0"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-[23px] w-[23px] text-white hover:text-primary transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden">
            <ul className="space-y-4 px-6 py-8 md:px-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
