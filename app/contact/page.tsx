import { ContactForm } from "@/components/site/ContactForm";
import { PageFrame } from "@/components/projection/PageFrame";

export default function ContactPage() {
  return (
    <PageFrame
      title="Prendre contact avec Cabinet Astraé"
      intro="Décrivez simplement votre situation en quelques lignes. Pour permettre une première lecture de votre thème astral, merci d’indiquer votre date, heure et lieu de naissance."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <section className="rounded-[1.75rem] border border-sage/18 bg-sand/55 p-6 shadow-[0_12px_36px_rgba(91,115,91,0.06)] backdrop-blur-sm sm:p-7">
          <div className="max-w-md">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-sage/85">
  Premier échange
</p>

            <h2 className="mt-3 text-xl font-medium leading-tight text-forest sm:text-2xl">
              Pourquoi nous écrire
            </h2>

            <p className="mt-4 text-sm leading-7 text-umber/88 sm:text-[15px]">
              Vous pouvez nous contacter si vous ressentez le besoin de faire
              un point sur une situation que vous traversez actuellement.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-umber/88 sm:text-[15px]">
              <li className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/70" />
                <span>Période de transition, de tension ou de questionnement.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/70" />
                <span>
                  Besoin de recul pour mieux comprendre ce que vous vivez.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/70" />
                <span>
                  Envie d’un premier repère avant d’aller plus loin dans une
                  démarche d’accompagnement.
                </span>
              </li>
            </ul>

            <div className="mt-6 h-px w-full bg-sage/12" />

            <p className="mt-6 text-sm leading-7 text-umber/82 sm:text-[15px]">
              Votre demande reste confidentielle. Chaque message est lu avec
              attention et reçoit un retour humain, structuré et adapté à votre
              situation.
            </p>
          </div>
        </section>

        <ContactForm />
      </div>
    </PageFrame>
  );
}
