import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { PageFrame } from "@/components/projection/PageFrame";

const situations: string[] = [
  "Vous traversez une période de transition personnelle, relationnelle ou professionnelle.",
  "Vous avez le sentiment de répéter certains schémas sans parvenir à en comprendre l’origine.",
  "Vous ressentez un blocage ou un décalage entre ce que vous vivez et ce que vous arrivez à formuler.",
  "Vous avez besoin d’y voir plus clair avant de prendre une décision ou de retrouver un axe.",
];

const journey: Array<{
  title: string;
  description: string;
  cta: string;
  href: Route;
}> = [
  {
    title: "Diagnostic",
    description:
      "Une première entrée simple pour faire émerger une problématique, identifier une tension ou obtenir une première mise en lumière.",
    cta: "Découvrir le diagnostic",
    href: "/analyse",
  },
  {
    title: "Analyse approfondie",
    description:
      "Une lecture plus fine de votre situation, pouvant s’appuyer sur votre thème astral lorsqu’il permet d’éclairer avec plus de précision les dynamiques en jeu.",
    cta: "Découvrir l’approche",
    href: "/approche",
  },
  {
    title: "Accompagnement Astraé",
    description:
      "Un accompagnement plus personnel pour clarifier une situation complexe, traverser une période de transition ou soutenir une prise de décision.",
    cta: "Voir les accompagnements",
    href: "/accompagnements",
  },
];

const processSteps: Array<{
  number: string;
  title: string;
  text: string;
}> = [
  {
    number: "01",
    title: "Entrer dans l’expérience",
    text: "Par un diagnostic ou un premier échange, selon votre situation.",
  },
  {
    number: "02",
    title: "Mettre en lumière ce qui se joue",
    text: "À partir d’une lecture structurée, sobre et sensible de ce que vous vivez.",
  },
  {
    number: "03",
    title: "Approfondir lorsque nécessaire",
    text: "Avec une analyse pouvant s’appuyer sur le thème astral pour éclairer les dynamiques de fond.",
  },
  {
    number: "04",
    title: "Avancer avec plus de clarté",
    text: "Dans une démarche ajustée à la réalité de votre situation.",
  },
];

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de justesse"
      intro="Cabinet Astraé est un cabinet de clarification personnelle et d’accompagnement pour les périodes de flou, de blocage ou de transition."
      showIntro={false}
    >
      <div className="space-y-8 md:space-y-12">
        <section className="astrae-hero-shell rounded-[2rem] px-6 py-12 md:px-10 md:py-16">
          <div className="astrae-orbit astrae-orbit-1" />
          <div className="astrae-orbit astrae-orbit-2" />
          <div className="astrae-glow astrae-glow-1" />
          <div className="astrae-glow astrae-glow-2" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-pine/55">
              Cabinet Astraé · Clarification personnelle et accompagnement
            </p>

            <h1 className="mt-6 text-[2.3rem] font-semibold leading-[1.04] text-pine sm:text-[3.1rem] md:text-[4rem]">
              Clarifier ce que vous vivez
              <span className="mt-2 block">
                pour avancer avec plus de justesse
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-umber/80 md:text-base md:leading-8">
              Cabinet Astraé accompagne les personnes en période de flou, de
              blocage ou de transition. Une lecture approfondie de votre
              situation permet de mettre en lumière ce qui se joue, avec une
              analyse pouvant s’appuyer sur le thème astral lorsque cela est
              pertinent.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
              >
                Prendre un premier échange
              </Link>

              <Link
                href="/approche"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-pine/15 bg-white/70 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
              >
                Découvrir l’approche
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-pine/10 pt-5 text-sm text-umber/65">
              <span>Lecture approfondie</span>
              <span>Cadre confidentiel</span>
              <span>Approche humaine</span>
            </div>
          </div>
        </section>

        <section className="astrae-panel rounded-[1.9rem] px-6 py-8 md:px-8 md:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Quand quelque chose reste flou
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine md:text-2xl">
              Vous êtes peut-être dans l’une de ces situations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-umber/80 md:text-base">
              Certaines situations ne manquent pas seulement de réponse. Elles
              demandent une lecture plus fine pour comprendre ce qui se joue
              réellement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {situations.map((item) => (
              <article
                key={item}
                className="rounded-[1.35rem] border border-white/55 bg-white/60 p-5 backdrop-blur-sm md:p-6"
              >
                <p className="text-sm leading-7 text-umber/85 md:text-base">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="astrae-panel rounded-[1.9rem] px-6 py-8 md:px-8 md:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Ce que propose Astraé
            </p>
            <h2 className="mt-3 text-xl font-semibold text-pine md:text-2xl">
              Un parcours progressif de compréhension
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-umber/80 md:text-base">
              Astraé ne propose pas une lecture abstraite, mais une approche
              incarnée de la situation vécue, avec différents niveaux
              d’approfondissement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {journey.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-[1.35rem] border border-white/55 bg-white/62 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-pine md:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-umber/80 md:text-base">
                  {item.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-pine/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-pine transition hover:bg-white"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

               <section className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[1.18fr_0.82fr]">
          <article className="astrae-panel overflow-hidden rounded-[1.75rem]">
            <div className="grid h-full gap-0 md:grid-cols-[280px_minmax(0,1fr)]">
              <div className="relative min-h-[320px] md:min-h-full">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
                <Image
                  src="/images/virginie-astrae.png"
                  alt="Virginie, fondatrice du Cabinet Astraé"
                  fill
                  className="object-cover object-center scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 280px"
                  priority
                />
              </div>

              <div className="p-6 text-center md:p-7 md:text-left">
                <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
                  Qui est derrière Astraé
                </p>

                <h2 className="mt-3 mx-auto max-w-xl text-xl font-semibold leading-tight text-pine md:mx-0 md:text-[1.9rem]">
                  Une approche humaine, précise et profondément attentive
                </h2>

                <p className="mt-4 mx-auto max-w-[36rem] text-sm leading-7 text-umber/80 md:mx-0 md:max-w-none md:text-base">
                  Virginie accompagne depuis de nombreuses années des personnes
                  traversant des périodes de fragilité, de questionnement ou de
                  transition. Son approche repose sur l’écoute et une sensibilité particulière à ce qui se joue en profondeur dans une situation.
                </p>

                <p className="mt-4 mx-auto max-w-[36rem] text-sm leading-7 text-umber/80 md:mx-0 md:max-w-none md:text-base">
                  Lorsque cela peut éclairer plus finement une situation,
                  l’analyse du thème astral vient approfondir la lecture. Elle
                  est utilisée comme un support de compréhension, au service de
                  la personne et de ce qu’elle traverse, jamais comme une
                  promesse de prédiction.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-pine/10 pt-5 text-sm text-umber/65 md:justify-start">
                  <span>Écoute structurée</span>
                  <span>Analyse du thème astral</span>
                  <span>Cadre confidentiel</span>
                </div>
              </div>
            </div>
          </article>

          <article className="astrae-panel flex flex-col justify-center rounded-[1.75rem] p-6 text-center md:p-7 lg:text-left">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/55">
              Faire un premier pas
            </p>

            <h2 className="mt-3 mx-auto max-w-md text-xl font-semibold leading-tight text-pine lg:mx-0 md:text-[1.9rem]">
              Un premier échange pour mieux comprendre votre situation
            </h2>

            <p className="mt-4 mx-auto max-w-md text-sm leading-7 text-umber/80 md:text-base lg:mx-0">
              Lorsqu’une situation devient difficile à lire seul, un premier échange
  permet déjà de mettre des mots, de faire apparaître les lignes de fond
  et d’envisager la suite avec davantage de justesse.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 lg:items-stretch">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] w-full max-w-[420px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
              >
                Prendre un premier échange
              </Link>

              <Link
                href="/analyse"
                className="inline-flex min-h-[52px] w-full max-w-[420px] items-center justify-center rounded-full border border-pine/15 bg-white/70 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
              >
                Commencer par le diagnostic
              </Link>
            </div>
          </article>
        </section>
      </div>
    </PageFrame>
  );
}
