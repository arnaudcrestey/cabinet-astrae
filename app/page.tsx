import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const astraeMethod = [
  {
    letter: "A",
    title: "Accueillir",
    text: "Créer un espace de confiance où la personne peut déposer sa situation sans pression.",
  },
  {
    letter: "S",
    title: "Situer",
    text: "Comprendre où elle en est, ce qui pèse, ce qui hésite, ce qui demande à être regardé.",
  },
  {
    letter: "T",
    title: "Traduire",
    text: "Mettre des mots simples sur ce qui est vécu, sans surinterprétation ni abstraction inutile.",
  },
  {
    letter: "R",
    title: "Relier",
    text: "Faire apparaître les liens entre les éléments, les répétitions, les tensions et les dynamiques profondes.",
  },
  {
    letter: "A",
    title: "Ajuster",
    text: "Faire émerger des pistes plus justes, plus lucides et plus adaptées à la situation réelle.",
  },
  {
    letter: "É",
    title: "Éclairer",
    text: "Apporter davantage de clarté pour permettre une décision, un repositionnement ou un apaisement.",
  },
];

const situations = [
  "Période de transition personnelle ou professionnelle",
  "Tension relationnelle, blocage ou impression de tourner en rond",
  "Besoin de mieux comprendre ce qui se joue avant d’agir",
  "Moment de vie qui demande une lecture plus claire et plus posée",
];

const pathway = [
  {
    number: "01",
    title: "Un premier diagnostic",
    text: "Une première entrée pour poser une lecture initiale de la situation et faire émerger les points essentiels.",
  },
  {
    number: "02",
    title: "Une analyse plus approfondie",
    text: "Lorsque cela est pertinent, le travail permet d’aller plus loin dans la compréhension des dynamiques en jeu.",
  },
  {
    number: "03",
    title: "Un accompagnement dans la continuité",
    text: "Selon la situation, un espace plus approfondi peut être proposé pour soutenir un cheminement plus juste.",
  },
];

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de justesse"
      intro="Cabinet Astraé propose un cadre d’analyse sérieux, humain et structuré pour les périodes de flou, de tension ou de transition. L’objectif est d’apporter une lecture claire de votre situation, afin de mieux comprendre ce qui se joue et d’avancer de manière plus ajustée."
      showIntro={false}
    >
      <div className="space-y-10 md:space-y-16">
        <section className="relative overflow-hidden rounded-[2.2rem] border border-sage/20 bg-white px-6 py-8 shadow-soft md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-sage/8 blur-3xl" />
            <div className="absolute right-0 top-8 h-48 w-48 rounded-full bg-terracotta/8 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-pine/6 blur-2xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/35 to-transparent" />
          </div>

          <div className="relative max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-pine/65">
              Cabinet Astraé · espace d’accompagnement personnel
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-pine md:text-6xl">
              Clarifier ce que vous vivez pour avancer avec plus de clarté
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-umber/88 md:text-lg">
              Cabinet Astraé propose un espace d’analyse et d’accompagnement
              pour les périodes de questionnement, de transition ou de difficulté
              relationnelle. L’approche repose sur l’écoute, l’expérience
              humaine et, lorsque cela est juste, le thème astral comme support
              de compréhension.{" "}
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
                className="inline-flex rounded-full border border-pine/25 bg-white/80 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
              >
                Commencer un diagnostic
              </Link>
            </div>

            <div className="mt-8 grid gap-3 border-t border-sage/18 pt-5 text-sm text-umber/72 md:grid-cols-3">
              <span>Écoute structurée</span>
              <span>Lecture sensible et nuancée</span>
              <span>Cadre calme et confidentiel</span>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-sage/20 bg-white p-7 md:p-9">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-sand/45 blur-3xl" />

            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Le cadre du cabinet
            </p>

            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Un espace sérieux, apaisant et professionnel pour mieux se comprendre
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-umber/88">
              Ici, il ne s’agit pas d’un simple test ni d’une réponse
              automatique. Cabinet Astraé propose un cadre de lecture et
              d’accompagnement destiné à aider la personne à mieux situer ce
              qu’elle traverse, à clarifier ce qui reste flou et à retrouver une
              perception plus juste de sa situation.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-umber/88">
              L’univers du Cabinet reste sobre, naturel et maîtrisé. La
              sensibilité de l’approche est présente, mais toujours tenue dans
              un cadre clair, calme et professionnel.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-sage/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,244,238,0.92))] p-7 md:p-9">
            <div className="pointer-events-none absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full border border-sage/12 bg-white/40 blur-2xl" />

            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Pour qui
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Pour les moments où quelque chose demande à être éclairé
            </h2>

            <ul className="mt-6 space-y-4">
              {situations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-umber/88">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine/65" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[2.1rem] border border-sage/20 bg-white px-6 py-8 md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-sage/7 blur-2xl" />
            <div className="absolute right-10 bottom-8 h-24 w-24 rounded-full bg-terracotta/7 blur-2xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              La méthode Astraé
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Une approche progressive pour accueillir, relier et éclairer
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
              Le nom Astraé porte une logique d’accompagnement en plusieurs
              temps : accueillir, situer, traduire, relier, ajuster, éclairer.
              Cette trame structure le travail de manière discrète, humaine et
              lisible, sans jamais enfermer la personne dans une méthode rigide.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {astraeMethod.map((item) => (
              <article
                key={`${item.letter}-${item.title}`}
                className="rounded-[1.5rem] border border-sage/16 bg-sand/22 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/15 bg-white/80 text-base font-semibold text-pine">
                    {item.letter}
                  </span>
                  <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-umber/88">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-sage/20 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,246,241,0.92))] px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Le parcours
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Un chemin simple, lisible et respectueux du rythme de chacun
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
              Le Cabinet s’organise autour d’une progression naturelle : une
              première lecture, une analyse plus fine lorsque c’est pertinent,
              puis un accompagnement dans la continuité si la situation le
              demande.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pathway.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.5rem] border border-sage/16 bg-white/80 p-6"
              >
                <p className="text-sm font-medium tracking-[0.18em] text-pine/52">
                  {step.number}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-pine">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-umber/88">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.9rem] border border-sage/20 bg-white p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Point d’entrée
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Commencer par un premier diagnostic
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
              Le diagnostic en ligne constitue une première porte d’entrée. Il
              permet de poser un regard initial sur la situation, de faire
              émerger les lignes essentielles et d’ouvrir, si cela est juste,
              vers un travail plus approfondi au sein du Cabinet.
            </p>

            <Link
              href="/analyse"
              className="mt-7 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-umber transition hover:bg-terracotta/85"
            >
              Démarrer le diagnostic
            </Link>
          </article>

          <article className="rounded-[1.9rem] border border-sage/20 bg-white p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Accompagnement
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine">
              Approfondir dans un cadre humain et nuancé
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
              Lorsque la situation le demande, le travail peut se poursuivre
              autour d’enjeux relationnels, de répétitions, d’hésitations ou de
              périodes de transition, dans un cadre professionnel, calme et
              confidentiel.
            </p>

            <Link
              href="/accompagnements"
              className="mt-7 inline-flex rounded-full border border-pine/25 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
            >
              Voir les accompagnements
            </Link>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[2.2rem] border border-sage/20 bg-[linear-gradient(180deg,rgba(245,242,235,0.9),rgba(255,255,255,0.95))] px-6 py-8 md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-12 top-8 h-20 w-20 rounded-full bg-sage/8 blur-2xl" />
            <div className="absolute right-12 bottom-8 h-24 w-24 rounded-full bg-pine/6 blur-3xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/62">
              Entrer en relation
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Prendre un temps pour mieux comprendre ce que vous traversez
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
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
                className="inline-flex rounded-full border border-pine/25 bg-white/75 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine/5"
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
