import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const astraeSteps = [
  { letter: "A", title: "Accueillir" },
  { letter: "S", title: "Situer" },
  { letter: "T", title: "Traduire" },
  { letter: "R", title: "Relier" },
  { letter: "A", title: "Ajuster" },
  { letter: "É", title: "Éclairer" },
];

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de clarté"
      intro="Cabinet Astraé propose un espace d’analyse et d’accompagnement pour les périodes de transition, de questionnement ou de difficulté relationnelle."
      showIntro={false}
    >
      <div className="space-y-6 md:space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/55 px-6 py-8 shadow-[0_30px_90px_rgba(46,62,53,0.08)] md:rounded-[2.5rem] md:px-10 md:py-12 astrae-hero-shell">
          <div className="astrae-orbit astrae-orbit-1" />
          <div className="astrae-orbit astrae-orbit-2" />
          <div className="astrae-orbit astrae-orbit-3" />
          <div className="astrae-glow astrae-glow-1" />
          <div className="astrae-glow astrae-glow-2" />
          <div className="astrae-glow astrae-glow-3" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[640px] lg:mx-0">
              <p className="text-[11px] uppercase tracking-[0.28em] text-pine/55">
                Cabinet Astraé · Espace d’accompagnement personnel
              </p>

              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[0.96] text-pine sm:text-[3.4rem] md:text-[4.15rem]">
                Clarifier ce que vous vivez
                <span className="block">pour avancer avec plus de clarté</span>
              </h1>

              <p className="mt-6 max-w-[36rem] text-sm leading-7 text-umber/82 md:text-base md:leading-8">
                Un espace d’analyse sobre et sensible pour mieux comprendre une
                période de transition, un blocage ou une situation relationnelle
                délicate, avec une approche humaine et le thème astral comme
                support de lecture lorsqu’il est pertinent.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-pine/92"
                >
                  Prendre contact
                </Link>

                <Link
                  href="/analyse"
                  className="inline-flex items-center justify-center rounded-full border border-pine/15 bg-white/72 px-6 py-3 text-sm font-medium text-pine transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Commencer un diagnostic
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-pine/10 pt-5 text-sm text-umber/68">
                <span>Écoute structurée</span>
                <span>Lecture sensible</span>
                <span>Cadre confidentiel</span>
              </div>
            </div>

            <div className="relative mx-auto hidden h-full min-h-[340px] w-full max-w-[430px] lg:block">
              <div className="absolute inset-0 rounded-[2rem] border border-white/30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_62%)]" />
              <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
              <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18" />
              <div className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14" />
              <div className="absolute left-1/2 top-1/2 h-[2px] w-[18rem] -translate-x-1/2 -translate-y-1/2 bg-white/12" />
              <div className="absolute left-1/2 top-1/2 h-[18rem] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/12" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18)]" />
              <div className="absolute right-[18%] top-[22%] h-4 w-4 rounded-full border border-white/30 bg-white/18" />
              <div className="absolute bottom-[20%] left-[24%] h-3 w-3 rounded-full border border-white/24 bg-white/14" />
              <div className="absolute right-[28%] bottom-[26%] h-[5.5rem] w-[5.5rem] rounded-full border border-white/12" />
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[1.6rem] border border-white/50 bg-white/68 p-6 shadow-[0_16px_44px_rgba(46,62,53,0.05)] backdrop-blur-sm md:p-7">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Quand quelque chose résiste
            </p>
            <h2 className="mt-3 max-w-[26rem] text-2xl font-semibold leading-snug text-pine md:text-[2rem]">
              Parfois, ce n’est pas qu’il manque une réponse.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-umber/82 md:text-base">
              C’est qu’il devient difficile de situer ce qui se joue, de relier
              les éléments, ou de savoir comment avancer avec justesse.
            </p>
          </article>

          <article className="rounded-[1.6rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(244,241,234,0.82))] p-6 shadow-[0_16px_44px_rgba(46,62,53,0.05)] backdrop-blur-sm md:p-7">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              La promesse
            </p>
            <p className="mt-3 max-w-[30rem] text-xl font-medium leading-relaxed text-pine md:text-2xl">
              Mettre en lumière ce qui se joue pour avancer avec plus de clarté.
            </p>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[1.9rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,241,233,0.78))] px-6 py-7 shadow-[0_18px_54px_rgba(46,62,53,0.05)] backdrop-blur-sm md:px-8 md:py-8">
          <div className="pointer-events-none absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full border border-white/16" />
          <div className="pointer-events-none absolute bottom-[-4rem] left-[8%] h-32 w-32 rounded-full border border-white/12" />

          <div className="relative mx-auto max-w-[860px] text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              L’approche Astraé
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Une lecture en six mouvements
            </h2>
          </div>

          <div className="relative mx-auto mt-6 grid max-w-[980px] gap-3 md:grid-cols-2 xl:grid-cols-3">
            {astraeSteps.map((step, index) => (
              <article
                key={`${step.letter}-${step.title}-${index}`}
                className="group relative rounded-[1.35rem] border border-white/55 bg-white/62 px-4 py-4 transition duration-500 hover:-translate-y-0.5 hover:bg-white/82"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,239,232,0.82))] text-sm font-semibold text-pine shadow-[0_8px_24px_rgba(46,62,53,0.06)] transition duration-500 group-hover:scale-[1.03]">
                    {step.letter}
                  </span>
                  <h3 className="text-base font-medium text-pine md:text-lg">
                    {step.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
          <article className="rounded-[1.6rem] border border-white/50 bg-white/68 p-6 shadow-[0_16px_44px_rgba(46,62,53,0.05)] backdrop-blur-sm md:p-7">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Crédibilité
            </p>
            <h2 className="mt-3 max-w-[28rem] text-2xl font-semibold leading-snug text-pine">
              25 ans d’expérience dans l’accompagnement
            </h2>
            <p className="mt-3 text-sm leading-7 text-umber/82 md:text-base">
              Une posture sobre, humaine et rigoureuse, au service d’une lecture
              plus claire de ce que la personne traverse.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[1.6rem] border border-white/50 bg-[linear-gradient(180deg,rgba(244,239,229,0.88),rgba(255,255,255,0.76))] p-6 shadow-[0_16px_44px_rgba(46,62,53,0.05)] backdrop-blur-sm md:p-7">
            <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-40 w-40 rounded-full border border-pine/8" />
            <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-pine/8" />

            <div className="relative max-w-[34rem]">
              <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
                Entrer en relation
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
                Un premier échange pour mieux comprendre votre situation
              </h2>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-pine/92"
                >
                  Prendre contact
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    </PageFrame>
  );
}
