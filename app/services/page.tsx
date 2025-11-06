"use client"

import { useState } from "react"
import {
  AlertCircle,
  Droplets,
  Zap,
  Hammer,
  Fence as Faucet,
  Wind,
  Pipette as Pipe,
  Truck,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allServices = [
    {
      id: 1,
      title: "Núdzové opravy",
      category: "emergency",
      description: "Rýchla reakcia na úniky, upchatie a naliehavé inštalatérske problémy. K dispozícii 24/7.",
      icon: AlertCircle,
      price: "Volajte pre cenu",
      features: ["Služba v ten istý deň", "Dostupnosť 24/7", "Licencovaní profesionáli"],
    },
    {
      id: 2,
      title: "Inštalácia potrubí",
      category: "residential",
      description: "Profesionálna inštalácia medeného, PVC a PEX potrubia.",
      icon: Pipe,
      price: "Od 600€",
      features: ["V súlade s normami", "Vrátane záruky", "Profesionálna inštalácia"],
    },
    {
      id: 3,
      title: "Čistenie odpadov",
      category: "residential",
      description: "Odstránenie upchatia a usadenín z odpadov a kanalizačných potrubí pomocou pokročilého vybavenia.",
      icon: Droplets,
      price: "Od 120€",
      features: ["Video inšpekcia", "Ekologické metódy", "Služba v ten istý deň"],
    },
    {
      id: 4,
      title: "Servis ohrievačov vody",
      category: "residential",
      description: "Inštalácia, oprava a údržba ohrievačov vody.",
      icon: Zap,
      price: "Od 400€",
      features: ["Všetky značky", "Energeticky efektívne možnosti", "Rozšírené záruky"],
    },
    {
      id: 5,
      title: "Rekonštrukcia kúpeľní",
      category: "residential",
      description: "Kompletné inštalatérske práce pre rekonštrukcie kúpeľní a nové inštalácie.",
      icon: Hammer,
      price: "Individuálna ponuka",
      features: ["Konzultácia dizajnu", "Kvalitné armatúry", "Riadenie projektu"],
    },
    {
      id: 6,
      title: "Kuchynské inštalácie",
      category: "residential",
      description: "Inštalácia drezu, výmena batérií a zapojenie umývačky riadu.",
      icon: Faucet,
      price: "Od 250€",
      features: ["Moderné armatúry", "Úsporné riešenia", "Kvalitná inštalácia"],
    },
    {
      id: 7,
      title: "Detekcia úniku",
      category: "emergency",
      description: "Pokročilá technológia na lokalizáciu skrytých únikov bez poškodenia majetku.",
      icon: Wind,
      price: "Od 150€",
      features: ["Termovízne zobrazovanie", "Akustická detekcia", "Presná lokalizácia"],
    },
    {
      id: 8,
      title: "Inštalácia batérií",
      category: "residential",
      description: "Inštalácia batérií, toaliet, spŕch a iných inštalatérskych armatúr.",
      icon: CheckCircle,
      price: "Od 120€",
      features: ["Prémiové značky", "Odborná inštalácia", "Garantovaná spokojnosť"],
    },
    {
      id: 9,
      title: "Servis kanalizácie",
      category: "commercial",
      description: "Inšpekcia, čistenie a oprava kanalizačných potrubí pre domácnosti aj firmy.",
      icon: Truck,
      price: "Od 450€",
      features: ["Kamerová inšpekcia", "Bezvýkopová oprava", "Plná záruka"],
    },
    {
      id: 10,
      title: "Údržbové plány",
      category: "commercial",
      description: "Ročné údržbové plány pre domácnosti a komerčné nehnuteľnosti.",
      icon: Clock,
      price: "Od 80€/mesiac",
      features: ["Prioritná služba", "Zľava na opravy", "Pravidelné inšpekcie"],
    },
  ]

  const categories = [
    { id: "all", label: "Všetky služby" },
    { id: "residential", label: "Domácnosti" },
    { id: "commercial", label: "Firmy" },
    { id: "emergency", label: "Núdzové" },
  ]

  const filteredServices =
    selectedCategory === "all" ? allServices : allServices.filter((service) => service.category === selectedCategory)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-background py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Naše služby</h1>
        </div>
      </section>

      {/* Services Grid with Filter */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Filtrovať podľa kategórie</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Zobrazuje sa {filteredServices.length} služi{filteredServices.length !== 1 ? "eb" : "ba"}
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 pb-6 border-b border-border">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Cena od</p>
                      <p className="text-lg font-bold text-accent">{service.price}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center py-2 rounded-lg font-semibold transition"
                    >
                      Žiadosť o ponuku
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nenašli ste, čo potrebujete?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ponúkame aj individuálne inštalatérske riešenia pre jedinečné projekty. Kontaktujte nás, aby sme prediskutovali vaše konkrétne potreby.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
          >
            Kontaktujte nás dnes
          </Link>
        </div>
      </section>
    </main>
  )
}
