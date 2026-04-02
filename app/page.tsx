import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const astraeMethod = [
  {
    letter: "A",
    title: "Accueillir",
    text: "Créer un espace de confiance où la parole peut se déposer avec simplicité.",
  },
  {
    letter: "S",
    title: "Situer",
    text: "Comprendre où en est la personne, ce qui pèse, ce qui hésite et ce qui demande à être regardé.",
  },
  {
    letter: "T",
    title: "Traduire",
    text: "Mettre des mots justes sur ce qui est vécu, sans excès d’interprétation ni flou inutile.",
  },
  {
    letter: "R",
    title: "Relier",
    text: "Faire apparaître les liens entre les éléments, les répétitions et les dynamiques plus profondes.",
  },
  {
    letter: "A",
    title: "Ajuster",
    text: "Faire émerger des pistes plus fines, plus lucides et plus adaptées à la situation réelle.",
  },
  {
    letter: "É",
    title: "Éclairer",
    text: "Apporter davantage de clarté pour permettre un repositionnement ou un apaisement.",
  },
];

const situations = [
  "Période de transition personnelle ou professionnelle",
  "Tension relationnelle, blocage ou impression de tourner en rond",
  "Besoin de mieux comprendre ce qui se joue avant de décider",
  "Moment de vie qui appelle une lecture plus claire et plus posée",
];

const pathway = [
  {
    number: "01",
    title: "Un premier diagnostic",
    text: "Une première lecture pour faire émerger les lignes essentielles de la situation.",
  },
  {
    number: "02",
    title: "Une analyse plus approfondie",
    text: "Un temps plus fin pour comprendre les dynamiques, tensions et répétitions en jeu.",
  },
  {
    number: "03",
    title: "Un accompagnement dans la continuité",
    text: "Lorsque c’est juste, un espace plus approfondi peut prolonger le travail engagé.",
  },
];

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de justesse"
      intro="Cabinet Astraé propose un espace d’analyse et d’accompagnement pour les périodes de questionnement, de transition ou de difficulté relationnelle."
      showIntro={false}
    >
      <div className="space-y-10 md:space-y-16">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(249,246,240,0.72))] px-6 py-8 shadow-[0_20px_80px_rgba(55,72,60,0.07)] backdrop-blur-sm md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-3rem] top-[-3rem] h-40 w-40 rounded-full border border-white/35 bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(255,255,255,0.04)_68%,transparent_72%)] blur-sm" />
            <div className="absolute right-8 top-10 h-28 w-28 rounded-full border border-sage/15 bg-[radial-gradient(circle,rgba(255,255,255,0.4),rgba(214,204,186,0.15)_62%,transparent_72%)]" />
            <div className="absolute right-[-4rem] top-[-2rem] h-56 w-56 rounded-full bg-sage/10 blur-3xl" />
            <div className="absolute left-1/3 bottom-[-3rem] h-32 w-32 rounded-full bg-terracotta/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>

          <div className="relative max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-pine/60">
              Cabinet Astraé · Espace d’accompagnement personnel
            </p>

            <div className="mt-6 max-w-3xl">
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-12 bg-pine/20" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-pine/45">
                  Pour mieux se comprendre
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.02] text-pine md:text-6xl">
                Clarifier ce que vous vivez
                <br className="hidden md:block" />
                <span className="md:inline"> pour avancer avec plus de clarté</span>
              </h1>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-umber/88 md:text-lg">
              Cabinet Astraé propose un espace d’analyse et d’accompagnement
              pour les périodes de questionnement, de transition ou de difficulté
              relationnelle. L’approche repose sur l’écoute, l’expérience
              humaine et, lorsque cela est juste, le thème astral comme support
              de compréhension.
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
                className="inline-flex rounded-full border border-pine/20 bg-white/65 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
              >
                Commencer un diagnostic
              </Link>
            </div>

            <div className="mt-8 grid gap-3 border-t border-pine/10 pt-5 text-sm text-umber/72 md:grid-cols-3">
              <span>Écoute structurée</span>
              <span>Lecture sensible et nuancée</span>
              <span>Cadre calme et confidentiel</span>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(247,243,235,0.68))] p-7 shadow-[0_12px_48px_rgba(55,72,60,0.05)] backdrop-blur-sm md:p-9">
            <div className="pointer-events-none absolute right-[-2rem] top-[-1rem] h-28 w-28 rounded-full bg-sage/10 blur-2xl" />

            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
              Le cadre du cabinet
            </p>

            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Une présence sérieuse, sensible et structurée
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-umber/88">
              Cabinet Astraé n’est pas conçu comme un simple dispositif
              automatisé. C’est un espace d’accompagnement destiné à aider la
              personne à mieux situer ce qu’elle traverse, à clarifier ce qui
              reste flou et à retrouver une perception plus juste de sa
              situation.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-umber/88">
              L’approche reste sobre et maîtrisée. La dimension symbolique peut
              être présente, mais toujours dans un cadre calme, professionnel et
              lisible, fidèle à l’esprit du Cabinet.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(244,239,230,0.7))] p-7 shadow-[0_12px_48px_rgba(55,72,60,0.05)] backdrop-blur-sm md:p-9">
            <div className="pointer-events-none absolute left-1/2 top-4 h-24 w-24 -translate-x-1/2 rounded-full border border-white/40 bg-white/20 blur-xl" />

            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
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

        <section className="relative overflow-hidden rounded-[2.15rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(246,242,235,0.7))] px-6 py-8 shadow-[0_16px_60px_rgba(55,72,60,0.05)] backdrop-blur-sm md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-sage/8 blur-2xl" />
            <div className="absolute right-10 bottom-8 h-24 w-24 rounded-full bg-terracotta/8 blur-2xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
              La méthode Astraé
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-pine md:text-3xl">
              Une approche qui accueille, relie et éclaire
            </h2>

            <p className="mt-4 leading-8 text-umber/88">
              Le nom Astraé porte une logique d’accompagnement en plusieurs
              temps : accueillir, situer, traduire, relier, ajuster, éclairer.
              Cette trame donne une structure au travail sans rigidité, dans un
              esprit humain, lisible et profondément nuancé.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {astraeMethod.map((item) => (
              <article
                key={`${item.letter}-${item.title}`}
                className="rounded-[1.5rem] border border-white/45 bg-white/55 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,230,0.72))] text-base font-semibold text-pine shadow-[0_6px_20px_rgba(55,72,60,0.06)]">
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

        <section className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,243,236,0.72))] px-6 py-8 shadow-[0_16px_60px_rgba(55,72,60,0.05)] backdrop-blur-sm md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
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
                className="rounded-[1.5rem] border border-white/45 bg-white/62 p-6 backdrop-blur-sm"
              >
                <p className="text-sm font-medium tracking-[0.18em] text-pine/50">
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
          <article className="rounded-[1.95rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,243,235,0.72))] p-7 shadow-[0_12px_48px_rgba(55,72,60,0.05)] backdrop-blur-sm md:p-9">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
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

          <article className="rounded-[1.95rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,243,235,0.72))] p-7 shadow-[0_12px_48px_rgba(55,72,60,0.05)] backdrop-blur-sm md:p-9">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
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
              className="mt-7 inline-flex rounded-full border border-pine/20 bg-white/55 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
            >
              Voir les accompagnements
            </Link>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[2.2rem] border border-white/40 bg-[linear-gradient(180deg,rgba(243,238,228,0.78),rgba(255,255,255,0.72))] px-6 py-8 shadow-[0_18px_70px_rgba(55,72,60,0.05)] backdrop-blur-sm md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/30 bg-white/15 blur-2xl" />
            <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-sage/10 blur-3xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.26em] text-pine/58">
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
                className="inline-flex rounded-full border border-pine/20 bg-white/60 px-6 py-3 text-sm font-medium text-pine transition hover:bg-white"
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
