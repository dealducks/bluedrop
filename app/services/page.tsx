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
import { motion, AnimatePresence } from "framer-motion"
import {
  fadeInUp,
  scaleInBounce,
  staggerContainer,
  staggerItem,
} from "@/lib/animations"
import { WaveDivider } from "@/components/background-effects/wave-divider"

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
      {/* Hero Section with animation */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24 pt-32 md:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Naše služby
          </h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Poskytujeme komplexné inštalatérske riešenia pre domácnosti aj firmy v Bratislave.
          </p>
        </div>
        <WaveDivider position="bottom" variant="flowing" color="background" />
      </section>

      {/* Services Grid with Filter */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter with animated indicator */}
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-6">Filtrovať podľa kategórie</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                    selectedCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={selectedCategory === category.id ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Count with animation */}
          <motion.p
            key={selectedCategory}
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Zobrazuje sa {filteredServices.length} služi{filteredServices.length !== 1 ? "eb" : "ba"}
          </motion.p>

          {/* Services Grid with animated transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  layout
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    borderRadius: "1rem",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 icon-hover-wiggle-scale">
                        <service.icon size={24} className="text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6 pb-6 border-b border-border">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="space-y-4 mt-auto">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Cena od</p>
                          <p className="text-lg font-bold text-accent">{service.price}</p>
                        </div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Link
                            href="/contact"
                            className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center py-2 rounded-lg font-semibold transition"
                          >
                            Žiadosť o ponuku
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section with animation */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nenašli ste, čo potrebujete?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ponúkame aj individuálne inštalatérske riešenia pre jedinečné projekty. Kontaktujte nás, aby sme prediskutovali vaše konkrétne potreby.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Kontaktujte nás dnes
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
