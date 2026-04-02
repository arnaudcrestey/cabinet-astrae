import Link from "next/link";

const links = [
  { href: "/approche", label: "Approche" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/analyse", label: "Diagnostic" },
  { href: "/contact", label: "Contact" },
] as const;

export function PageFrame({
  children,
  title,
  intro,
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
}) {
  return (
    <div className="min-h-screen bg-ivory text-pine">
      <header className="sticky top-0 z-30 border-b border-sage/20 bg-ivory/92 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-5 py-4 md:px-8 md:py-5">
          <div className="min-w-0">
            <Link
              href="/"
              className="inline-flex items-center text-[1.1rem] font-semibold tracking-[-0.02em] text-pine transition hover:opacity-90"
            >
              Cabinet Astraé
            </Link>
            <p className="mt-1 hidden text-xs leading-relaxed text-umber/68 sm:block">
              Analyse, clarification et accompagnement personnel
            </p>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-umber/88 transition hover:text-pine"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center rounded-full border border-pine/20 bg-white/70 px-4 py-2.5 text-xs font-medium text-pine transition hover:border-pine/35 hover:bg-white md:px-5 md:text-sm"
          >
            Prendre contact
          </Link>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sand/35 to-transparent" />

        <div className="mx-auto w-full max-w-[1180px] px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16">
          <section className="mb-10 md:mb-14">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.26em] text-pine/60">
                Cabinet Astraé
              </p>

              <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-pine md:text-5xl">
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-umber/88 md:text-lg">
                {intro}
              </p>
            </div>
          </section>

          {children}
        </div>
      </main>

      <footer className="border-t border-sage/20 bg-sand/30">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
            <section>
              <p className="text-lg font-semibold tracking-[-0.02em] text-pine">
                Cabinet Astraé
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-umber/84 md:text-[15px]">
                Un espace d’analyse et d’accompagnement pour clarifier ce qui se
                joue en profondeur, retrouver un axe plus lisible et avancer avec
                davantage de justesse dans les périodes de transition, de tension
                ou de questionnement.
              </p>
            </section>

            <section className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-umber/88">
              <Link className="transition hover:text-pine" href="/approche">
                Approche
              </Link>
              <Link className="transition hover:text-pine" href="/accompagnements">
                Accompagnements
              </Link>
              <Link className="transition hover:text-pine" href="/analyse">
                Diagnostic
              </Link>
              <Link className="transition hover:text-pine" href="/contact">
                Contact
              </Link>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}
