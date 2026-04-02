import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function HomePage() {
  return (
    <PageFrame
      title="Mettez de la clarté sur ce que vous vivez."
      intro="Cabinet Astraé accompagne les périodes de transition, de tension et de remise en question par une lecture structurée, humaine et approfondie."
    >
      <div className="space-y-8">
        <section className="grid gap-6 rounded-2xl border border-sage/30 bg-white p-8 shadow-soft md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Ce que fait Astraé</h2>
            <p className="mt-3 leading-relaxed text-umber/90">
              Nous clarifions les dynamiques qui se jouent dans votre situation pour transformer le flou en compréhension utile.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Pourquoi cette approche</h2>
            <p className="mt-3 leading-relaxed text-umber/90">
              L'écoute, la structure d'analyse et la lecture du thème astral permettent d'aller au-delà d'une impression et d'ouvrir une lecture plus juste.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-sage/30 bg-sand/60 p-8">
          <h2 className="text-xl font-semibold">Comment cela se passe</h2>
          <ol className="mt-4 space-y-3 text-umber/90">
            <li>1. Vous démarrez une analyse guidée en quelques minutes.</li>
            <li>2. Vous recevez une première lecture claire et contextualisée.</li>
            <li>3. Vous pouvez demander un approfondissement confidentiel avec le Cabinet.</li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/analyse" className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
              Commencer l'analyse
            </Link>
            <Link href="/questions" className="rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
              Entrer directement dans les questions
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-sage/20 bg-white p-8">
          <h2 className="text-xl font-semibold">Un point d'entrée, puis un approfondissement</h2>
          <p className="mt-3 leading-relaxed text-umber/90">
            Le résultat proposé en ligne constitue une première mise en lumière. Si vous souhaitez aller plus loin, une lecture approfondie intégrant le thème astral et le contexte de vie peut être engagée.
          </p>
          <Link href="/analyse" className="mt-6 inline-flex rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-umber hover:bg-terracotta/85">
            Aller plus loin dans la compréhension
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
