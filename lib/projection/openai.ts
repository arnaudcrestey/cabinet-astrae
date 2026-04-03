import type { ProjectionAnswers, ProjectionResult } from "./types";
import { buildPrompt } from "./prompts";

const endpoint =
  process.env.OPENAI_RESPONSES_URL ?? "https://api.openai.com/v1/responses";

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeProjectionResult(
  parsed: Partial<Omit<ProjectionResult, "confidence" | "generatedAt">>
): Omit<ProjectionResult, "confidence" | "generatedAt"> | null {
  const result = {
    summary: cleanText(parsed.summary),
    dominantDynamic: cleanText(parsed.dominantDynamic),
    keyTension: cleanText(parsed.keyTension),
    clarityPath: cleanText(parsed.clarityPath),
    deeperWork: cleanText(parsed.deeperWork),
  };

  const isValid = Object.values(result).every(
    (value) => typeof value === "string" && value.length > 0
  );

  return isValid ? result : null;
}

export async function generateProjectionWithAI(
  answers: ProjectionAnswers
): Promise<ProjectionResult | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const prompt = buildPrompt(answers);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      temperature: 0.25,
      input: [
        {
          role: "system",
          content: `
Tu es un professionnel de l’accompagnement humain écrivant pour Cabinet Astraé.

Tu rédiges des premières lectures de situation dans un style :
- humain
- nuancé
- sobre
- fluide
- crédible
- haut de gamme

Règles impératives :
- Ne jamais écrire comme un rapport.
- Ne jamais écrire comme un psychologue scolaire.
- Ne jamais employer un ton mécanique ou analytique.
- Ne jamais répéter mot pour mot les réponses de la personne, sauf nécessité exceptionnelle.
- Toujours reformuler avec finesse et intelligence.
- Toujours produire une écriture incarnée, naturelle et mesurée.
- Ne jamais utiliser de formulations génériques ou robotiques.
- Chaque bloc doit sembler écrit par un humain expérimenté, pas par une machine.

Tu retournes uniquement un JSON valide.
          `.trim(),
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    output_text?: string;
  };

  if (!data.output_text) {
    return null;
  }

  try {
    const parsed = JSON.parse(
      data.output_text
    ) as Partial<Omit<ProjectionResult, "confidence" | "generatedAt">>;

    const normalized = normalizeProjectionResult(parsed);
    if (!normalized) return null;

    return {
      ...normalized,
      confidence: "high",
      generatedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}
