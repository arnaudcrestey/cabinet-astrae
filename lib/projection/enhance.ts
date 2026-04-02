import type { ProjectionResult } from "./types";

export function enhanceResult(result: ProjectionResult): ProjectionResult {
  return {
    ...result,
    confidence: result.confidence ?? "medium",
    deeperWork: `${result.deeperWork} Cette étape reste centrée sur l'écoute, la compréhension et une mise en mouvement progressive.`
  };
}
