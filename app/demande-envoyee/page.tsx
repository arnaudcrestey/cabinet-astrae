import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function DemandeEnvoyeePage() {
  return (
    <PageFrame
      title="Votre demande a bien été envoyée"
      intro="Votre message a bien été transmis à Cabinet Astraé. Nous reviendrons vers vous sous 48h ouvrées avec un retour attentif, humain et structuré."
    >
      <div className="mx-auto max-w-3xl">
        <section className="rounded-[2rem] border border-sage/22 bg-white/88 p-6 text-center shadow-[0_18px_45px_rgba(69,89,72,0.08)] backdrop-blur-sm sm:p-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pine/10 text-pine">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h2 className="mt-5 text-[1.7rem] font-medium leading-tight text-forest sm:text-[1.95rem]">
            Merci, votre demande a bien été reçue.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-umber/90">
            Les éléments transmis nous permettront de prendre connaissance de
            votre situation dans de bonnes conditions et, si nécessaire, de
            préparer une première lecture en amont de l’échange.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-sage/16 bg-sand/55 p-5 text-left">
            <p className="text-sm font-medium text-pine">Suite du processus</p>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-umber/88">
              <li>Votre message est bien enregistré.</li>
              <li>Un retour vous sera adressé sous 48h ouvrées.</li>
              <li>
                Si vous souhaitez avancer plus directement, vous pouvez aussi
                réserver un temps d’échange.
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/reservation"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:opacity-95"
            >
              Réserver un échange
            </Link>

            <Link
              href="/cabinet"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-sage/25 bg-white px-6 py-3 text-sm font-medium text-forest transition hover:bg-sand/45"
            >
              Retour au cabinet
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
