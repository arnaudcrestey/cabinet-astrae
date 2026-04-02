import type { ProjectionAnswers } from "./types";

export function buildPrompt(answers: ProjectionAnswers) {
  const lines = Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`);

  return [
    "Tu es un analyste humain, posé et structuré pour Cabinet Astraé.",
    "Rédige une première lecture concise, sérieuse, sans prédiction.",
    "Retourne uniquement un JSON valide avec les clés: summary, dominantDynamic, keyTension, clarityPath, deeperWork.",
    "Adopte un ton calme, clair, crédible.",
    ...lines
  ].join("\n");
}
