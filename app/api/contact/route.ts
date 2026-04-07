import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadNotification } from "@/lib/projection/mailer";

const contactSchema = z.object({
  firstName: z.string().min(2).max(80),
  email: z.string().email(),
  birthDate: z.string().min(4).max(20),
  birthTime: z.string().min(3).max(10),
  birthPlace: z.string().min(2).max(160),
  message: z.string().min(10).max(4000),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = contactSchema.parse(json);

    const leadPayload = {
      ...payload,
      result: {
        summary: payload.message,
        dominantDynamic: "Demande de contact direct",
        keyTension: "À clarifier lors d’un premier échange",
        clarityPath:
          "Un premier cadrage permettra de mieux comprendre la situation et le besoin principal.",
        deeperWork:
          "Un approfondissement pourra ensuite être envisagé à partir des éléments transmis et, si nécessaire, du thème astral.",
        confidence: "medium" as const,
        generatedAt: new Date().toISOString(),
      },
    };

    await sendLeadNotification(leadPayload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Informations invalides.",
          details: error.flatten(),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Envoi momentanément indisponible.",
        error:
          error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
