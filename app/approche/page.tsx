import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const pillars = [
  {
    title: "Écoute",
    text: "Votre situation est accueillie avec sérieux, sans simplification ni lecture hâtive.",
  },
  {
    title: "Structure",
    text: "Les éléments importants sont mis en ordre pour faire émerger une compréhension plus lisible.",
  },
  {
    title: "Approfondissement",
    text: "L’analyse du thème astral intervient comme support de clarification, dans un cadre sobre et rigoureux.",
  },
];

export default function ApprochePage() {
  return (
    <PageFrame
      title="L’approche du Cabinet Astraé"
      intro="Une démarche de clarification personnelle qui articule écoute, mise en structure et analyse du thème astral."
      showIntro={false}
    >
      <div className="space-y-6 md:space-y-7">
        <section className="rounded-[2rem] border border-white/50 bg-[rgba(248,241,236,0.9)] px-6 py-12 text-center shadow-[0_18px_50px_rgba(88,72,60,0.06)] backdrop-blur-[2px] md:px-10 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-pine/50">
            CABINET ASTRAÉ · APPROCHE
          </p>
<h1 className="mx-auto mt-4 max-w-[18ch] text-center text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.045em] text-pine sm:max-w-[16ch] sm:text-[3rem] md:max-w-[15ch] md:text-[4rem] md:leading-[1.04] lg:text-[4.5rem]">
  Mieux comprendre ce que vous vivez
  <span className="mt-2 block md:mt-3">pour avancer plus sereinement</span>
</h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-pine/75">
            L’approche du Cabinet Astraé vise à rendre plus lisible ce qui,
            dans une période de vie, reste difficile à nommer, à relier ou à comprendre.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-pine/75">
            Elle s’appuie sur une écoute structurée de votre situation et,
            lorsque cela est pertinent, sur l’analyse du thème astral comme support
            d’approfondissement, dans une logique de compréhension et non de prédiction.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#5D815D] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:translate-y-[-1px] hover:bg-[#526f52]"
            >
              Prendre un temps d’échange
            </Link>

            <Link
              href="/analyse"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#5D815D]/24 bg-white/78 px-6 py-3 text-sm font-medium text-[#4E6F56] transition hover:border-[#5D815D]/36 hover:bg-white"
            >
              Faire un premier point
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/45 bg-[rgba(247,240,234,0.74)] p-8 shadow-[0_16px_40px_rgba(88,72,60,0.05)] backdrop-blur-[2px] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/46">
              REPÈRES
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-pine md:text-[2rem]">
              Une démarche sobre, humaine et structurée
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-pine/74">
              Le Cabinet Astraé ne propose ni réponses toutes faites, ni lecture
              spectaculaire de ce que vous traversez. Le travail consiste à éclairer une situation, à mieux comprendre ce que vous traversez, et à faire émerger une lecture plus juste de votre situation.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-[1.5rem] border border-white/55 bg-white/82 p-6 shadow-[0_12px_30px_rgba(88,72,60,0.05)] backdrop-blur-[2px]"
              >
                <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-pine/72">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>


        <section className="rounded-[2rem] border border-white/50 bg-[rgba(248,241,236,0.9)] p-8 shadow-[0_18px_50px_rgba(88,72,60,0.06)] backdrop-blur-[2px] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-pine/46">
              PREMIÈRE ÉTAPE
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-pine md:text-[2rem]">
              Commencer simplement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-pine/74">
              Vous pouvez commencer par faire un point sur votre situation.
              Cette première étape permet de poser les éléments importants avant
              d’envisager, si besoin, une suite plus approfondie avec le Cabinet.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center">
  <Link
    href="/analyse"
    className="inline-flex min-h-[54px] min-w-[196px] items-center justify-center rounded-full bg-[#5D815D] px-9 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:translate-y-[-1px] hover:bg-[#526f52]"
  >
    Faire un point
  </Link>

  <div className="mt-4 inline-flex max-w-[260px] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border border-[#5D815D]/18 bg-white/55 px-4 py-2 text-center text-xs font-medium leading-5 tracking-[0.02em] text-[#4E6F56] sm:max-w-none sm:rounded-full sm:px-4 sm:py-2">
    <span>Gratuit</span>
    <span className="hidden sm:inline">•</span>
    <span>Sans engagement</span>
    <span className="hidden sm:inline">•</span>
    <span>En quelques minutes</span>
  </div>
</div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
