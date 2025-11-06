import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | BlueDrop Plumbing - Zavolajte +421 905 123 456",
  description:
    "Kontaktujte BlueDrop Plumbing v Bratislave. Štefánikova 15, 811 05 Bratislava. Telefón: +421 905 123 456. Email: info@bluedrop-plumbing.sk. Núdzová služba 24/7.",
  keywords: [
    "kontakt inštalatér Bratislava",
    "telefón inštalatér",
    "adresa inštalatér",
    "Štefánikova Bratislava",
    "núdzový kontakt",
    "24/7 inštalatér telefón",
  ],
  openGraph: {
    title: "Kontakt | BlueDrop Plumbing - Zavolajte +421 905 123 456",
    description:
      "Kontaktujte BlueDrop Plumbing v Bratislave. Núdzová služba 24/7. Štefánikova 15, 811 05 Bratislava.",
    url: "https://bluedrop-plumbing.sk/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
