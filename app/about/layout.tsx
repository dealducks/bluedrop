import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nás | BlueDrop Plumbing - Licencovaní inštalatéri Bratislava",
  description:
    "BlueDrop Plumbing - viac ako 10 rokov skúseností v Bratislave. Licencovaní a certifikovaní inštalatéri. Obsluhujeme Staré Mesto, Ružinov, Petržalku a celú Bratislavu.",
  keywords: [
    "o nás BlueDrop",
    "licencovaný inštalatér Bratislava",
    "certifikovaní inštalatéri",
    "skúsený inštalatér",
    "Staré Mesto",
    "Ružinov",
    "Petržalka",
  ],
  openGraph: {
    title: "O nás | BlueDrop Plumbing - Licencovaní inštalatéri Bratislava",
    description:
      "BlueDrop Plumbing - viac ako 10 rokov skúseností v Bratislave. Licencovaní a certifikovaní inštalatéri.",
    url: "https://bluedrop-plumbing.sk/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
