"use client"

import { Award, MapPin, Briefcase, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleInBounce,
  scaleInRotate,
  staggerContainer,
  staggerSlowContainer,
  staggerItem,
} from "@/lib/animations"
import { useCountUpFormatted } from "@/hooks/use-count-up"

// Stats Counter Component
function StatsCounter({ number, isLarge = false }: { number: string; isLarge?: boolean }) {
  const numValue = parseInt(number.replace(/[^0-9]/g, ""))
  const suffix = number.replace(/[0-9]/g, "")

  const { ref, formattedValue } = useCountUpFormatted(numValue, {
    suffix,
    duration: 2.5,
    formatK: false,
    formatM: false,
  })

  return (
    <span ref={ref as any} className="text-2xl font-bold text-accent-foreground">
      {formattedValue}
    </span>
  )
}

export default function AboutPage() {
  const team = [
    {
      name: "Martin Horváth",
      role: "Majster inštalatér & Majiteľ",
      bio: "S viac ako 15 rokmi skúseností založil Martin BlueDrop, aby poskytoval čestné a profesionálne inštalatérske služby.",
    },
    {
      name: "Zuzana Nováková",
      role: "Vedúca technika",
      bio: "Zuzana sa špecializuje na komplexné inštalácie a vyškolila celý náš technický tím.",
    },
    {
      name: "Peter Kováč",
      role: "Manažér núdzových služieb",
      bio: "Peter zaisťuje, že naša núdzová služba 24/7 udržiava naše vysoké štandardy kvality.",
    },
    {
      name: "Lenka Lukáčová",
      role: "Komerčné operácie",
      bio: "Lenka riadi naše komerčné účty a koordináciu individuálnych projektov.",
    },
  ]

  const certifications = [
    "Licencovaný majster inštalatér",
    "Certifikácia SK norme",
    "Protipožiarne systémy",
    "Certifikovaná prevencia spätného toku",
    "Inštalácia plynových rozvodov",
    "Inštalácia ohrievačov vody",
  ]

  const stats = [
    { number: "10+", label: "Rokov v biznise" },
    { number: "3500+", label: "Dokončených projektov" },
    { number: "24/7", label: "Núdzová služba" },
    { number: "98%", label: "Spokojnosť zákazníkov" },
  ]

  const serviceAreas = [
    "Staré Mesto",
    "Ružinov",
    "Petržalka",
    "Nové Mesto",
    "Karlova Ves",
    "Bratislava okolie",
  ]

  return (
    <main>
      {/* Hero Section with animation */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24 pt-28 md:pt-36 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            O BlueDrop
          </h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Viac ako 10 rokov dôveryhodných a profesionálnych inštalatérskych služieb v Bratislave.
          </p>
        </div>
      </section>

      {/* Company Story with animated stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Náš príbeh</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                BlueDrop bola založená s jednoduchou misiou: poskytovať čestné, profesionálne inštalatérske služby bez
                skrytých poplatkov alebo zbytočného presudzovania. To, čo začalo ako malá prevádzka, sa rozrástlo na
                najdôveryhodnejšiu inštalatérsku spoločnosť v Bratislave.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Veríme, že výnimočné inštalatérske služby vznikajú kombináciou rokov skúseností so skutočnou starostlivosťou
                o zákazníkov. Každý člen nášho tímu zdieľa tento záväzok k dokonalosti.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dnes obsluhujeme tisíce domácností a komerčných zákazníkov v Bratislave a okolí, pričom si udržiavame rovnaké
                štandardy kvality a integrity, ktoré nás zviditeľnili od prvého dňa.
              </p>
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
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4"
                    variants={staggerItem}
                    whileHover={{ x: 10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1, borderRadius: "0.75rem" }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.number.includes("+") || stat.number.includes("%") ? (
                        <StatsCounter number={stat.number} />
                      ) : (
                        <span className="text-2xl font-bold text-accent-foreground">{stat.number}</span>
                      )}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values with scale-in animations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Naše základné hodnoty
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                borderRadius: "1rem",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8 text-center h-full">
                <motion.div
                  className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.2, borderRadius: "0.75rem" }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={24} className="text-accent-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Dokonalosť</h3>
                <p className="text-muted-foreground">
                  Sme hrdí na poskytovanie špičkového remesla pri každom projekte, bez ohľadu na veľkosť.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                borderRadius: "1rem",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8 text-center h-full">
                <motion.div
                  className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.2, borderRadius: "0.75rem" }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield size={24} className="text-accent-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Integrita</h3>
                <p className="text-muted-foreground">
                  Čestné ceny, transparentná komunikácia a profesionálna etika riadia všetko, čo robíme.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                borderRadius: "1rem",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8 text-center h-full">
                <motion.div
                  className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.2, borderRadius: "0.75rem" }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap size={24} className="text-accent-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Spoľahlivosť</h3>
                <p className="text-muted-foreground">
                  K dispozícii 24/7 s rýchlym časom odozvy, pretože vieme, že núdzové situácie nečakajú.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with flip animations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Náš tím
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={scaleInRotate}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  rotate: 2,
                  borderRadius: "1rem",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition h-full">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Licenses with stagger animations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Certifikácie a licencie
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card rounded-2xl border border-border p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} className="text-accent" />
                Profesionálne oprávnenia
              </h3>
              <motion.ul
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {certifications.map((cert, idx) => (
                  <motion.li key={idx} className="flex items-start gap-3" variants={staggerItem}>
                    <motion.div
                      className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 500 }}
                    />
                    <span className="font-semibold">{cert}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="bg-card rounded-2xl border border-border p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-accent" />
                Prečo je to dôležité
              </h3>
              <motion.ul
                className="space-y-4 text-muted-foreground"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex items-start gap-3" variants={staggerItem}>
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Všetky práce spĺňajú alebo prekračujú aktuálne stavebné kódy a bezpečnostné normy SR</span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={staggerItem}>
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Poistenie a ručenie chránia váš majetok a investíciu</span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={staggerItem}>
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Neustále školenie udržuje náš tím v súlade s najnovšími technikami</span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={staggerItem}>
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Garantované remeslo podporené našou reputáciou a záruk ami</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area with map reveal animation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin size={32} className="text-accent" />
                </motion.div>
                Oblasť služieb
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                S hrdosťou obsluhujeme celú Bratislavu a okolie vrátane všetkých mestských častí. Ak si nie ste istí, či
                obsluhujeme vašu lokalitu, zavolajte nám.
              </p>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {serviceAreas.map((area, idx) => (
                  <motion.div key={idx} className="flex items-center gap-2" variants={staggerItem}>
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 400 }}
                    />
                    <span className="font-semibold">{area}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-card rounded-2xl border border-border overflow-hidden h-96"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86051.01815123456!2d17.05!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BlueDrop Service Area - Bratislava"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA with dramatic animation */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            Pripravení s nami pracovať?
          </motion.h2>
          <motion.p
            className="text-lg opacity-95 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.95, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Kontaktujte BlueDrop ešte dnes a dohodnite si stretnutie alebo požiadajte o bezplatnú konzultáciu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition"
            >
              Kontaktujte nás
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
