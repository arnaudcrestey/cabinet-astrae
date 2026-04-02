import Link from "next/link";

const links = [
  { href: "/approche", label: "Approche" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/analyse", label: "Diagnostic" },
  { href: "/contact", label: "Contact" },
] as const;

type Props = {
  children: React.ReactNode;
  title: string;
  intro: string;
  showIntro?: boolean;
};

export function PageFrame({
  children,
  title,
  intro,
  showIntro = true,
}: Props) {
  return (
    <div className="min-h-screen text-pine">
      <header className="sticky top-0 z-40">
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-3 md:px-8 md:pt-5">
          <div className="relative overflow-hidden rounded-full border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(247,243,236,0.42))] shadow-[0_12px_34px_rgba(46,62,53,0.06)] backdrop-blur-xl">
            <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">

              {/* LOGO */}
              <div className="min-w-[220px] md:min-w-[250px]">
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center text-center leading-none"
                >
                  <span className="text-[1rem] font-semibold tracking-[-0.03em] text-pine">
                    Cabinet Astraé
                  </span>
                  <span className="mt-2 hidden text-[11px] tracking-[0.08em] text-umber/55 sm:block">
                    Analyse · clarification · accompagnement personnel
                  </span>
                </Link>
              </div>

              {/* NAV */}
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

              {/* CTA */}
              <div className="flex min-w-[220px] justify-end md:min-w-[250px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-pine/10 bg-[rgba(244,236,228,0.7)] px-5 py-2.5 text-sm font-medium text-pine transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(239,229,220,0.9)] hover:shadow-[0_8px_24px_rgba(46,62,53,0.08)]"
                >
                  Prendre un premier échange
                </Link>
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12">
          {showIntro && (
            <section className="mb-10 md:mb-14">
              <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 backdrop-blur-md md:px-8 md:py-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-pine/55">
                  Cabinet Astraé
                </p>

                <h1 className="mt-4 text-3xl font-semibold text-pine md:text-5xl">
                  {title}
                </h1>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-umber/84 md:text-lg">
                  {intro}
                </p>
              </div>
            </section>
          )}

          {children}
        </div>
      </main>

      <footer className="mt-6">
        <div className="mx-auto w-full max-w-[1240px] px-4 pb-6 md:px-8 md:pb-8">
          <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 backdrop-blur-md md:px-8 md:py-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-pine">
                  Cabinet Astraé
                </p>
                <p className="mt-3 text-sm text-umber/82">
                  Un espace d’analyse et d’accompagnement pour mettre en lumière
                  ce qui se joue et avancer avec plus de clarté.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-umber/82">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
