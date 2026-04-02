import type { ProjectionResult } from "./types";

const trimText = (value: string, max = 520) => value.replace(/\s+/g, " ").trim().slice(0, max);

export function refineResult(result: ProjectionResult): ProjectionResult {
  return {
    ...result,
    summary: trimText(result.summary),
    dominantDynamic: trimText(result.dominantDynamic),
    keyTension: trimText(result.keyTension),
    clarityPath: trimText(result.clarityPath),
    deeperWork: trimText(result.deeperWork),
    generatedAt: result.generatedAt || new Date().toISOString()
  };
}
