import type { ProjectionAnswers, ProjectionResult } from "./types";
import { buildPrompt } from "./prompts";

const endpoint = process.env.OPENAI_RESPONSES_URL ?? "https://api.openai.com/v1/responses";

export async function generateProjectionWithAI(answers: ProjectionAnswers): Promise<ProjectionResult | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const prompt = buildPrompt(answers);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
      input: prompt,
      temperature: 0.25
    })
  });

  if (!response.ok) return null;

  const data = (await response.json()) as {
    output_text?: string;
  };

  if (!data.output_text) return null;

  try {
    const parsed = JSON.parse(data.output_text) as Omit<ProjectionResult, "confidence" | "generatedAt">;
    return {
      ...parsed,
      confidence: "high",
      generatedAt: new Date().toISOString()
    };
  } catch {
    return null;
  }
}
