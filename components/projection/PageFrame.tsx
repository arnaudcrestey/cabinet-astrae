"use client";

import { useState } from "react";
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

const primaryButtonClass =
  "inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#5D815D] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#537553] hover:shadow-[0_14px_30px_rgba(46,62,53,0.18)]";

const secondaryButtonClass =
  "inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D8D5CE] bg-[rgba(255,255,255,0.54)] px-6 py-3 text-sm font-medium text-pine transition-all duration-300 hover:border-[#CFCBC3] hover:bg-[rgba(255,255,255,0.72)] hover:text-pine";

export function PageFrame({
  children,
  title,
  intro,
  showIntro = true,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-pine">
      <header className="sticky top-0 z-50">
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-3 md:px-8 md:pt-5">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.60),rgba(247,243,236,0.46))] shadow-[0_12px_34px_rgba(46,62,53,0.06)] backdrop-blur-xl">
            <div className="relative flex items-center justify-between gap-3 px-4 py-3.5 md:px-6 md:py-4">
              <div className="min-w-0 md:min-w-[320px]">
                <Link
                  href="/"
                  className="group flex flex-col items-center justify-center text-center leading-none"
                >
                  <span className="text-[0.98rem] font-semibold tracking-[-0.03em] text-pine transition-colors duration-300 group-hover:text-pine/90 md:text-[1.02rem]">
                    Cabinet Astraé
                  </span>
                  <span className="mt-1.5 hidden text-[11px] tracking-[0.06em] text-umber/55 lg:block">
                    Analyse du thème astral · clarification · accompagnement personnel
                  </span>
                </Link>
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

              <div className="hidden shrink-0 md:flex">
                <Link href="/contact" className={primaryButtonClass}>
                  Prendre un premier échange
                </Link>
              </div>

              <button
                type="button"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/55 bg-[rgba(255,250,246,0.78)] text-pine shadow-[0_8px_20px_rgba(46,62,53,0.06)] transition-all duration-300 hover:border-white/75 hover:bg-[rgba(248,241,234,0.94)] md:hidden"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      menuOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      menuOpen ? "top-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 md:hidden ${
                menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(245,239,232,0.70))] px-4 pb-5 pt-4 backdrop-blur-xl">
                <div className="rounded-[1.4rem] border border-white/45 bg-[rgba(255,255,255,0.28)] p-3 shadow-[0_10px_28px_rgba(46,62,53,0.05)]">
                  <nav className="flex flex-col gap-1.5">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-[1rem] px-4 py-3 text-center text-[15px] text-umber/88 transition-all duration-300 hover:bg-white/45 hover:text-pine"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-3 px-1 pb-1 pt-2">
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={`${primaryButtonClass} w-full`}
                    >
                      Prendre un premier échange
                    </Link>
                  </div>
                </div>
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

                <h1 className="mt-4 text-3xl font-semibold leading-tight text-pine md:text-5xl">
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

      <footer className="mt-8">
        <div className="mx-auto w-full max-w-[1240px] px-4 pb-6 md:px-8 md:pb-8">
          <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 backdrop-blur-md md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-10 text-center md:grid-cols-[1.15fr_0.72fr_1fr] md:gap-12 md:text-left">
              <div className="mx-auto max-w-[440px] md:mx-0 md:max-w-[420px]">
                <p className="text-lg font-semibold text-pine">Cabinet Astraé</p>
               <p className="mt-4 mx-auto max-w-[320px] text-center text-[15px] leading-9 text-umber/82 sm:max-w-[420px] md:mx-0 md:max-w-[360px] md:text-left">
  Un espace d’analyse du thème astral et d’accompagnement personnel pour mettre en lumière ce que vous vivez et avancer avec plus de clarté.
</p>
              </div>

              <div className="mx-auto md:mx-0">
                <p className="text-[11px] uppercase tracking-[0.24em] text-pine/50">
                  Navigation
                </p>
                <div className="mt-5 flex flex-col items-center gap-3 text-sm text-umber/82 md:items-start">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors duration-300 hover:text-pine"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

             <div className="mx-auto max-w-[440px] md:mx-0 md:max-w-[390px]">
  <p className="text-[11px] uppercase tracking-[0.24em] text-pine/50">
    Premier pas
  </p>

  <p className="mt-4 mx-auto max-w-[320px] text-center text-[15px] leading-9 text-umber/82 sm:max-w-[420px] md:mx-0 md:max-w-[360px] md:text-left">
    Un premier échange pour faire le point 
    et voir si la démarche vous correspond.
  </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <Link href="/contact" className={primaryButtonClass}>
                    Prendre un premier échange
                  </Link>

                  <Link href="/analyse" className={secondaryButtonClass}>
                    Découvrir le diagnostic
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/35 pt-5">
              <div className="flex flex-col items-center gap-3 text-center text-xs text-umber/62 sm:gap-4 md:flex-row md:justify-between md:text-left">
                <p className="whitespace-nowrap">
                  Cabinet Astraé · Espace d’accompagnement personnel
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                  <Link
                    href="/mentions-legales"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Mentions légales
                  </Link>
                  <Link
                    href="/confidentialite"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Politique de confidentialité
                  </Link>
                  <span className="text-umber/58">© 2026 Cabinet Astraé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
