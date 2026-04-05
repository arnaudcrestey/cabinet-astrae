import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function AnalysePage() {
  return (
    <PageFrame
      title="Faire un point sur votre situation"
      intro="Ce premier échange vous aide à mieux comprendre ce que vous vivez, et à poser des repères clairs avant d’aller plus loin si nécessaire."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Durée", "Environ 5 à 8 minutes, à votre rythme."],
          ["Confidentialité", "Vos réponses sont traitées avec attention, dans un cadre confidentiel."],
          ["Finalité", "Apporter un premier éclairage sur votre situation, et ouvrir un échange si vous le souhaitez."]
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
          <li>Ce point n’est pas un verdict, mais une première mise en lumière.</li>
          <li>Vous pourrez, si vous le souhaitez, prolonger avec un échange avec le Cabinet.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/questions" className="inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
            Commencer le questionnaire
          </Link>
          <Link href="/reservation" className="inline-flex rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
            Je préfère échanger directement
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
