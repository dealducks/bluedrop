"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations"

export default function FAQPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const faqCategories = [
    {
      category: "Služby",
      faqs: [
        {
          id: "services-1",
          q: "Ktoré oblasti obsluhujete?",
          a: "Obsluhujeme celú Bratislavu a okolie vrátane Starého Mesta, Ružinova, Petržalky, Nového Mesta a Karlovej Vsi. Ak si nie ste istí, či obsluhujeme vašu lokalitu, zavolajte nám na +421 905 123 456.",
        },
        {
          id: "services-2",
          q: "Poskytujete núdzové služby?",
          a: "Áno! Ponúkame núdzové inštalatérske služby 24/7. Či už je to uprostred noci alebo cez víkend, náš tím je k dispozícii na riešenie naliehavých inštalatérskych problémov.",
        },
        {
          id: "services-3",
          q: "Na akých typoch nehnuteľností pracujete?",
          a: "Obsluhujeme domácnosti aj komerčné nehnuteľnosti, od rodinných domov až po veľké kancelárske budovy a priemyselné zariadenia.",
        },
        {
          id: "services-4",
          q: "Poskytujete údržbové plány?",
          a: "Áno, ponúkame ročné údržbové plány od 80€/mesiac. Zahŕňajú pravidelnú inšpekciu, prioritnú službu a zľavy na opravy.",
        },
      ],
    },
    {
      category: "Ceny a odhady",
      faqs: [
        {
          id: "pricing-1",
          q: "Účtujete si za odhady?",
          a: "Nie, poskytujeme bezplatné konzultácie a odhady pre všetky služby. Veríme v transparentné, vopred stanovené ceny bez skrytých poplatkov.",
        },
        {
          id: "pricing-2",
          q: "Aká je vaša cenová štruktúra?",
          a: "Účtujeme podľa typu potrebnej služby. Väčšina služieb má základnú cenu a vždy poskytneme podrobný cenový odhad pred začatím práce.",
        },
        {
          id: "pricing-3",
          q: "Ponúkate možnosti financovania?",
          a: "Áno, ponúkame flexibilné platobné plány pre väčšie projekty. Kontaktujte nás, aby sme prediskutovali možnosti financovania pre váš konkrétny projekt.",
        },
        {
          id: "pricing-4",
          q: "Sú nejaké skryté poplatky?",
          a: "Absolútne nie. Veríme v čestné, transparentné ceny. Cena, ktorú uvedieme, je to, čo zaplatíte, bez prekvapení.",
        },
      ],
    },
    {
      category: "Záruka a garancia",
      faqs: [
        {
          id: "warranty-1",
          q: "Garantujete svoju prácu?",
          a: "Áno! Za všetkú našu prácu sa zaručujeme. Ak sa vyskytne akýkoľvek problém s našou službou, vrátime sa to opraviť bez ďalších nákladov.",
        },
        {
          id: "warranty-2",
          q: "Ako dlhá je záruka na opravy?",
          a: "Poskytujeme 1-ročnú záruku na všetky opravy. Pri nových inštaláciách väčšina komponentov je dodávaná so zárukou výrobcu v rozsahu 5-10 rokov.",
        },
        {
          id: "warranty-3",
          q: "Čo ak sa objaví problém po vašom odchode?",
          a: "Jednoducho nás kontaktujte čo najskôr. Sme odhodlaní k spokojnosti zákazníkov a problémy riešime promptne.",
        },
      ],
    },
    {
      category: "Plánovanie a dostupnosť",
      faqs: [
        {
          id: "scheduling-1",
          q: "Ako si naplánujem stretnutie?",
          a: "Môžete nám zavolať na +421 905 123 456, poslať email na info@bluedrop-plumbing.sk alebo vyplniť náš online kontaktný formulár. Odpovieme vám do 2 hodín.",
        },
        {
          id: "scheduling-2",
          q: "Ako rýchlo môžete reagovať na núdzové situácie?",
          a: "Pri núdzových situáciách sa snažíme reagovať do 1 hodiny od vášho hovoru. Náš dispečerský tím prioritizuje núdzové volania na minimalizáciu škôd.",
        },
        {
          id: "scheduling-3",
          q: "Ponúkate službu v ten istý deň?",
          a: "Áno, služba v ten istý deň je často k dispozícii pre núdzové opravy. Pri bežných prácach zvyčajne plánujeme stretnutia do 24-48 hodín.",
        },
        {
          id: "scheduling-4",
          q: "Aké sú vaše pracovné hodiny?",
          a: "Naša kancelária je otvorená Pondelok-Piatok 8:00-18:00, Sobota 9:00-14:00. Núdzová služba je k dispozícii 24/7.",
        },
      ],
    },
    {
      category: "Licencie a poistenie",
      faqs: [
        {
          id: "legal-1",
          q: "Ste licencovaní a poistení?",
          a: "Áno! BlueDrop je plne licencovaná, poistená a ručená. Máme komplexné poistenie zodpovednosti na ochranu vášho majetku.",
        },
        {
          id: "legal-2",
          q: "Môžem overiť vašu licenciu?",
          a: "Samozrejme. Naša licencia majstra inštalatéra je #MP-SK-2024-789. Môžete to overiť u slovenského licenčného úradu.",
        },
        {
          id: "legal-3",
          q: "Aké certifikácie majú vaši technici?",
          a: "Náš tím zahŕňa certifikovaných odborníkov na protipožiarne systémy, prevenciu spätného toku a inštaláciu plynových rozvodov. Všetci technici majú aktuálne certifikácie podľa SK noriem.",
        },
      ],
    },
  ]

  return (
    <main>
      {/* Hero Section with animation */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24 pt-28 md:pt-36 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <HelpCircle size={40} />
            </motion.div>
            Často kladené otázky
          </h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Nájdite odpovede na bežné otázky o našich službách, cenách, plánovaní a viac.
          </p>
        </div>
      </section>

      {/* FAQ Content with stagger animations */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h2
                  className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"
                  variants={staggerItem}
                >
                  <motion.div
                    className="w-1 h-8 bg-accent rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1, type: "spring", stiffness: 300 }}
                  />
                  {section.category}
                </motion.h2>
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => (
                    <motion.div
                      key={faq.id}
                      className="bg-card rounded-2xl border border-border overflow-hidden"
                      variants={staggerItem}
                      whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    >
                      <motion.button
                        onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition font-semibold text-left"
                        whileTap={{ scale: 0.99 }}
                      >
                        <span>{faq.q}</span>
                        <motion.div
                          animate={{ rotate: openFaqId === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown size={24} className="flex-shrink-0 text-accent" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openFaqId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 border-t border-border bg-muted/30 text-muted-foreground">
                              <motion.p
                                className="leading-relaxed"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                              >
                                {faq.a}
                              </motion.p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animation */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nenašli ste odpoveď?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Neváhajte kontaktovať náš tím. Radi zodpovieme všetky vaše otázky.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.a
              href="tel:+421905123456"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zavolať +421 905 123 456
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-primary hover:bg-primary/10 text-primary px-8 py-3 rounded-lg font-semibold transition"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontaktujte nás
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
