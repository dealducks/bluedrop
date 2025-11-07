"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div className={`bg-white shadow-xl rounded-full px-6 lg:px-8 w-full mx-4 transition-all duration-300 ${isScrolled ? 'max-w-7xl' : 'max-w-6xl'}`}>
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg lg:text-xl text-primary hover:text-primary/90 transition"
          >
            <div className="relative w-9 h-9 lg:w-10 lg:h-10">
              <Image
                src="/blue-drop-logo.png"
                alt="BlueDrop Plumbing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline whitespace-nowrap">BlueDrop Plumbing</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-medium text-[15px]">
              Domov
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition font-medium text-[15px]">
              Služby
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium text-[15px]">
              O nás
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary transition font-medium text-[15px]">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition font-medium text-[15px]">
              Kontakt
            </Link>
          </div>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="tel:+421905123456" className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition text-[15px]">
              <Phone size={18} />
              <span className="whitespace-nowrap">+421 905 123 456</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#FF4526] hover:bg-[#E63E21] text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold transition text-[15px] whitespace-nowrap"
            >
              Získat ponuku
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-4 border-t border-gray-200">
            <Link href="/" className="block py-2.5 text-gray-700 hover:text-primary transition font-medium">
              Domov
            </Link>
            <Link href="/services" className="block py-2.5 text-gray-700 hover:text-primary transition font-medium">
              Služby
            </Link>
            <Link href="/about" className="block py-2.5 text-gray-700 hover:text-primary transition font-medium">
              O nás
            </Link>
            <Link href="/faq" className="block py-2.5 text-gray-700 hover:text-primary transition font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block py-2.5 text-gray-700 hover:text-primary transition font-medium">
              Kontakt
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
              <a
                href="tel:+421905123456"
                className="bg-primary text-white py-2.5 rounded-lg font-semibold text-center hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Zavolať
              </a>
              <Link
                href="/contact"
                className="bg-[#FF4526] hover:bg-[#E63E21] text-white py-2.5 rounded-lg font-semibold text-center transition"
              >
                Získat ponuku
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
