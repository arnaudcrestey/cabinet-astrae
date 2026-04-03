"use client";

import { useState } from "react";

type ContactState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<ContactState>("idle");
  const [error, setError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      email: String(formData.get("email") ?? ""),
      birthDate: String(formData.get("birthDate") ?? ""),
      birthTime: String(formData.get("birthTime") ?? ""),
      birthPlace: String(formData.get("birthPlace") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: Boolean(formData.get("consent")),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Impossible d'envoyer votre message pour le moment.");
      }

      setState("success");
      event.currentTarget.reset();
    } catch (submitError) {
      setState("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Erreur inattendue."
      );
    }
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-[1.75rem] border border-sage/25 bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-7"
    >
      <input
        name="firstName"
        type="text"
        required
        placeholder="Prénom"
        className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none placeholder:text-sage/65 ring-pine/30 transition focus:ring"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Adresse e-mail"
        className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none placeholder:text-sage/65 ring-pine/30 transition focus:ring"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="date"
          name="birthDate"
          required
          className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none ring-pine/30 transition focus:ring"
        />

        <input
          type="time"
          name="birthTime"
          required
          className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none ring-pine/30 transition focus:ring"
        />
      </div>

      <input
        type="text"
        name="birthPlace"
        required
        placeholder="Lieu de naissance (avec code postal)"
        className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none placeholder:text-sage/65 ring-pine/30 transition focus:ring"
      />

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Décrivez simplement votre situation ou votre besoin de clarification."
        className="w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-forest outline-none placeholder:text-sage/65 ring-pine/30 transition focus:ring"
      />

      <label className="flex items-start gap-2 text-sm leading-6 text-umber/90">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1"
        />
        <span>
          J'accepte que mes informations soient utilisées uniquement dans le
          cadre de ma demande auprès de Cabinet Astraé.
        </span>
      </label>

      {state === "success" && (
        <p className="text-sm text-pine">
          Merci, votre message a bien été envoyé.
        </p>
      )}

      {state === "error" && (
        <p className="text-sm text-umber">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory transition disabled:opacity-60"
      >
        {state === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
