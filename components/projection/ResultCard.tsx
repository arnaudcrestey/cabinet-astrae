import type { ProjectionResult } from "@/lib/projection/types";

function formatText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s([:;!?])/g, "\$1")
    .trim();
}

export function ResultCard({ result }: { result: ProjectionResult }) {
  const summary = formatText(result.summary);
  const dominantDynamic = formatText(result.dominantDynamic);
  const keyTension = formatText(result.keyTension);
  const clarityPath = formatText(result.clarityPath);
  const deeperWork = formatText(result.deeperWork);

  const secondaryBlocks = [
    {
      title: "Ce qui se dégage",
      content: dominantDynamic,
    },
    {
      title: "Ce qui demande votre attention",
      content: keyTension,
    },
    {
      title: "Ce qui peut être clarifié",
      content: clarityPath,
    },
  ];

  return (
    <section className="rounded-[2rem] border border-sage/28 bg-white/96 p-5 shadow-[0_16px_40px_rgba(69,89,72,0.07)] md:p-8">
      <div className="space-y-5">
        <article className="rounded-[1.5rem] border border-sage/20 bg-[#FCFBF8] px-5 py-5 md:px-6 md:py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-pine/78">
            Synthèse
          </p>

          <p className="mt-3 text-[15px] leading-8 text-umber/92 md:text-[1.02rem]">
            {summary}
          </p>
        </article>

        <div className="grid gap-4">
          {secondaryBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[1.35rem] border border-sage/18 bg-[#FCFBF8] px-5 py-4 md:px-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/76">
                {block.title}
              </p>

              <p className="mt-2 text-sm leading-7 text-umber/90 md:text-[0.98rem]">
                {block.content}
              </p>
            </article>
          ))}
        </div>

        <article className="rounded-[1.5rem] border border-sage/20 bg-[#F8F5EF] px-5 py-5 md:px-6 md:py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pine/78">
            Pour aller plus loin
          </p>

          <p className="mt-3 text-sm leading-7 text-umber/90 md:text-[0.98rem]">
            {deeperWork}
          </p>
        </article>
      </div>
    </section>
  );
}
