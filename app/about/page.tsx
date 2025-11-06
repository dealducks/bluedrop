import { Award, MapPin, Briefcase, Shield, Zap } from "lucide-react"
import Link from "next/link"

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">O BlueDrop</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Viac ako 10 rokov dôveryhodných a profesionálnych inštalatérskych služieb v Bratislave.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="space-y-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent-foreground">{stat.number}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Naše základné hodnoty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dokonalosť</h3>
              <p className="text-muted-foreground">
                Sme hrdí na poskytovanie špičkového remesla pri každom projekte, bez ohľadu na veľkosť.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrita</h3>
              <p className="text-muted-foreground">
                Čestné ceny, transparentná komunikácia a profesionálna etika riadia všetko, čo robíme.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Spoľahlivosť</h3>
              <p className="text-muted-foreground">
                K dispozícii 24/7 s rýchlym časom odozvy, pretože vieme, že núdzové situácie nečakajú.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Náš tím</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Certifikácie a licencie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} className="text-accent" />
                Profesionálne oprávnenia
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="font-semibold">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-accent" />
                Prečo je to dôležité
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Všetky práce spĺňajú alebo prekračujú aktuálne stavebné kódy a bezpečnostné normy SR</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Poistenie a ručenie chránia váš majetok a investíciu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Neustále školenie udržuje náš tím v súlade s najnovšími technikami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>Garantované remeslo podporené našou reputáciou a záruk ami</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <MapPin size={32} className="text-accent" />
                Oblasť služieb
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                S hrdosťou obsluhujeme celú Bratislavu a okolie vrátane všetkých mestských častí. Ak si nie ste istí, či
                obsluhujeme vašu lokalitu, zavolajte nám.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border overflow-hidden h-96">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pripravení s nami pracovať?</h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Kontaktujte BlueDrop ešte dnes a dohodnite si stretnutie alebo požiadajte o bezplatnú konzultáciu.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </main>
  )
}
