"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/approche", label: "Approche" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/contact", label: "Contact" },
] as const;

const pointLink = { href: "/analyse", label: "Faire un point" } as const;

type Props = {
  children: React.ReactNode;
  title: string;
  intro: string;
  showIntro?: boolean;
};

const primaryButtonClass =
  "inline-flex min-h-[50px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#6C9068_0%,#5D815D_100%)] px-6 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-white shadow-[0_14px_28px_rgba(76,101,79,0.16),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-[rgba(93,129,93,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_34px_rgba(76,101,79,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] hover:brightness-[1.015]";

const secondaryButtonClass =
  "inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(191,184,173,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0.22))] px-6 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#4E6C54] shadow-[0_10px_24px_rgba(94,84,72,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[6px] transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(177,169,158,0.95)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.28))] hover:text-[#45614A] hover:shadow-[0_14px_30px_rgba(94,84,72,0.09),inset_0_1px_0_rgba(255,255,255,0.82)]";

const pointEntryClass =
  "inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#D6D0C4] bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.18))] px-5 py-2 text-sm font-medium text-[#4D6D53] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-300 hover:border-[#CBC4B7] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.26))] hover:text-pine";

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

              <div className="hidden items-center gap-5 md:flex">
                <nav className="flex items-center gap-7 text-sm">
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

                <Link href={pointLink.href} className={pointEntryClass}>
                  {pointLink.label}
                </Link>

                <div className="hidden shrink-0 lg:flex">
                  <Link href="/contact" className={primaryButtonClass}>
                    Prendre un temps d'échange
                  </Link>
                </div>
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
                menuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
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

                  <div className="mt-3 rounded-[1.1rem] border border-white/45 bg-[rgba(255,255,255,0.20)] p-2.5">
                    <Link
                      href={pointLink.href}
                      onClick={() => setMenuOpen(false)}
                      className={`${pointEntryClass} w-full`}
                    >
                      {pointLink.label}
                    </Link>
                  </div>

                  <div className="mt-3 px-1 pb-1 pt-2">
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={`${primaryButtonClass} w-full`}
                    >
                      Prendre un temps d'échange
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
              <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 text-center backdrop-blur-md md:px-8 md:py-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-pine/50">
                  Cabinet Astraé
                </p>

                <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] text-pine md:text-5xl">
                  {title}
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-umber/82 md:text-lg">
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
            <div className="grid gap-12 text-center md:grid-cols-[1.2fr_0.72fr_1fr] md:gap-14 md:text-left">
              <div className="mx-auto max-w-[440px] text-center md:mx-0 md:max-w-[420px] md:text-left">
                <p className="text-[1.05rem] font-semibold tracking-[-0.02em] text-pine">
                  Cabinet Astraé
                </p>

                <p className="mt-5 text-[15px] leading-[2.15] text-umber/82">
                  Un espace d’analyse du thème astral et d’accompagnement personnel pour mettre en lumière ce que vous vivez et avancer avec plus de clarté.
                </p>
              </div>

              <div className="mx-auto text-center md:mx-0 md:text-left">
                <p className="text-[11px] uppercase tracking-[0.24em] text-pine/50">
                  Navigation
                </p>

                <div className="mt-5 flex flex-col items-center gap-3 text-[15px] text-umber/82 md:items-start">
                  <Link
                    href="/approche"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Approche
                  </Link>
                  <Link
                    href="/accompagnements"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Accompagnements
                  </Link>
                  <Link
                    href="/analyse"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Faire un point
                  </Link>
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mx-auto max-w-[460px] text-center md:mx-0 md:max-w-[410px] md:text-left">
                <p className="text-[11px] uppercase tracking-[0.24em] text-pine/50">
                  Premier pas
                </p>

                <p className="mt-5 text-[15px] leading-[2.15] text-umber/82">
                  Un premier échange pour faire le point et voir si la démarche vous correspond.
                </p>

                <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <Link href="/contact" className={primaryButtonClass}>
                    Prendre un temps d'échange
                  </Link>

                  <Link href="/analyse" className={secondaryButtonClass}>
                    Faire un point
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
