import nodemailer from "nodemailer";
import type { LeadPayload } from "./types";

/**
 * TRANSPORTER SMTP
 */
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

/**
 * CONFIG
 */
const from =
  process.env.MAIL_FROM ||
  "Cabinet Astraé <contact@cabinet-astrae.fr>";

const admin =
  process.env.MAIL_TO ||
  process.env.MAIL_ADMIN ||
  "contact@cabinet-astrae.fr";

/**
 * EMAIL ADMIN (toi)
 */
export async function sendLeadNotification(lead: LeadPayload) {
  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail({
      from,
      to: admin,
      replyTo: lead.email,
      subject: `[Astraé] Nouvelle demande de ${lead.firstName}`,

      html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#2F3E2F; max-width:640px">

        <h2 style="margin-bottom:16px;">Nouveau lead Astraé</h2>

        <h3>👤 Informations</h3>
        <p><strong>Prénom :</strong> ${lead.firstName}</p>
        <p><strong>Email :</strong> ${lead.email}</p>

        <h3>🪐 Données de naissance</h3>
        <p><strong>Date :</strong> ${lead.birthDate}</p>
        <p><strong>Heure :</strong> ${lead.birthTime}</p>
        <p><strong>Lieu :</strong> ${lead.birthPlace}</p>

        <h3>📝 Message</h3>
        <p>${lead.message || "(non renseigné)"}</p>

        <hr style="margin:24px 0;border:none;border-top:1px solid #D9E2D6" />

        <h3>📊 Lecture générée</h3>

        <p><strong>Synthèse :</strong><br/>${lead.result.summary}</p>

        <p><strong>Dynamique :</strong><br/>${lead.result.dominantDynamic}</p>

        <p><strong>Tension :</strong><br/>${lead.result.keyTension}</p>

        <p><strong>Clarté :</strong><br/>${lead.result.clarityPath}</p>

        <p><strong>Approfondissement :</strong><br/>${lead.result.deeperWork}</p>

      </div>
      `,
    });

    console.log("EMAIL NOTIFICATION ENVOYÉ :", info);
  } catch (error) {
    console.error("ERREUR SMTP NOTIFICATION :", error);
    throw error;
  }
}

/**
 * EMAIL CLIENT
 */
export async function sendLeadConfirmation(lead: LeadPayload) {
  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail({
      from,
      to: lead.email,
      subject: "Votre demande a bien été reçue — Cabinet Astraé",

      html: `
      <div style="font-family: Georgia, serif; line-height:1.7; color:#2F3E2F; max-width:640px">

        <p>Merci ${lead.firstName},</p>

        <p>
          Votre demande a bien été reçue.
        </p>

        <p>
          Les éléments que vous avez partagés ont été transmis avec attention.<br/>
          Ils vont nous permettre de poser un premier regard sur votre situation.
        </p>

        <p>
          Nous revenons vers vous sous 48h ouvrées avec un premier retour.
        </p>

        <p>
          À très bientôt.
        </p>

        <br/>

        <p style="font-size:14px; color:#7A5C4D;">
  Virginie Legastelois<br/>
  Cabinet Astraé<br/>
  Clarifier, comprendre, avancer avec justesse.
</p>

      </div>
      `,
    });

    console.log("EMAIL CONFIRMATION ENVOYÉ :", info);
  } catch (error) {
    console.error("ERREUR SMTP CONFIRMATION :", error);
    throw error;
  }
}
