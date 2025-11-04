import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "HEADPHONES", href: "/headphones" },
    { name: "SPEAKERS", href: "/speakers" },
    { name: "EARPHONES", href: "/earphones" },
  ];

  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6 pb-12 pt-16 md:px-10 lg:px-[165px] relative">
        {/* Top Border Accent */}
        <div className="mb-12 h-1 w-[101px] bg-primary absolute top-0" />

        {/* Top Section - Logo & Navigation */}
        <div className="mb-12 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            audiophile
          </Link>

          {/* Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
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
        </div>

        {/* Middle Section - Description & Social Icons */}
        <div className="mb-12 grid gap-12 lg:grid-cols-2">
          {/* Description */}
          <div>
            <p className="text-[15px] font-medium leading-[25px] text-white/50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden items-end justify-end lg:flex">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" fill="currentColor" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" fill="currentColor" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social Icons (Mobile/Tablet) */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between lg:items-start">
          {/* Copyright */}
          <p className="text-[15px] font-bold text-white/50">
            Copyright 2021. All Rights Reserved
          </p>

          {/* Social Icons - Mobile & Tablet */}
          <div className="flex gap-4 lg:hidden">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" fill="currentColor" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" fill="currentColor" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
