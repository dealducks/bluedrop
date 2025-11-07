"use client"

import Link from "next/link"
import Image from "next/image"
import { Droplets, AlertCircle, Wrench, Star, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleInBounce,
  staggerContainer,
  staggerSlowContainer,
  staggerItem,
  hoverLift,
  hoverScale,
  floatAnimation,
  wordContainer,
  wordItem,
} from "@/lib/animations"
import { useCountUpFormatted } from "@/hooks/use-count-up"
import { WaterParticles } from "@/components/background-effects/water-particles"
import { WaveDivider } from "@/components/background-effects/wave-divider"

// Stats Counter Component with count-up animation
function StatsCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, formattedValue } = useCountUpFormatted(target, {
    suffix,
    duration: 2,
    formatK: false,
    formatM: false,
  })

  return (
    <span ref={ref as any} className="text-2xl font-bold text-accent-foreground">
      {formattedValue}
    </span>
  )
}

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
      {/* Hero Section with dramatic animations */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground pt-32 pb-20 md:pt-48 md:pb-48 overflow-hidden">
        <WaterParticles density="medium" color="white" />
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
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    Získať ponuku
                    <ArrowRight size={20} className="icon-continuous-slide" />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+421905123456"
                  className="border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Zavolať +421 905 123 456
                </motion.a>
              </div>
            </div>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] },
                scale: { delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] },
                rotate: { delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
              }}
            >
              <Image
                src="/hero-img.jpg"
                alt="Profesionálny inštalatér s náradím"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
        <WaveDivider position="bottom" variant="flowing" color="background" />
      </section>

      {/* Featured Services with scroll-triggered stagger animation */}
      <section className="relative pt-20 pb-32 bg-background">
        <WaterParticles density="low" color="blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme komplexné inštalatérske riešenia pre domácnosti aj firmy
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  scale: 1.02,
                  borderRadius: "1rem",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-card rounded-2xl border border-border p-8 h-full hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 icon-hover-wiggle-scale">
                    <service.icon size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Link
                    href="/services"
                    className="text-accent font-semibold hover:text-accent/80 transition flex items-center gap-2 group"
                  >
                    Zistiť viac
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
              >
                Zobraziť všetky služby
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <WaveDivider position="bottom" variant="gentle" color="muted" />
      </section>

      {/* Why Choose Us with sequential check animations */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Prečo si vybrať BlueDrop?</h2>
              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                variants={staggerContainer}
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {whyChoose.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    variants={staggerItem}
                  >
                    <CheckCircle size={24} className={`text-accent flex-shrink-0 mt-0.5 icon-entrance-spin icon-delay-${idx + 1}`} />
                    <span className="font-semibold text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-card rounded-2xl border border-border p-8"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInRight}
            >
              <motion.div
                className="space-y-6"
                variants={staggerSlowContainer}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 icon-hover-wiggle-scale">
                    <StatsCounter target={10} suffix="+" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rokov skúseností</p>
                    <p className="font-semibold">Dôverujú nám tisíce</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 icon-continuous-pulse">
                    <span className="text-2xl font-bold text-accent-foreground">24/7</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Vždy k dispozícii</p>
                    <p className="font-semibold">Núdzová služba</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 icon-hover-wiggle">
                    <Star size={24} className="text-accent-foreground fill-accent-foreground icon-continuous-rotate" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Spokojnosť zákazníkov</p>
                    <p className="font-semibold">100% garantovaná</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <WaveDivider position="bottom" variant="ripple" color="background" />
      </section>

      {/* Testimonials with stagger animation */}
      <section className="relative pt-20 pb-40 bg-background">
        <WaterParticles density="low" color="blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recenzie zákazníkov</h2>
            <p className="text-lg text-muted-foreground">Pozrite si, čo hovoria naši klienti o našich službách</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  scale: 1.02,
                  borderRadius: "1rem",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-card rounded-2xl border border-border p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className={`fill-accent text-accent icon-entrance-spin icon-delay-${i + 1}`} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaveDivider position="bottom" variant="layered" color="primary" />
      </section>

      {/* CTA Section with dramatic entrance */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <WaterParticles density="medium" color="white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            Potrebujete inštalatéra?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 opacity-95 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.95, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Kontaktujte nás ešte dnes pre bezplatnú konzultáciu a konkurenčnú cenovú ponuku na akýkoľvek projekt.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition"
              >
                Získať cenovú ponuku
              </Link>
            </motion.div>
            <motion.a
              href="tel:+421905123456"
              className="border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition inline-block icon-pulse-ring-delayed"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Zavolať +421 905 123 456
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
