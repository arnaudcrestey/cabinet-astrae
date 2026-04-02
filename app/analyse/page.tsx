import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function AnalysePage() {
  return (
    <PageFrame
      title="Une première lecture pour clarifier votre situation"
      intro="Un parcours simple, confidentiel et structuré pour identifier la dynamique principale que vous traversez."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Durée", "Environ 6 à 8 minutes, à votre rythme."],
          ["Confidentialité", "Vos réponses sont traitées de façon professionnelle et sécurisée."],
          ["Utilité", "Vous recevez une synthèse claire, actionnable et nuancée."]
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-sage/25 bg-white p-6">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-umber/90">{text}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-2xl border border-sage/30 bg-sand/50 p-8">
        <h2 className="text-xl font-semibold">Avant de commencer</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-umber/90">
          <li>Répondez de manière simple, avec vos mots.</li>
          <li>Il n'y a pas de bonne réponse : l'enjeu est la justesse de votre vécu.</li>
          <li>Le résultat est une première lecture, pas un verdict.</li>
        </ul>
        <Link href="/questions" className="mt-6 inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
          Démarrer le questionnaire
        </Link>
      </section>
    </PageFrame>
  );
}
