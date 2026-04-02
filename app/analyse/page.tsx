import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function AnalysePage() {
  return (
    <PageFrame
      title="Diagnostic de clarification"
      intro="Ce diagnostic est un point d'entrée proposé par le Cabinet. Il vous aide à mettre de la clarté sur votre situation avant un éventuel accompagnement approfondi."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Durée", "Environ 6 à 8 minutes, à votre rythme."],
          ["Confidentialité", "Vos réponses sont traitées de façon professionnelle et sécurisée."],
          ["Finalité", "Obtenir une première lecture utile et poser les bases d'un échange humain."]
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
          <li>Répondez simplement, à partir de ce que vous vivez réellement.</li>
          <li>Le diagnostic n'est pas un verdict : c'est une première mise en lumière.</li>
          <li>Vous pourrez ensuite demander un échange de cadrage avec le Cabinet.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/questions" className="inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
            Démarrer le questionnaire
          </Link>
          <Link href="/contact" className="inline-flex rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
            Préférer un contact direct
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
