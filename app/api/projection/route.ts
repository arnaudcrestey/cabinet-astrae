import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  answers: z
    .record(z.string().min(1).max(2000))
    .refine((value) => Object.keys(value).length >= 5),
});

export async function POST(request: Request) {
  try {
    await request.json();

    const result = {
      summary: "TEST VISIBLE ASTRAE 123",
      dominantDynamic: "TEST DYNAMIQUE 123",
      keyTension: "TEST TENSION 123",
      clarityPath: "TEST CLARIFICATION 123",
      deeperWork: "TEST APPROFONDISSEMENT 123",
      confidence: "high" as const,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ result });
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
