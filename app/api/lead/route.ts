import { NextResponse } from "next/server";
import { z } from "zod";
import {
  sendLeadConfirmation,
  sendLeadNotification,
} from "@/lib/projection/mailer";

const leadSchema = z.object({
  firstName: z.string().min(2).max(80),
  email: z.string().email(),
  birthDate: z.string().min(4).max(20),
  birthTime: z.string().min(3).max(10),
  birthPlace: z.string().min(2).max(160),
  message: z.string().min(0).max(4000),
  consent: z.literal(true),
  result: z.object({
    summary: z.string(),
    dominantDynamic: z.string(),
    keyTension: z.string(),
    clarityPath: z.string(),
    deeperWork: z.string(),
    confidence: z.enum(["high", "medium"]),
    generatedAt: z.string(),
  }),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Les informations envoyées sont incomplètes ou invalides.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    // 👉 UNIQUEMENT LES MAILS (plus de stockage)
    await Promise.all([
      sendLeadNotification(payload),
      sendLeadConfirmation(payload),
    ]);

    return NextResponse.json({
      ok: true,
      message: "Demande envoyée avec succès.",
    });
  } catch (error) {
    console.error("API /api/lead ERROR =", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Impossible d'envoyer votre demande pour le moment. Merci de réessayer.",
      },
      { status: 500 }
    );
  }
}
