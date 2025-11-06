import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/blue-drop-logo.png"
                  alt="BlueDrop Plumbing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">BlueDrop Plumbing</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Profesionálne inštalatérske služby, ktorým môžete dôverovať. K dispozícii 24/7 pre všetky vaše potreby.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-80 transition">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+421905123456" className="hover:opacity-80 transition">
                  +421 905 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@bluedrop-plumbing.sk" className="hover:opacity-80 transition">
                  info@bluedrop-plumbing.sk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Štefánikova 15
                  <br />
                  811 05 Bratislava
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Otváracie hodiny</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Po - Pia: 8:00 - 18:00</span>
              </li>
              <li className="ml-6">So: 9:00 - 14:00</li>
              <li className="ml-6">Ne: Núdzové výjazdy</li>
              <li className="mt-3 pt-3 border-t border-primary-foreground/20">
                <span className="font-semibold">Núdzová služba 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>&copy; 2025 BlueDrop Plumbing. Všetky práva vyhradené.</p>
            <span className="hidden md:inline">•</span>
            <p>
              Vytvoril{" "}
              <a
                href="https://pawlynx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition underline"
              >
                PawLynx
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition">
              Ochrana osobných údajov
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              Obchodné podmienky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
