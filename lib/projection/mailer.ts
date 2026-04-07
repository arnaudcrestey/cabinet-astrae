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
    secure: port === 465,
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
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#4F6F52;max-width:640px">
        <h2>Nouvelle demande Cabinet Astraé</h2>
        <p><strong>Prénom :</strong> ${lead.firstName}</p>
        <p><strong>Email :</strong> ${lead.email}</p>
        <p><strong>Date de naissance :</strong> ${lead.birthDate}</p>
        <p><strong>Heure de naissance :</strong> ${lead.birthTime}</p>
        <p><strong>Lieu de naissance :</strong> ${lead.birthPlace}</p>
        <p><strong>Message :</strong> ${lead.message || "(non renseigné)"}</p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #D9E2D6" />
        <p><strong>Synthèse :</strong> ${lead.result.summary}</p>
      </div>`,
    });

    console.log("EMAIL NOTIFICATION ENVOYÉ :", info);
  } catch (error) {
    console.error("ERREUR SMTP NOTIFICATION :", error);
    throw error;
  }
}

export async function sendLeadConfirmation(lead: LeadPayload) {
  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail({
      from,
      to: lead.email,
      subject: "Votre demande a bien été reçue — Cabinet Astraé",
      html: `<div style="font-family:Arial,sans-serif;line-height:1.7;color:#4F6F52;max-width:640px">
        <h2>Merci ${lead.firstName}, votre demande a bien été reçue.</h2>
        <p>Votre message nous a bien été transmis.</p>
        <p>Nous reviendrons vers vous sous 48h ouvrées avec un retour attentif, humain et structuré.</p>
        <p>Les éléments de naissance transmis permettront, si nécessaire, de préparer une première lecture en amont de l’échange.</p>
        <p style="margin-top:24px;color:#7A5C4D">
          Cabinet Astraé — Clarifier, comprendre, avancer avec justesse.
        </p>
      </div>`,
    });

    console.log("EMAIL CONFIRMATION ENVOYÉ :", info);
  } catch (error) {
    console.error("ERREUR SMTP CONFIRMATION :", error);
    throw error;
  }
}
