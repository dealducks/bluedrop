import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlueDrop Plumbing | Profesionálne inštalatérske služby Bratislava",
  description:
    "Odborné inštalatérske služby 24/7 v Bratislave. Núdzové opravy, inštalácie a údržba pre domácnosti aj firmy. Licencovaní špecialisti.",
  keywords: [
    "inštalatér Bratislava",
    "inštalatérske služby",
    "núdzový inštalatér",
    "oprava vodovodov",
    "čistenie odpadov",
    "inštalácia kúpeľní",
    "rekonštrukcia kúpeľní Bratislava",
    "servis ohrievačov vody",
    "24/7 inštalatér",
    "BlueDrop Plumbing",
  ],
  authors: [{ name: "BlueDrop Plumbing" }],
  creator: "PawLynx",
  publisher: "BlueDrop Plumbing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://bluedrop-plumbing.sk",
    siteName: "BlueDrop Plumbing",
    title: "BlueDrop Plumbing | Profesionálne inštalatérske služby Bratislava",
    description:
      "Odborné inštalatérske služby 24/7 v Bratislave. Núdzové opravy, inštalácie a údržba pre domácnosti aj firmy. Licencovaní špecialisti.",
    images: [
      {
        url: "/hero-img.jpg",
        width: 1200,
        height: 630,
        alt: "BlueDrop Plumbing - Profesionálny inštalatér v Bratislave",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueDrop Plumbing | Profesionálne inštalatérske služby Bratislava",
    description:
      "Odborné inštalatérske služby 24/7 v Bratislave. Núdzové opravy, inštalácie a údržba pre domácnosti aj firmy.",
    images: ["/hero-img.jpg"],
  },
  alternates: {
    canonical: "https://bluedrop-plumbing.sk",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
