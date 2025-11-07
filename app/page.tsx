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
      <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground pt-28 pb-20 md:pt-56 md:pb-48 overflow-hidden -mt-20">
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
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
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
      </section>

      {/* Featured Services with scroll-triggered stagger animation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme komplexné inštalatérske riešenia pre domácnosti aj firmy
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
                  <motion.div
                    className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1, borderRadius: "0.75rem" }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={24} className="text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Link
                    href="/services"
                    className="text-accent font-semibold hover:text-accent/80 transition flex items-center gap-2 group"
                  >
                    Zistiť viac
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial="hidden"
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
      </section>

      {/* Why Choose Us with sequential check animations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Prečo si vybrať BlueDrop?</h2>
              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {whyChoose.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    variants={staggerItem}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="font-semibold text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-card rounded-2xl border border-border p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <motion.div
                className="space-y-6"
                variants={staggerSlowContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1, borderRadius: "0.75rem" }}
                    transition={{ duration: 0.5 }}
                  >
                    <StatsCounter target={10} suffix="+" />
                  </motion.div>
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
                  <motion.div
                    className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl font-bold text-accent-foreground">24/7</span>
                  </motion.div>
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
                  <motion.div
                    className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], borderRadius: "0.75rem" }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Star size={24} className="text-accent-foreground fill-accent-foreground" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Spokojnosť zákazníkov</p>
                    <p className="font-semibold">100% garantovaná</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with stagger animation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
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
            initial="hidden"
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
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { scale: 0, rotate: -180 },
                          visible: {
                            scale: 1,
                            rotate: 0,
                            transition: {
                              delay: i * 0.1,
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                            },
                          },
                        }}
                      >
                        <Star size={16} className="fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </motion.div>
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
      </section>

      {/* CTA Section with dramatic entrance */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
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
            initial="hidden"
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
              className="border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition inline-block"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(255,255,255,0.7)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0)"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              Zavolať +421 905 123 456
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
