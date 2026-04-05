"use client";

import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

const calendlyUrl =
  "https://calendly.com/arnaud-crestey14/30min"; // à remplacer par le bon lien si l’événement réel dure 1h

const included = [
  "Un échange en visio d’environ 1 heure.",
  "Un temps pour reprendre votre situation avec plus de profondeur, de recul et de clarté.",
  "Un éclairage plus personnel sur les dynamiques qui traversent actuellement votre situation.",
  "Des repères concrets pour discerner la suite la plus juste pour vous.",
];

const forWho = [
  "Si vous sentez qu’une première lecture ne suffit pas à éclairer pleinement ce que vous vivez.",
  "Si vous traversez une période de flou, de transition, de tension ou de blocage.",
  "Si vous ressentez le besoin d’un échange direct, humain et structuré pour aller plus loin.",
];

const markers = [
  ["Format", "Visio"],
  ["Durée", "Environ 1 heure"],
  ["Participation", "120€"],
] as const;

export default function ReservationPage() {
  return (
    <PageFrame
      title="Prendre un temps d’échange en visio"
      intro="Un temps d’échange pour aller plus loin dans la compréhension de votre situation, mettre en lumière ce qui se joue et avancer avec davantage de clarté."
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] border border-sage/25 bg-white/92 p-6 shadow-[0_16px_40px_rgba(69,89,72,0.08)] md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[#4F6F5D]">
              Cabinet Astraé
            </p>

            <h2 className="mt-4 text-[2rem] font-light tracking-[-0.03em] text-pine md:text-[2.6rem]">
              Échange d’approfondissement en visio
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-umber/85 md:text-[1rem]">
              Ce temps d’échange permet d’aller plus loin que la première lecture,
              en reprenant votre situation de manière plus fine, plus personnelle
              et plus approfondie. Il aide à mieux comprendre ce qui se joue,
              à mettre en ordre ce qui restait diffus, et à poser des repères
              plus clairs pour la suite.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {markers.map(([title, text]) => (
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
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-pine px-8 py-3 text-sm font-medium text-ivory shadow-[0_12px_28px_rgba(46,62,53,0.18)] transition duration-200 hover:scale-[1.02] hover:opacity-95"
            >
              Choisir mon créneau
            </a>

            <Link
              href="/analyse"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-sage/20 bg-white/60 px-6 py-3 text-sm font-medium text-pine transition duration-200 hover:bg-white"
            >
              Faire un point gratuit
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-umber/75">
            Réservation sur une page dédiée • Ouverture dans un nouvel onglet
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.8rem] border border-sage/22 bg-white/90 p-6 shadow-[0_12px_32px_rgba(69,89,72,0.06)]">
            <h3 className="text-[1.3rem] font-light tracking-[-0.02em] text-pine">
              Ce que cet échange permet
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-umber/88">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.8rem] border border-sage/22 bg-white/90 p-6 shadow-[0_12px_32px_rgba(69,89,72,0.06)]">
            <h3 className="text-[1.3rem] font-light tracking-[-0.02em] text-pine">
              Cet échange peut vous convenir
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-umber/88">
              {forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-[1.8rem] border border-sage/18 bg-white/70 px-6 py-6 text-center backdrop-blur-[2px] md:px-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-umber/82">
            Vous serez redirigé vers la page de réservation pour choisir votre
            créneau. Le lien de visio vous sera ensuite transmis avec la
            confirmation de rendez-vous.
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
