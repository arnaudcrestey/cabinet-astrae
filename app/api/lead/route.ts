import { NextResponse } from "next/server";
import { z } from "zod";
import { storeLead } from "@/lib/projection/storage";
import { sendLeadConfirmation, sendLeadNotification } from "@/lib/projection/mailer";

const leadSchema = z.object({
  firstName: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().max(4000).optional().default(""),
  consent: z.literal(true),
  result: z.object({
    summary: z.string(),
    dominantDynamic: z.string(),
    keyTension: z.string(),
    clarityPath: z.string(),
    deeperWork: z.string(),
    confidence: z.enum(["high", "medium"]),
    generatedAt: z.string()
  })
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = leadSchema.parse(json);

    await storeLead(payload);
    await Promise.all([sendLeadNotification(payload), sendLeadConfirmation(payload)]);

    return NextResponse.json({ ok: true, message: "Demande envoyée avec succès." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Les informations envoyées sont invalides.", details: error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Envoi indisponible temporairement. Merci de réessayer." },
      { status: 500 }
    );
  }
}
