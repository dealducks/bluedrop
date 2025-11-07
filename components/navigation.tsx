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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
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
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-24 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-white shadow-2xl rounded-2xl mx-4 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <Link href="/" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary transition font-medium rounded-lg">
              Domov
            </Link>
            <Link href="/services" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary transition font-medium rounded-lg">
              Služby
            </Link>
            <Link href="/about" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary transition font-medium rounded-lg">
              O nás
            </Link>
            <Link href="/faq" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary transition font-medium rounded-lg">
              FAQ
            </Link>
            <Link href="/contact" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary transition font-medium rounded-lg">
              Kontakt
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="tel:+421905123456"
              className="bg-primary text-white py-3 rounded-lg font-semibold text-center hover:bg-primary/90 transition flex items-center justify-center gap-2"
              onClick={closeMenu}
            >
              <Phone size={18} />
              Zavolať
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-[#FF4526] hover:bg-[#E63E21] text-white py-3 rounded-lg font-semibold text-center transition"
            >
              Získat ponuku
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
