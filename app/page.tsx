import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function HomePage() {
  return (
    <PageFrame
      title="Cabinet Astraé — Clarifier ce que vous vivez pour avancer avec plus de justesse"
      intro="Cabinet Astraé propose un accompagnement d'analyse pour les périodes de flou, de tension ou de transition. L'objectif est d'apporter une lecture claire, humaine et structurée de votre situation."
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-sage/30 bg-white p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-pine/80">Cabinet d'accompagnement</p>
          <h2 className="mt-3 text-2xl font-semibold">Un cadre sérieux, calme et confidentiel</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-umber/90">
            Ici, vous n'êtes pas face à un simple test en ligne. Vous entrez dans un espace de compréhension où l'écoute,
            l'analyse et la mise en perspective servent à éclairer les dynamiques qui influencent vos décisions, vos
            relations et votre équilibre.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
              Échanger avec le Cabinet
            </Link>
            <Link href="/analyse" className="rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
              Commencer un diagnostic
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["Ce que fait Astraé", "Mettre en lumière la dynamique profonde d'une situation pour sortir du flou et retrouver un axe clair."],
            ["Comment", "Un travail d'analyse structuré, appuyé si pertinent par la lecture du thème astral comme outil d'approfondissement."],
            ["Pour qui", "Adultes traversant une transition, un blocage, une tension relationnelle ou une hésitation importante."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-sage/25 bg-sand/40 p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-umber/90">{text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-2xl border border-sage/25 bg-white p-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Un premier diagnostic pour démarrer</h2>
            <p className="mt-3 leading-relaxed text-umber/90">
              Le diagnostic en ligne constitue un point d'entrée. Il vous apporte une première lecture utile, puis peut
              déboucher sur un accompagnement plus approfondi avec le Cabinet.
            </p>
            <Link href="/analyse" className="mt-5 inline-flex rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-umber hover:bg-terracotta/85">
              Démarrer le diagnostic
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Approfondir avec un accompagnement humain</h2>
            <p className="mt-3 leading-relaxed text-umber/90">
              Selon votre situation, un travail plus fin peut être proposé : clarification d'enjeux relationnels,
              compréhension des répétitions, appui à la décision et lecture approfondie du thème astral dans un cadre
              professionnel et nuancé.
            </p>
            <Link href="/accompagnements" className="mt-5 inline-flex rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
              Voir les accompagnements
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
