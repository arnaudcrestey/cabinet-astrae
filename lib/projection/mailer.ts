import nodemailer from "nodemailer";
import type { LeadPayload } from "./types";

function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  return nodemailer.createTransport({ jsonTransport: true });
}

const from = process.env.MAIL_FROM ?? "Cabinet Astraé <contact@cabinet-astrae.fr>";
const admin = process.env.MAIL_ADMIN ?? "contact@cabinet-astrae.fr";

export async function sendLeadNotification(lead: LeadPayload) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to: admin,
    subject: `[Astraé] Nouvelle demande de ${lead.firstName}`,
    html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#4F6F52">
      <h2>Nouvelle demande Cabinet Astraé</h2>
      <p><strong>Prénom :</strong> ${lead.firstName}</p>
      <p><strong>Email :</strong> ${lead.email}</p>
      <p><strong>Message :</strong> ${lead.message || "(non renseigné)"}</p>
      <p><strong>Synthèse :</strong> ${lead.result.summary}</p>
    </div>`
  });
}

export async function sendLeadConfirmation(lead: LeadPayload) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to: lead.email,
    subject: "Votre demande a bien été reçue — Cabinet Astraé",
    html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#4F6F52;max-width:640px">
      <h2>Merci ${lead.firstName}, votre demande est bien reçue.</h2>
      <p>Nous vous remercions pour votre confiance. Votre message a bien été transmis.</p>
      <p>Nous revenons vers vous sous 48h ouvrées avec un retour attentif et structuré.</p>
      <p style="color:#7A5C4D">Cabinet Astraé — Clarifier, comprendre, avancer avec justesse.</p>
    </div>`
  });
}
