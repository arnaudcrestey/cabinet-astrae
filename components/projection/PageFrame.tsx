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
  showIntro = true,
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
  showIntro?: boolean;
}) {
  return (
    <div className="min-h-screen text-pine">
      <header className="sticky top-0 z-40">
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-3 md:px-8 md:pt-5">
          <div className="relative overflow-hidden rounded-full border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(247,243,236,0.42))] shadow-[0_12px_34px_rgba(46,62,53,0.06)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-10 top-1/2 h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute right-10 top-1/2 h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
              <div className="min-w-0">
                <Link
                  href="/"
                  className="inline-flex items-center text-[1rem] font-semibold tracking-[-0.03em] text-pine transition duration-300 hover:opacity-85 md:text-[1.08rem]"
                >
                  Cabinet Astraé
                </Link>

                <p className="mt-0.5 hidden text-[11px] leading-relaxed tracking-[0.08em] text-umber/55 sm:block">
                  Analyse · clarification · accompagnement personnel
                </p>
              </div>

              <nav className="hidden items-center gap-7 text-sm md:flex">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-umber/82 transition duration-300 hover:text-pine"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/46 px-4 py-2.5 text-xs font-medium text-pine transition duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/58 md:px-5 md:text-sm"
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

        <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12">
          {showIntro && (
            <section className="mb-10 md:mb-14">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(245,241,233,0.48))] px-6 py-8 shadow-[0_18px_54px_rgba(46,62,53,0.06)] backdrop-blur-md md:px-8 md:py-10">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full border border-white/16" />
                  <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/14" />
                  <div className="absolute left-[-1rem] bottom-[-1rem] h-24 w-24 rounded-full bg-white/8 blur-2xl" />
                </div>

                <div className="relative max-w-4xl">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-pine/55">
                    Cabinet Astraé
                  </p>

                  <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-pine md:text-5xl">
                    {title}
                  </h1>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-umber/84 md:text-lg md:leading-8">
                    {intro}
                  </p>
                </div>
              </div>
            </section>
          )}

          {children}
        </div>
      </main>

      <footer className="relative mt-6">
        <div className="mx-auto w-full max-w-[1240px] px-4 pb-6 md:px-8 md:pb-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(244,240,232,0.46))] shadow-[0_16px_48px_rgba(46,62,53,0.06)] backdrop-blur-md">
            <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.25fr_0.75fr] md:px-8 md:py-10">
              <section>
                <p className="text-lg font-semibold tracking-[-0.03em] text-pine">
                  Cabinet Astraé
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-umber/82 md:text-[15px]">
                  Un espace d’analyse et d’accompagnement pour mettre en lumière
                  ce qui se joue, retrouver davantage de clarté et avancer avec
                  plus de justesse.
                </p>
              </section>

              <section className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-umber/82">
                <Link className="transition duration-300 hover:text-pine" href="/approche">
                  Approche
                </Link>
                <Link
                  className="transition duration-300 hover:text-pine"
                  href="/accompagnements"
                >
                  Accompagnements
                </Link>
                <Link className="transition duration-300 hover:text-pine" href="/analyse">
                  Diagnostic
                </Link>
                <Link className="transition duration-300 hover:text-pine" href="/contact">
                  Contact
                </Link>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
