import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const markers = [
  "Écoute structurée",
  "Lecture approfondie",
  "Cadre confidentiel",
];

const situations = [
  "Période de transition personnelle ou professionnelle",
  "Blocage récurrent ou impression de tourner en rond",
  "Tension relationnelle ou hésitation importante",
  "Besoin d’éclairer une décision avec davantage de recul",
];

const steps = [
  {
    number: "01",
    title: "Commencer par un diagnostic",
    text: "Un premier point d’entrée pour obtenir une lecture initiale de votre situation et faire émerger les lignes essentielles.",
  },
  {
    number: "02",
    title: "Approfondir l’analyse",
    text: "Une lecture plus fine permet de mieux comprendre les dynamiques en jeu, les répétitions et les zones de tension.",
  },
  {
    number: "03",
    title: "Être accompagné si nécessaire",
    text: "Selon votre situation, le travail peut se prolonger dans un cadre plus approfondi, humain et structuré.",
  },
];

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de justesse"
      intro="Cabinet Astraé propose un cadre d’analyse sérieux, humain et structuré pour les périodes de flou, de tension ou de transition. L’objectif est d’apporter une lecture claire de votre situation, afin de mieux comprendre ce qui se joue et d’avancer de manière plus ajustée."
    >
      <div className="space-y-10 md:space-y-14">
        <section className="relative overflow-hidden rounded-[2rem] border border-sage/25 bg-white px-6 py-8 shadow-soft md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-pine/70">
              Cabinet d’analyse et d’accompagnement
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-pine md:text-5xl">
              Clarifier ce que vous vivez pour avancer avec plus de justesse
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-umber/90 md:text-lg">
              Cabinet Astraé propose un cadre d’analyse sérieux, humain et
              structuré pour les périodes de flou, de tension ou de transition.
              L’objectif est d’apporter une lecture claire de votre situation,
              afin de mieux comprendre ce qui se joue et d’avancer de manière
              plus ajustée.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
              >
                Prendre contact
              </Link>

              <Link
                href="/analyse"
                className="inline-flex rounded-full border border-pine/30 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
              >
                Commencer un diagnostic
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-sage/20 pt-5 text-sm text-umber/75">
              <span>Diagnostic d’entrée</span>
              <span className="hidden text-sage/50 md:inline">•</span>
              <span>Analyse approfondie</span>
              <span className="hidden text-sage/50 md:inline">•</span>
              <span>Accompagnement confidentiel</span>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[1.75rem] border border-sage/25 bg-white p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Le cadre du cabinet
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Un espace calme, sérieux et confidentiel
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-umber/90">
              Ici, il ne s’agit pas simplement d’obtenir une réponse rapide.
              Vous entrez dans un espace d’analyse conçu pour mettre en lumière
              ce qui reste flou, relier les éléments importants de votre
              situation et soutenir une lecture plus fine de ce que vous
              traversez.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {markers.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-sage/20 bg-sand/35 px-4 py-4 text-sm font-medium text-pine"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-sage/25 bg-sand/35 p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Pour qui
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Pour les périodes où quelque chose demande à être clarifié
            </h2>

            <p className="mt-4 leading-8 text-umber/90">
              Cabinet Astraé s’adresse aux personnes qui ressentent le besoin de
              mieux comprendre une situation avant d’aller plus loin.
            </p>

            <ul className="mt-6 space-y-3">
              {situations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-umber/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pine/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-[2rem] border border-sage/25 bg-white px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Le parcours Astraé
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Un parcours simple, progressif et humain
            </h2>

            <p className="mt-4 leading-8 text-umber/90">
              Le Cabinet s’organise autour d’une logique claire : un premier
              point d’entrée pour poser une lecture initiale, une analyse plus
              approfondie lorsque c’est pertinent, puis un accompagnement dans la
              continuité si la situation le demande.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.5rem] border border-sage/20 bg-sand/25 p-6"
              >
                <p className="text-sm font-medium tracking-[0.18em] text-pine/55">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-pine">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-umber/90">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-sage/25 bg-white p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Point d’entrée
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Un premier diagnostic pour mettre des mots sur ce qui se joue
            </h2>

            <p className="mt-4 leading-8 text-umber/90">
              Le diagnostic en ligne constitue une première entrée. Il permet de
              faire émerger les lignes essentielles de votre situation et
              d’ouvrir, si cela est juste, vers une analyse plus approfondie au
              sein du Cabinet.
            </p>

            <Link
              href="/analyse"
              className="mt-7 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-umber transition hover:bg-terracotta/85"
            >
              Démarrer le diagnostic
            </Link>
          </article>

          <article className="rounded-[1.75rem] border border-sage/25 bg-white p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Suite possible
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Approfondir avec un accompagnement plus personnalisé
            </h2>

            <p className="mt-4 leading-8 text-umber/90">
              Lorsque la situation le demande, le travail peut se poursuivre
              dans un cadre plus approfondi : clarification d’enjeux
              relationnels, compréhension de schémas récurrents, appui à la
              décision et lecture plus nuancée de ce que vous traversez.
            </p>

            <Link
              href="/accompagnements"
              className="mt-7 inline-flex rounded-full border border-pine/30 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
            >
              Voir les accompagnements
            </Link>
          </article>
        </section>

        <section className="rounded-[2rem] border border-sage/25 bg-sand/30 px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/65">
              Entrer en relation
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Prendre un temps pour clarifier ce qui mérite de l’être
            </h2>

            <p className="mt-4 leading-8 text-umber/90">
              Vous pouvez commencer par un diagnostic ou entrer directement en
              contact avec le Cabinet, selon ce qui vous semble le plus juste à
              ce stade.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
              >
                Prendre contact
              </Link>

              <Link
                href="/analyse"
                className="inline-flex rounded-full border border-pine/30 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
              >
                Commencer un diagnostic
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
