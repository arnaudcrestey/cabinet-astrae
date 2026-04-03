"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTION_SET } from "@/lib/projection/questions";
import type { ProjectionAnswers, ProjectionResult } from "@/lib/projection/types";

const STORAGE_KEY = "astrae:answers";
const RESULT_KEY = "astrae:result";

export function Questionnaire() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ProjectionAnswers>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as ProjectionAnswers;
    } catch {
      return {};
    }
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const currentQuestion = QUESTION_SET[step];
  const progress = useMemo(() => Math.round(((step + 1) / QUESTION_SET.length) * 100), [step]);

  const updateAnswer = (value: string) => {
    const next = { ...answers, [currentQuestion.id]: value };
    setAnswers(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setError(null);
  };

  const nextStep = () => {
    if (!(answers[currentQuestion.id] ?? "").trim()) {
      setError("Prenez un instant pour répondre avant de continuer.");
      return;
    }
    setError(null);
    setStep((prev) => Math.min(prev + 1, QUESTION_SET.length - 1));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const submit = async () => {
    if (QUESTION_SET.some((question) => !(answers[question.id] ?? "").trim())) {
      setError("Veuillez compléter chaque question pour obtenir une lecture fiable.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/projection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers })
      });

      if (!response.ok) {
        throw new Error("Une difficulté technique empêche la génération pour le moment.");
      }

      const data = (await response.json()) as { result: ProjectionResult };
sessionStorage.setItem(RESULT_KEY, JSON.stringify(data.result));
localStorage.removeItem(STORAGE_KEY);
router.push("/resultat");
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Une erreur inconnue est survenue.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-sage/30 bg-white p-6 shadow-soft md:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-pine/80">Progression {progress}%</p>
        <div className="mt-2 h-2 rounded-full bg-sand">
          <div className="h-2 rounded-full bg-pine transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <h2 className="text-xl font-semibold leading-tight">{currentQuestion.label}</h2>
      <textarea
        value={answers[currentQuestion.id] ?? ""}
        onChange={(event) => updateAnswer(event.target.value)}
        placeholder={currentQuestion.placeholder}
        rows={6}
        className="mt-4 w-full rounded-xl border border-sage/40 bg-ivory p-4 text-sm leading-relaxed outline-none ring-pine/40 transition focus:ring"
      />
      {error && <p className="mt-3 text-sm text-umber">{error}</p>}
      <div className="mt-6 flex flex-wrap justify-between gap-3">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 0 || loading}
          className="rounded-full border border-pine/40 px-4 py-2 text-sm text-pine disabled:cursor-not-allowed disabled:opacity-40"
        >
          Précédent
        </button>

        {step < QUESTION_SET.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={loading}
            className="rounded-full bg-pine px-5 py-2 text-sm font-medium text-ivory disabled:cursor-not-allowed disabled:opacity-70"
          >
            Continuer
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={loading}
            className="rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-umber disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Génération en cours..." : "Recevoir ma première lecture"}
          </button>
        )}
      </div>
    </div>
  );
}
