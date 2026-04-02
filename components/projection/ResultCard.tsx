import type { ProjectionResult } from "@/lib/projection/types";

export function ResultCard({ result }: { result: ProjectionResult }) {
  const blocks = [
    ["Synthèse", result.summary],
    ["Dynamique dominante", result.dominantDynamic],
    ["Tension principale", result.keyTension],
    ["Piste de clarification", result.clarityPath],
    ["Ouverture d'approfondissement", result.deeperWork]
  ];

  return (
    <section className="space-y-4 rounded-2xl border border-sage/30 bg-white p-6 shadow-soft md:p-8">
      {blocks.map(([title, content]) => (
        <article key={title} className="rounded-xl border border-sage/20 bg-ivory p-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pine/80">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-umber/90 md:text-base">{content}</p>
        </article>
      ))}
    </section>
  );
}
