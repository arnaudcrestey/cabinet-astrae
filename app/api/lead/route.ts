import { NextResponse } from "next/server";
import { z } from "zod";
import { storeLead } from "@/lib/projection/storage";
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

    console.log("BODY /api/lead =", JSON.stringify(json, null, 2));

    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      console.error("ZOD ERROR /api/lead =", parsed.error.flatten());

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

    try {
      await storeLead(payload);
      console.log("storeLead OK");
    } catch (error) {
      console.error("storeLead ERROR =", error);

      return NextResponse.json(
        {
          ok: false,
          step: "storeLead",
          message: error instanceof Error ? error.message : "Erreur storeLead",
        },
        { status: 500 }
      );
    }

    try {
      await Promise.all([
        sendLeadNotification(payload),
        sendLeadConfirmation(payload),
      ]);
      console.log("MAILS OK");
    } catch (error) {
      console.error("MAILER ERROR =", error);

      return NextResponse.json(
        {
          ok: false,
          step: "mailer",
          message: error instanceof Error ? error.message : "Erreur mailer",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Demande envoyée avec succès.",
    });
  } catch (error) {
    console.error("API /api/lead GLOBAL ERROR =", error);

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
