import Link from "next/link";

const links = [
  { href: "/approche", label: "Approche" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/analyse", label: "Diagnostic" },
  { href: "/contact", label: "Contact" }
];

export function PageFrame({
  children,
  title,
  intro
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
}) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="sticky top-0 z-20 border-b border-sage/30 bg-ivory/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-prosewide items-center justify-between px-6 py-4">
          <div>
            <Link href="/" className="text-lg font-semibold text-pine">
              Cabinet Astraé
            </Link>
            <p className="hidden text-xs text-umber/70 sm:block">Analyse, clarification et accompagnement personnel</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-umber/90 hover:text-pine">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-pine/35 px-4 py-2 text-xs font-medium text-pine hover:bg-pine/5 md:text-sm"
          >
            Prendre contact
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-prosewide px-6 py-12 md:py-16">
        <section className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-umber/90 md:text-lg">{intro}</p>
        </section>
        {children}
      </main>

      <footer className="border-t border-sage/30 bg-sand/40">
        <div className="mx-auto grid w-full max-w-prosewide gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr]">
          <section>
            <p className="text-base font-semibold text-pine">Cabinet Astraé</p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-umber/85">
              Un espace d'analyse et d'accompagnement pour clarifier ce qui se joue en profondeur et avancer avec davantage
              de justesse dans vos périodes de transition.
            </p>
          </section>
          <section className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/approche">Approche</Link>
            <Link href="/accompagnements">Accompagnements</Link>
            <Link href="/analyse">Diagnostic</Link>
            <Link href="/contact">Contact</Link>
          </section>
        </div>
      </footer>
    </div>
  );
}
