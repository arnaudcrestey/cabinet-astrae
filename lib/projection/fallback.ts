import type { ProjectionAnswers, ProjectionResult } from "./types";

const pick = (answers: ProjectionAnswers, key: string, fallbackText: string) => {
  const value = answers[key]?.trim();
  return value ? value.slice(0, 220) : fallbackText;
};

export function buildFallbackResult(answers: ProjectionAnswers): ProjectionResult {
  return {
    summary:
      "Vous traversez une phase où plusieurs plans se superposent : compréhension de soi, décision à poser et besoin de stabilité. La priorité est de remettre de l'ordre dans ce qui demande une réponse immédiate et ce qui relève d'un processus plus profond.",
    dominantDynamic: `La dynamique dominante semble articulée autour de: ${pick(answers, "situation", "une recherche de cohérence entre vos besoins internes et vos engagements.")}`,
    keyTension: `La tension principale observée porte sur: ${pick(answers, "tension", "la difficulté à choisir une direction sans vous couper d'une part importante de vous-même.")}`,
    clarityPath: `Une première piste de clarification: ${pick(answers, "intention", "nommer ce qui est non négociable pour vous dans cette période, puis organiser vos décisions autour de ce socle.")}`,
    deeperWork:
      "Un approfondissement peut affiner cette lecture en reliant votre histoire, votre rythme actuel et la structure de votre thème astral pour mieux comprendre ce qui se rejoue et comment agir avec plus de justesse.",
    confidence: "medium",
    generatedAt: new Date().toISOString()
  };
}
