import { NextResponse } from "next/server";
import { z } from "zod";
import { generateProjectionWithAI } from "@/lib/projection/openai";
import { buildFallbackResult } from "@/lib/projection/fallback";
import { refineResult } from "@/lib/projection/refine";
import { enhanceResult } from "@/lib/projection/enhance";

const payloadSchema = z.object({
  answers: z.record(z.string().min(1).max(2000)).refine((value) => Object.keys(value).length >= 5)
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = payloadSchema.parse(json);

    const aiResult = await generateProjectionWithAI(payload.answers);
    const rawResult = aiResult ?? buildFallbackResult(payload.answers);
    const result = enhanceResult(refineResult(rawResult));

    return NextResponse.json({ result });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Les réponses envoyées sont incomplètes ou invalides.", details: error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Impossible de générer l'analyse pour le moment. Merci de réessayer." },
      { status: 500 }
    );
  }
}
