import { NextResponse } from "next/server";
import { z } from "zod";
import { generateProjectionWithAI } from "@/lib/projection/openai";
import { buildFallbackResult } from "@/lib/projection/fallback";

const payloadSchema = z.object({
  answers: z
    .record(z.string().min(1).max(2000))
    .refine((value) => Object.keys(value).length >= 5),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = payloadSchema.parse(json);

    const aiResult = await generateProjectionWithAI(payload.answers);
    const fallbackResult = buildFallbackResult(payload.answers);
    const result = aiResult ?? fallbackResult;

    return NextResponse.json({
      debug: {
        usedAI: Boolean(aiResult),
        aiResult,
        fallbackResult,
      },
      result,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Les réponses envoyées sont incomplètes ou invalides.",
          details: error.flatten(),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Impossible de générer l'analyse pour le moment. Merci de réessayer." },
      { status: 500 }
    );
  }
}
