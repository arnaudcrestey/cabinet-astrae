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
      message: String(formData.get("message") ?? ""),
      consent: Boolean(formData.get("consent"))
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Impossible d'envoyer votre message pour le moment.");
      setState("success");
      event.currentTarget.reset();
    } catch (submitError) {
      setState("error");
      setError(submitError instanceof Error ? submitError.message : "Erreur inattendue.");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-sage/30 bg-white p-6 shadow-soft">
      <input
        name="firstName"
        required
        placeholder="Prénom"
        className="w-full rounded-xl border border-sage/40 bg-ivory px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Adresse e-mail"
        className="w-full rounded-xl border border-sage/40 bg-ivory px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Décrivez brièvement votre situation ou votre besoin de clarification."
        className="w-full rounded-xl border border-sage/40 bg-ivory px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <label className="flex items-start gap-2 text-sm text-umber/90">
        <input name="consent" type="checkbox" required className="mt-1" />
        J'accepte que mes informations soient utilisées pour être recontacté par Cabinet Astraé.
      </label>
      {state === "success" && <p className="text-sm text-pine">Merci, votre message a bien été envoyé.</p>}
      {state === "error" && <p className="text-sm text-umber">{error}</p>}
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory disabled:opacity-60"
      >
        {state === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
