import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | BlueDrop Plumbing - Často kladené otázky",
  description:
    "Odpovede na často kladené otázky o inštalatérskych službách BlueDrop v Bratislave. Ceny, garancia, oblasti služieb, licencie a viac.",
  keywords: [
    "FAQ inštalatér",
    "otázky inštalatér",
    "ceny inštalatérskych služieb",
    "garancia opravy",
    "licencia inštalatér",
    "oblasti služieb Bratislava",
  ],
  openGraph: {
    title: "FAQ | BlueDrop Plumbing - Často kladené otázky",
    description:
      "Odpovede na často kladené otázky o inštalatérskych službách BlueDrop v Bratislave.",
    url: "https://bluedrop-plumbing.sk/faq",
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
