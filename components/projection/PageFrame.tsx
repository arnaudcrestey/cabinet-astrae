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
          <div className="overflow-hidden rounded-[1.65rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(247,243,236,0.44))] shadow-[0_12px_34px_rgba(46,62,53,0.06)] backdrop-blur-xl">
            <div className="relative flex items-center justify-between gap-3 px-4 py-3.5 md:px-6 md:py-4">
              <div className="min-w-0 md:min-w-[280px]">
                <Link
                  href="/"
                  className="group flex flex-col items-center justify-center text-center leading-none"
                >
                  <span className="text-[0.98rem] font-semibold tracking-[-0.03em] text-pine transition-colors duration-300 group-hover:text-pine/90 md:text-[1.02rem]">
                    Cabinet Astraé
                  </span>
                  <span className="mt-1.5 hidden text-[11px] tracking-[0.08em] text-umber/55 lg:block">
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
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/55 bg-[rgba(255,250,246,0.84)] px-5 py-2.5 text-sm font-medium text-pine shadow-[0_6px_18px_rgba(46,62,53,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-[rgba(248,241,234,0.96)] hover:shadow-[0_10px_24px_rgba(46,62,53,0.08)]"
                >
                  Prendre un premier échange
                </Link>
              </div>

              <button
                type="button"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-[rgba(255,250,246,0.72)] text-pine shadow-[0_6px_18px_rgba(46,62,53,0.05)] transition-all duration-300 hover:border-white/70 hover:bg-[rgba(248,241,234,0.9)] md:hidden"
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
              className={`grid transition-all duration-300 md:hidden ${
                menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/35 px-4 pb-4 pt-3">
                  <nav className="flex flex-col gap-1">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-2xl px-4 py-3 text-sm text-umber/85 transition-colors duration-300 hover:bg-white/40 hover:text-pine"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-3">
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/55 bg-[rgba(255,250,246,0.84)] px-5 py-3 text-sm font-medium text-pine shadow-[0_6px_18px_rgba(46,62,53,0.05)] transition-all duration-300 hover:border-white/70 hover:bg-[rgba(248,241,234,0.96)]"
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
          <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 backdrop-blur-md md:px-8 md:py-10">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_1fr] md:items-start">
              <div>
                <p className="text-lg font-semibold text-pine">Cabinet Astraé</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-umber/82">
                  Un espace d’analyse du thème astral et d’accompagnement personnel
                  pour mettre en lumière ce que vous vivez et avancer avec plus de
                  clarté.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-pine/50">
                  Navigation
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-umber/82">
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

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-pine/50">
                  Premier pas
                </p>
                <p className="mt-4 text-sm leading-7 text-umber/82">
                  Un premier échange permet de faire le point simplement et de voir
                  si la démarche vous correspond.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/55 bg-[rgba(255,250,246,0.84)] px-5 py-3 text-sm font-medium text-pine shadow-[0_6px_18px_rgba(46,62,53,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-[rgba(248,241,234,0.96)]"
                  >
                    Prendre un premier échange
                  </Link>

                  <Link
                    href="/analyse"
                    className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/35 px-5 py-3 text-sm font-medium text-pine/88 transition-all duration-300 hover:border-white/65 hover:bg-white/55 hover:text-pine"
                  >
                    Découvrir le diagnostic
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/35 pt-5">
              <div className="flex flex-col gap-3 text-xs text-umber/62 sm:flex-row sm:items-center sm:justify-between">
                <p>Cabinet Astraé · Espace d’accompagnement personnel</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/confidentialite"
                    className="transition-colors duration-300 hover:text-pine"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
