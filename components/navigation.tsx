"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-bold text-xl text-primary hover:text-primary/90 transition"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/blue-drop-logo.png"
                alt="BlueDrop Plumbing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline">BlueDrop Plumbing</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition font-medium">
              Domov
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition font-medium">
              Služby
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition font-medium">
              O nás
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition font-medium">
              Kontakt
            </Link>
          </div>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone size={18} />
              <a href="tel:+421905123456" className="hover:text-primary/80 transition">
                +421 905 123 456
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-semibold transition"
            >
              Získať ponuku
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition font-medium">
              Domov
            </Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-primary transition font-medium">
              Služby
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition font-medium">
              O nás
            </Link>
            <Link href="/faq" className="block py-2 text-foreground hover:text-primary transition font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition font-medium">
              Kontakt
            </Link>
            <div className="mt-4 pt-4 border-t border-border flex gap-2">
              <a
                href="tel:+421905123456"
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-center hover:bg-primary/90 transition"
              >
                Zavolať
              </a>
              <Link
                href="/contact"
                className="flex-1 bg-accent text-accent-foreground py-2 rounded-lg font-semibold text-center hover:bg-accent/90 transition"
              >
                Získať ponuku
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
