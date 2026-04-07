import nodemailer from "nodemailer";
import type { LeadPayload } from "./types";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error("SMTP CONFIG MANQUANTE");
    return nodemailer.createTransport({ jsonTransport: true });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // IMPORTANT
    auth: {
      user,
      pass,
    },
  });
}

const from =
  process.env.MAIL_FROM ||
  "Cabinet Astraé <contact@cabinet-astrae.fr>";

const admin =
  process.env.MAIL_TO ||
  process.env.MAIL_ADMIN ||
  "contact@cabinet-astrae.fr";

export async function sendLeadNotification(lead: LeadPayload) {
  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail({
      from,
      to: admin,
      replyTo: lead.email,
      subject: `[Astraé] Nouvelle demande de ${lead.firstName}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#4F6F52">
        <h2>Nouvelle demande Cabinet Astraé</h2>
        <p><strong>Prénom :</strong> ${lead.firstName}</p>
        <p><strong>Email :</strong> ${lead.email}</p>
        <p><strong>Message :</strong> ${lead.message}</p>
      </div>`,
    });

    console.log("EMAIL ENVOYÉ :", info);
  } catch (error) {
    console.error("ERREUR SMTP :", error);
    throw error;
  }
}
