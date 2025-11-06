"use client"

import Link from "next/link"
import Image from "next/image"
import { Droplets, AlertCircle, Wrench, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  const services = [
    { icon: Droplets, title: "Núdzové opravy", desc: "Rýchla reakcia na úniky, upchatie a naliehavé problémy s inštaláciou" },
    { icon: Wrench, title: "Inštalácie", desc: "Profesionálna inštalácia potrubí a armatúr" },
    { icon: AlertCircle, title: "Detekcia úniku", desc: "Pokročilá technológia na zisťovanie skrytých únikov" },
  ]

  const testimonials = [
    {
      name: "Mária Kovačová",
      role: "Majiteľka domu",
      text: "BlueDrop opravil našu prasklú rúru do 2 hodín. Profesionálni, efektívni a férová cena.",
      rating: 5,
    },
    {
      name: "Lukáš Balog",
      role: "Majiteľ firmy",
      text: "Používame BlueDrop na všetku našu komerčnú údržbu. Spoľahliví a rýchlo reagujú.",
      rating: 5,
    },
    {
      name: "Andrea Molnárová",
      role: "Správkyňa nehnuteľností",
      text: "Najlepšie inštalatérske služby v okolí. Vždy k dispozícii, keď ich najviac potrebujeme.",
      rating: 5,
    },
  ]

  const whyChoose = [
    "Licencovaní a poisťní profesionáli",
    "Núdzová služba 24/7",
    "Transparentné ceny - žiadne skryté poplatky",
    "Garantovaná spokojnosť",
    "Viac ako 10 rokov skúseností",
    "Služby pre domácnosti aj firmy",
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Profesionálne inštalatérske služby 24/7
              </h1>
              <p className="text-lg mb-8 opacity-95">
                Od núdzových opráv až po kompletné inštalácie, BlueDrop je váš dôveryhodný partner pre všetky
                inštalatérske potreby v Bratislave.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                >
                  Získať ponuku <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+421905123456"
                  className="border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
                >
                  Zavolať +421 905 123 456
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/hero-img.jpg"
                alt="Profesionálny inštalatér s náradím"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme komplexné inštalatérske riešenia pre domácnosti aj firmy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:text-accent/80 transition flex items-center gap-2"
                >
                  Zistiť viac <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Zobraziť všetky služby
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Prečo si vybrať BlueDrop?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">10+</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rokov skúseností</p>
                    <p className="font-semibold">Dôverujú nám tisíce</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">24/7</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Vždy k dispozícii</p>
                    <p className="font-semibold">Núdzová služba</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Spokojnosť zákazníkov</p>
                    <p className="font-semibold">100% garantovaná</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recenzie zákazníkov</h2>
            <p className="text-lg text-muted-foreground">Pozrite si, čo hovoria naši klienti o našich službách</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Potrebujete inštalatéra?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Kontaktujte nás ešte dnes pre bezplatnú konzultáciu a konkurenčnú cenovú ponuku na akýkoľvek projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Získať cenovú ponuku
            </Link>
            <a
              href="tel:+421905123456"
              className="border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Zavolať +421 905 123 456
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
