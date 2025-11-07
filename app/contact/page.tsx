"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, AlertCircle, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleInBounce,
} from "@/lib/animations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const services = ["Núdzová oprava", "Inštalácia", "Údržba", "Inšpekcia", "Iné"]

  return (
    <main>
      {/* Hero Section with animation */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24 pt-28 md:pt-36 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktujte nás
          </h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Máte otázku alebo potrebujete okamžitú pomoc? Sme tu pre vás. Kontaktujte nás ešte dnes pre bezplatnú konzultáciu.
          </p>
        </div>
      </section>

      {/* Emergency Banner with pulse animation */}
      <section className="bg-red-50 border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            className="flex items-center gap-3 text-red-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertCircle size={20} className="flex-shrink-0" />
            </motion.div>
            <p className="font-semibold">
              Núdzová situácia? Zavolajte nám okamžite na{" "}
              <a href="tel:+421905123456" className="underline hover:opacity-80">
                +421 905 123 456
              </a>{" "}
              - služba 24/7 k dispozícii
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form with stagger animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl font-bold mb-8">Napíšte nám</h2>
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-900"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <p className="font-semibold">Ďakujeme! Vaša správa bola odoslaná. Čoskoro vás budeme kontaktovať.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-semibold mb-2">Celé meno</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card"
                    placeholder="Ján Novák"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-semibold mb-2">Emailová adresa</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card"
                    placeholder="jan@priklad.sk"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-semibold mb-2">Telefónne číslo</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card"
                    placeholder="+421 905 123 456"
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-semibold mb-2">Potrebná služba</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card"
                  >
                    <option value="">Vyberte službu</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-semibold mb-2">Správa</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card resize-none"
                    placeholder="Popíšte vaše inštalatérske potreby..."
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Odoslať správu
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Contact Information with stagger animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="text-3xl font-bold mb-8">Kontaktné informácie</h2>
              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Phone */}
                <motion.div
                  className="bg-card rounded-2xl border border-border p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5, borderRadius: "1rem" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], borderRadius: "0.75rem" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone size={20} className="text-accent-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-2">Telefón</h3>
                      <a
                        href="tel:+421905123456"
                        className="text-accent font-semibold hover:text-accent/80 transition block mb-1"
                      >
                        +421 905 123 456
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Zavolajte kedykoľvek pri núdzových situáciách, všeobecných otázkach alebo naplánovaní služby
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="bg-card rounded-2xl border border-border p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5, borderRadius: "1rem" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], borderRadius: "0.75rem" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail size={20} className="text-accent-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:info@bluedrop-plumbing.sk"
                        className="text-accent font-semibold hover:text-accent/80 transition block mb-1"
                      >
                        info@bluedrop-plumbing.sk
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Pošlite nám email a odpovieme do 2 pracovných hodín
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="bg-card rounded-2xl border border-border p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5, borderRadius: "1rem" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], borderRadius: "0.75rem" }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin size={20} className="text-accent-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-2">Kancelária</h3>
                      <p className="font-semibold block mb-1">Štefánikova 15</p>
                      <p className="text-muted-foreground">811 05 Bratislava</p>
                      <p className="text-muted-foreground">Slovensko</p>
                    </div>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="bg-card rounded-2xl border border-border p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5, borderRadius: "1rem" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], borderRadius: "0.75rem" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Clock size={20} className="text-accent-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-2">Otváracie hodiny</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-semibold">Pondelok - Piatok:</span> 8:00 - 18:00
                        </p>
                        <p>
                          <span className="font-semibold">Sobota:</span> 9:00 - 14:00
                        </p>
                        <p>
                          <span className="font-semibold">Nedeľa:</span> Núdzové výjazdy
                        </p>
                        <p className="mt-3 pt-3 border-t border-border font-semibold text-accent">
                          Núdzová služba 24/7 k dispozícii
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with reveal animation */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Navštívte našu kanceláriu
          </motion.h2>
          <motion.div
            className="bg-card rounded-2xl border border-border overflow-hidden h-96"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.2419886842847!2d17.108688615674747!3d48.15123597922405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894ab6a8b70b%3A0x7c67a6e6e75cb1a3!2s%C5%A0tef%C3%A1nikova%2015%2C%20811%2005%20Star%C3%A9%20Mesto%2C%20Slovakia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BlueDrop Plumbing Office Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
