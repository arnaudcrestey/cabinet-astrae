import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function AccompagnementsPage() {
  return (
    <PageFrame
      title="Accompagnements proposés"
      intro="Chaque accompagnement vise à éclairer une situation précise, à en comprendre les dynamiques, et à vous permettre d’avancer avec plus de clarté et de justesse."
    >
      <div className="mx-auto max-w-5xl space-y-10">

        {/* CARDS */}
        <section className="grid gap-5 md:grid-cols-3 md:gap-6 text-center">

          {[
            {
              title: "Lecture de situation",
              text: "Pour faire le point sur une situation actuelle : tension, transition ou sentiment de flou, et identifier ce qui se joue réellement.",
              cta: "Commencer par faire un point"
            },
            {
              title: "Approfondissement thématique",
              text: "Pour explorer un enjeu précis : relation, décision, répétition de schéma ou repositionnement personnel.",
              cta: "Échanger autour de votre situation"
            },
            {
              title: "Lecture approfondie du thème astral",
              text: "Une analyse approfondie intégrant le thème astral, pour relier votre dynamique personnelle, votre histoire et vos axes d’évolution.",
              cta: "Prendre un temps d'échange"
            }
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-[15px] font-medium text-pine">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-umber/85">
                {item.text}
              </p>

              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-pine/60 group-hover:text-pine">
                {item.cta}
              </p>
            </article>
          ))}
          

        </section>
          
        <div className="text-center">
  <p className="mx-auto max-w-xl text-sm leading-relaxed text-umber/70 md:text-[15px]">
    Vous pouvez commencer simplement par faire un point, puis approfondir si nécessaire.
  </p>
</div>

        {/* CADRE */}
        <section className="mx-auto max-w-3xl rounded-2xl border border-white/40 bg-white/50 p-7 text-center backdrop-blur md:p-8">

          <h2 className="text-base font-medium text-pine">
            Cadre de travail
          </h2>

          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-umber/85">
            <li>• Une approche confidentielle, respectueuse de votre rythme.</li>
            <li>• Une lecture structurée, fondée et nuancée.</li>
            <li>• Des éclairages concrets pour avancer avec plus de discernement.</li>
          </ul>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory transition hover:bg-pine/90"
          >
            Prendre un temps d'échange
          </Link>

        </section>

      </div>
    </PageFrame>
  );
}
