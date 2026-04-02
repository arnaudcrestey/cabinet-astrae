import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function AccompagnementsPage() {
  return (
    <PageFrame
      title="Accompagnements proposés"
      intro="Chaque accompagnement vise à clarifier une situation concrète et à soutenir une progression réaliste, à votre rythme."
    >
      <div className="space-y-6">
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Lecture de situation",
              text: "Pour comprendre une phase de tension, de transition ou de confusion, et identifier la dynamique dominante.",
              cta: "Commencer par un diagnostic"
            },
            {
              title: "Approfondissement thématique",
              text: "Pour travailler un enjeu précis : relation, décision importante, répétition de schéma ou repositionnement personnel.",
              cta: "Prendre rendez-vous de cadrage"
            },
            {
              title: "Lecture approfondie intégrant le thème astral",
              text: "Une analyse plus fine pour relier rythme personnel, histoire vécue et dynamiques de fond dans un cadre sérieux et nuancé.",
              cta: "Demander un échange"
            }
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-sage/30 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-umber/90">{item.text}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-pine/80">{item.cta}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-sage/25 bg-sand/50 p-8">
          <h2 className="text-xl font-semibold">Cadre de travail</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-umber/90">
            <li>Approche confidentielle et respectueuse de votre rythme.</li>
            <li>Analyse argumentée, jamais sensationnaliste.</li>
            <li>Recommandations de clarification concrètes et réalistes.</li>
          </ul>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory hover:bg-pine/90">
            Prendre contact avec le Cabinet
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
