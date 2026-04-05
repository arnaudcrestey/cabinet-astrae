"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";
import { ResultCard } from "@/components/projection/ResultCard";
import { LeadForm } from "@/components/projection/LeadForm";
import type { ProjectionResult } from "@/lib/projection/types";

const RESULT_KEY = "astrae:result";

export default function ResultPage() {
  const [result, setResult] = useState<ProjectionResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(RESULT_KEY);
    if (raw) {
      setResult(JSON.parse(raw) as ProjectionResult);
    }
  }, []);

  if (!result) {
    return (
      <PageFrame
        title="Résultat indisponible"
        intro="Aucune analyse n'a été trouvée pour le moment. Vous pouvez reprendre le questionnaire pour générer une première lecture."
      >
        <Link href="/questions" className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory">
          Revenir au questionnaire
        </Link>
      </PageFrame>
    );
  }

 return (
  <PageFrame
    title="Votre première lecture Astraé"
    intro="Cette première lecture met en lumière les dynamiques qui traversent votre situation. Elle offre un premier éclairage, et peut ouvrir vers un accompagnement plus personnalisé."
  >
    <div className="mb-6 rounded-2xl border border-sage/20 bg-white/35 px-6 py-5 text-center text-sm leading-relaxed text-umber/85 backdrop-blur-[2px] md:px-8 md:py-6 md:text-[0.95rem]">
  <p className="mx-auto max-w-3xl">
    Si vous souhaitez aller plus loin, vous pouvez transmettre vos informations de naissance
    pour recevoir un premier éclairage complémentaire à partir de votre thème astral.
    <br className="hidden md:block" />
    Vous pouvez également, si vous le préférez, réserver directement un temps d’échange en visio.
  </p>
</div>

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <ResultCard result={result} />
      <LeadForm result={result} />
    </div>
  </PageFrame>
);
}
