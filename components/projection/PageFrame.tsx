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
  "inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D8D5CE] bg-[rgba(255,255,255,0.54)] px-6 py-3 text-sm font-medium text-pine transition-all duration-300 hover:border-[#CFCBC3] hover:bg-[rgba(255,255,255,0.72)] hover:text-pine";

const pointEntryClass =
  "inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#D6D0C4] bg-[linear-gradient(180deg,rgba(255,255,255,0.40),rgba(255,255,255,0.18))] px-5 py-2 text-sm font-medium text-[#4D6D53] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-300 hover:border-[#CBC4B7] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.26))] hover:text-pine";

export function PageFrame({
  children,
  title,
  intro,
  showIntro = true,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-pine">
      {/* HEADER inchangé */}
      {/* ... */}

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

      {/* FOOTER */}
      <footer className="mt-8">
        <div className="mx-auto w-full max-w-[1240px] px-4 pb-6 md:px-8 md:pb-8">
          <div className="rounded-[2rem] border border-white/35 bg-white/60 px-6 py-8 backdrop-blur-md md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-10 text-center md:grid-cols-[1.15fr_0.72fr_1fr] md:gap-12 md:text-left">

              {/* COLONNES inchangées */}
              {/* ... */}

              <div className="mx-auto max-w-[440px] md:mx-0 md:max-w-[390px]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-pine/50">
                  Premier pas
                </p>

                <p className="mt-4 mx-auto max-w-[320px] text-center text-[15px] leading-9 text-umber/82 sm:max-w-[420px] md:mx-0 md:max-w-[360px] md:text-left">
                  Un premier échange pour faire le point 
                  et voir si la démarche vous correspond.
                </p>

                {/* 🔥 MODIFICATION ICI UNIQUEMENT */}
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#6C9068_0%,#5D815D_100%)] px-5 py-2 text-[13.5px] font-medium text-white text-center leading-tight shadow-[0_10px_22px_rgba(76,101,79,0.14)] transition-all duration-300 hover:-translate-y-[1px]"
                  >
                    Prendre un temps d'échange
                  </Link>

                  <Link
                    href="/analyse"
                    className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#D6D0C4] bg-[rgba(255,255,255,0.5)] px-5 py-2 text-[13.5px] font-medium text-[#4D6D53] text-center leading-tight transition-all duration-300 hover:bg-[rgba(255,255,255,0.7)]"
                  >
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
                  <Link href="/mentions-legales" className="hover:text-pine">
                    Mentions légales
                  </Link>
                  <Link href="/confidentialite" className="hover:text-pine">
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
