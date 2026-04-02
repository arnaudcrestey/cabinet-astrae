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
      <div className="space-y-8 md:space-y-12">

        {/* HERO */}
<section className="astrae-hero-shell rounded-[2rem] px-6 py-12 md:px-10 md:py-16">
  <div className="astrae-orbit astrae-orbit-1" />
  <div className="astrae-orbit astrae-orbit-2" />
  <div className="astrae-glow astrae-glow-1" />
  <div className="astrae-glow astrae-glow-2" />

  <div className="relative mx-auto max-w-2xl text-center">
    <p className="text-[11px] uppercase tracking-[0.28em] text-pine/55">
      Cabinet Astraé · Espace d’accompagnement personnel
    </p>

    <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.02] text-pine sm:text-[3.2rem] md:text-[4rem]">
      Clarifier ce que vous vivez
      <span className="mt-2 block">pour avancer avec plus de clarté</span>
    </h1>

    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-umber/80 md:text-base md:leading-8">
      Un espace d’analyse sobre et sensible pour mieux comprendre une
      période de transition, un blocage ou une situation relationnelle
      délicate, avec une approche humaine et le thème astral comme
      support de lecture lorsqu’il est pertinent.
    </p>

    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <Link
        href="/contact"
        className="rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
      >
        Prendre contact
      </Link>

      <Link
        href="/analyse"
        className="rounded-full border border-pine/15 bg-white/70 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
      >
        Commencer un diagnostic
      </Link>
    </div>

    <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-pine/10 pt-5 text-sm text-umber/65">
      <span>Écoute structurée</span>
      <span>Lecture sensible</span>
      <span>Cadre confidentiel</span>
    </div>
  </div>
</section>

        {/* BLOC 2 */}
        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/50 bg-white/65 p-6 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Quand quelque chose résiste
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine md:text-2xl">
              Parfois, ce n’est pas qu’il manque une réponse.
            </h2>
            <p className="mt-3 text-sm leading-7 text-umber/80 md:text-base">
              C’est qu’il devient difficile de situer ce qui se joue, de relier
              les éléments, ou de savoir comment avancer avec justesse.
            </p>
          </article>

          <article className="rounded-[1.6rem] border border-white/50 bg-white/70 p-6 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              La promesse
            </p>
            <p className="mt-3 text-lg font-medium text-pine md:text-xl">
              Mettre en lumière ce qui se joue pour avancer avec plus de clarté.
            </p>
          </article>
        </section>

        {/* APPROCHE */}
        <section className="rounded-[1.9rem] border border-white/50 bg-white/70 px-6 py-8 backdrop-blur-sm md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              L’approche Astraé
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine md:text-2xl">
              Une lecture en six mouvements
            </h2>
          </div>

          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-3">
            {astraeSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-[1.2rem] border border-white/60 bg-white/65 px-4 py-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-pine/15 text-sm font-semibold text-pine">
                  {step.letter}
                </span>
                <span className="text-sm text-pine">{step.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BAS */}
        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/50 bg-white/65 p-6 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Crédibilité
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine">
              25 ans d’expérience dans l’accompagnement
            </h2>
            <p className="mt-3 text-sm leading-7 text-umber/80 md:text-base">
              Une posture sobre, humaine et rigoureuse, au service d’une lecture
              plus claire de ce que la personne traverse.
            </p>
          </article>

          <article className="rounded-[1.6rem] border border-white/50 bg-white/70 p-6 backdrop-blur-sm text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Entrer en relation
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine md:text-2xl">
              Un premier échange pour mieux comprendre votre situation
            </h2>
            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory"
              >
                Prendre contact
              </Link>
            </div>
          </article>
        </section>

      </div>
    </PageFrame>
  );
}
