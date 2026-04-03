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

/* CTA principal (inchangé) */
const primaryButtonClass =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#5D815D] px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_18px_rgba(46,62,53,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#537553]";

/* CTA secondaire premium (Faire un point) */
const pointEntryClass =
  "inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#DDD7CB] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(244,238,229,0.72))] px-5 py-2 text-sm font-medium text-pine shadow-[0_6px_16px_rgba(46,62,53,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2CCBF] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,239,232,0.84))]";

/* Footer version plus fine */
const footerButtonClass =
  "inline-flex min-h-[42px] items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-300";

/* Footer primaire allégé */
const footerPrimary =
  `${footerButtonClass} bg-[#5D815D] text-white shadow-[0_6px_14px_rgba(46,62,53,0.10)] hover:bg-[#537553]`;

/* Footer secondaire très léger */
const footerSecondary =
  `${footerButtonClass} border border-[#D8D5CE] bg-white/60 text-pine hover:bg-white/80`;

export function PageFrame({
  children,
  title,
  intro,
  showIntro = true,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-pine">
      {/* HEADER */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-3 md:px-8 md:pt-5">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.60),rgba(247,243,236,0.46))] shadow-[0_12px_34px_rgba(46,62,53,0.06)] backdrop-blur-xl">

            <div className="flex items-center justify-between gap-3 px-4 py-3.5 md:px-6 md:py-4">

              {/* LOGO */}
              <Link href="/" className="flex flex-col items-center text-center">
                <span className="text-[1rem] font-semibold tracking-[-0.03em]">
                  Cabinet Astraé
                </span>
                <span className="hidden text-[11px] text-umber/55 lg:block mt-1">
                  Analyse du thème astral · accompagnement
                </span>
              </Link>

              {/* NAV + CTA */}
              <div className="hidden items-center gap-5 md:flex">
                <nav className="flex items-center gap-6 text-sm">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-umber/80 hover:text-pine transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* POINT D’ENTRÉE */}
                <Link href={pointLink.href} className={pointEntryClass}>
                  {pointLink.label}
                </Link>

                {/* CTA PRINCIPAL */}
                <Link href="/contact" className={primaryButtonClass}>
                  Prendre un temps d'échange
                </Link>
              </div>

              {/* MOBILE MENU BTN */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden h-10 w-10 rounded-full border bg-white/70"
              >
                ☰
              </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
              <div className="md:hidden px-4 pb-4">
                <nav className="flex flex-col gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3 text-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-3">
                  <Link href={pointLink.href} className={`${pointEntryClass} w-full`}>
                    {pointLink.label}
                  </Link>
                </div>

                <div className="mt-3">
                  <Link href="/contact" className={`${primaryButtonClass} w-full`}>
                    Prendre un temps d'échange
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[1240px] px-4 md:px-8 py-10">
        {showIntro && (
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-medium">{title}</h1>
            <p className="mt-4 text-umber/80">{intro}</p>
          </div>
        )}
        {children}
      </main>

      {/* FOOTER */}
      <footer className="mt-10">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8 pb-8">
          <div className="rounded-[2rem] border border-white/35 bg-white/60 p-6 md:p-10 backdrop-blur-md">

            <div className="grid gap-10 md:grid-cols-3">

              {/* LEFT */}
              <div>
                <p className="font-semibold">Cabinet Astraé</p>
                <p className="mt-4 text-sm text-umber/80 leading-7">
                  Un espace d’analyse du thème astral pour éclairer ce que vous vivez et avancer avec plus de clarté.
                </p>
              </div>

              {/* NAV */}
              <div>
                <p className="text-xs uppercase text-pine/50 tracking-widest">
                  Navigation
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <p className="text-xs uppercase text-pine/50 tracking-widest">
                  Premier pas
                </p>

                <p className="mt-4 text-sm text-umber/80 leading-7">
                  Un premier échange pour faire le point et voir si la démarche vous correspond.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className={footerPrimary}>
                    Prendre un temps d'échange
                  </Link>

                  <Link href="/analyse" className={footerSecondary}>
                    Faire un point
                  </Link>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-8 border-t pt-4 text-xs text-umber/60 flex flex-col md:flex-row justify-between gap-3">
              <span>© 2026 Cabinet Astraé</span>
              <div className="flex gap-4">
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/confidentialite">Confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
