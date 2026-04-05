import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const bookingUrl = "#"; // Remplace ici par ton lien de réservation réel

const included = [
  "Un échange en visio d’environ 1h à 1h30.",
  "Un temps pour reprendre votre situation avec attention et clarté.",
  "Un regard structuré sur ce que vous vivez actuellement.",
  "Des repères concrets pour discerner la suite la plus juste.",
];

const forWho = [
  "Si vous traversez une période de flou, de transition ou de blocage.",
  "Si vous ressentez le besoin d’être aidé à mieux comprendre ce qui se joue.",
  "Si vous souhaitez un échange direct, humain et approfondi.",
];

export default function ReservationPage() {
  return (
    <PageFrame
      title="Prendre un rendez-vous visio"
      intro="Un temps d’échange pour faire le point sur votre situation, mettre en lumière ce qui se joue et avancer avec plus de clarté."
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] border border-sage/25 bg-white/92 p-6 shadow-[0_16px_40px_rgba(69,89,72,0.08)] md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-sage/90">
              Cabinet Astraé
            </p>

            <h2 className="mt-4 text-[2rem] font-light tracking-[-0.03em] text-pine md:text-[2.6rem]">
              Premier temps d’échange en visio
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-umber/85 md:text-[1rem]">
              Ce rendez-vous permet de reprendre votre situation de manière plus
              approfondie, dans un cadre posé, humain et structuré. Il peut
              constituer une première étape claire avant d’envisager, si cela a
              du sens pour vous, une suite plus personnalisée.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Format", "Visio"],
              ["Durée", "Environ 1h à 1h30"],
              ["Tarif", "120€"],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-sage/18 bg-[#F8F6F1] px-5 py-5 text-center"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-sage/90">
                  {title}
                </p>
                <p className="mt-3 text-base font-medium text-pine">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={bookingUrl}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-pine px-7 py-3 text-sm font-medium text-ivory shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:opacity-95"
            >
              Réserver un rendez-vous
            </Link>

            <Link
              href="/analyse"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#5D815D]/22 bg-white/75 px-7 py-3 text-sm font-medium text-pine transition hover:border-[#5D815D]/36 hover:bg-white"
            >
              Faire un point gratuit d’abord
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.8rem] border border-sage/22 bg-white/90 p-6 shadow-[0_12px_32px_rgba(69,89,72,0.06)]">
            <h3 className="text-[1.3rem] font-light tracking-[-0.02em] text-pine">
              Ce que ce rendez-vous permet
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-umber/88">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.8rem] border border-sage/22 bg-white/90 p-6 shadow-[0_12px_32px_rgba(69,89,72,0.06)]">
            <h3 className="text-[1.3rem] font-light tracking-[-0.02em] text-pine">
              Ce rendez-vous peut vous convenir
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-umber/88">
              {forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-[1.8rem] border border-sage/18 bg-white/70 px-6 py-6 text-center backdrop-blur-[2px] md:px-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-umber/82">
            Ce temps d’échange n’engage à rien au-delà du rendez-vous lui-même.
            Il s’agit d’un premier cadre de compréhension, pour vous aider à y
            voir plus clair et à sentir si une suite mérite d’être envisagée.
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
