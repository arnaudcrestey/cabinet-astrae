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
   

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <ResultCard result={result} />
      <LeadForm result={result} />
    </div>
  </PageFrame>
);
}
