import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadNotification } from "@/lib/projection/mailer";

const contactSchema = z.object({
  firstName: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(4000),
  consent: z.literal(true)
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = contactSchema.parse(json);

    await sendLeadNotification({
      ...payload,
      result: {
        summary: payload.message,
        dominantDynamic: "Demande de contact direct",
        keyTension: "À clarifier lors du premier échange",
        clarityPath: "Cadrage initial proposé",
        deeperWork: "À déterminer selon la situation",
        confidence: "medium",
        generatedAt: new Date().toISOString()
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Informations invalides.", details: error.flatten() }, { status: 400 });
    }

    return NextResponse.json({ message: "Envoi momentanément indisponible." }, { status: 500 });
  }
}
