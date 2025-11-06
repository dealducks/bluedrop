import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Služby | BlueDrop Plumbing - Inštalatérske služby Bratislava",
  description:
    "Komplexné inštalatérske služby v Bratislave: núdzové opravy, inštalácia potrubí, čistenie odpadov, servis ohrievačov vody, rekonštrukcia kúpeľní a viac. Ceny od 120€.",
  keywords: [
    "inštalatérske služby Bratislava",
    "núdzové opravy",
    "čistenie odpadov",
    "rekonštrukcia kúpeľní",
    "servis ohrievačov",
    "inštalácia potrubí",
    "ceny inštalatér",
  ],
  openGraph: {
    title: "Služby | BlueDrop Plumbing - Inštalatérske služby Bratislava",
    description:
      "Komplexné inštalatérske služby v Bratislave: núdzové opravy, inštalácia potrubí, čistenie odpadov, servis ohrievačov vody, rekonštrukcia kúpeľní a viac.",
    url: "https://bluedrop-plumbing.sk/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
