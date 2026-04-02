import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function ApprochePage() {
  return (
    <PageFrame
      title="L'approche du Cabinet Astraé"
      intro="Une démarche d'écoute et de clarification qui articule analyse humaine, mise en structure et, lorsque pertinent, lecture du thème astral comme outil d'approfondissement."
    >
      <div className="space-y-6">
        <section className="rounded-2xl border border-sage/25 bg-white p-8">
          <h2 className="text-xl font-semibold">Notre position</h2>
          <p className="mt-3 leading-relaxed text-umber/90">
            Nous n'apportons ni recettes rapides ni promesses de prédiction. Le travail consiste à rendre lisible ce qui
            est confus, à nommer les tensions actives, et à construire une compréhension qui puisse guider des décisions
            plus ajustées.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["Écoute", "Votre vécu est accueilli sans simplification ni jugement."],
            ["Structure", "Les éléments clés sont organisés pour dégager un axe de lecture."],
            ["Approfondissement", "La lecture du thème astral intervient comme support de compréhension, jamais comme décor."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-sage/20 bg-sand/50 p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-umber/90">{text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-sage/30 bg-white p-8">
          <h2 className="text-xl font-semibold">Commencer simplement</h2>
          <p className="mt-3 leading-relaxed text-umber/90">
            Vous pouvez démarrer par un diagnostic de clarification en ligne. Cette première lecture vous aide à poser des
            mots sur votre situation avant d'envisager une suite plus approfondie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/analyse" className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
              Commencer un diagnostic
            </Link>
            <Link href="/contact" className="rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
              Prendre contact
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
