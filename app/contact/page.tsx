import { ContactForm } from "@/components/site/ContactForm";
import { PageFrame } from "@/components/projection/PageFrame";

export default function ContactPage() {
  return (
    <PageFrame
      title="Prendre contact avec Cabinet Astraé"
      intro="Décrivez votre situation en quelques lignes. Nous revenons vers vous avec un premier retour de cadrage, dans un délai de 48h ouvrées."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <section className="rounded-2xl border border-sage/25 bg-sand/50 p-6">
          <h2 className="text-xl font-semibold">Pourquoi nous écrire</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-umber/90">
            <li>Vous traversez une période de flou ou de tension.</li>
            <li>Vous souhaitez clarifier une décision ou une dynamique relationnelle.</li>
            <li>Vous envisagez un accompagnement plus approfondi.</li>
          </ul>
          <p className="mt-4 text-sm text-umber/85">
            Votre demande reste confidentielle. Notre réponse est humaine, structurée et adaptée à votre contexte.
          </p>
        </section>
        <ContactForm />
      </div>
    </PageFrame>
  );
}
