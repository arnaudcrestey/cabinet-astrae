import { ContactForm } from "@/components/site/ContactForm";
import { PageFrame } from "@/components/projection/PageFrame";

export default function ContactPage() {
  return (
    <PageFrame
      title="Prendre contact avec Cabinet Astraé"
      intro="Décrivez simplement votre situation en quelques lignes. Pour permettre une première lecture de votre thème astral, merci d’indiquer votre date, votre heure et votre lieu de naissance."
    >
      <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
        <section className="rounded-[1.9rem] border border-sage/22 bg-sand/60 p-6 shadow-[0_14px_40px_rgba(91,115,91,0.06)] backdrop-blur-sm sm:p-7 lg:p-8">
          <div className="mx-auto max-w-md lg:max-w-none">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-sage/85">
              Premier échange
            </p>

            <h2 className="mt-3 text-[1.7rem] font-medium leading-[1.15] text-forest sm:text-[1.9rem]">
              Pourquoi nous écrire
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-umber/92">
              Vous pouvez nous contacter si vous ressentez le besoin de faire
              un point sur une situation que vous traversez actuellement.
            </p>

            <ul className="mt-6 space-y-3.5 text-[15px] leading-8 text-umber/90">
              <li className="flex gap-3">
                <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/75" />
                <span>
                  Période de transition, de tension ou de questionnement.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/75" />
                <span>
                  Besoin de recul pour mieux comprendre ce que vous vivez.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage/75" />
                <span>
                  Envie d’un premier repère avant d’aller plus loin dans une
                  démarche d’accompagnement.
                </span>
              </li>
            </ul>

            <div className="mt-7 h-px w-full bg-sage/14" />

            <p className="mt-7 text-[15px] leading-8 text-umber/88">
              Votre demande reste confidentielle. Chaque message est lu avec
              attention et reçoit un retour humain, structuré et adapté à votre
              situation.
            </p>
          </div>
        </section>

        <div className="lg:h-full">
          <ContactForm />
        </div>
      </div>
    </PageFrame>
  );
}
