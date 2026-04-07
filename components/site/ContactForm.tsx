"use client";

import { useState } from "react";

type ContactState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<ContactState>("idle");
  const [error, setError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setState("loading");
    setError("");

    const formData = new FormData(form);

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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || "Impossible d'envoyer votre message pour le moment."
        );
      }

      setState("success");
      form.reset();
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
      className="space-y-4 rounded-[1.9rem] border border-sage/30 bg-white/92 p-5 shadow-[0_14px_40px_rgba(69,89,72,0.08)] backdrop-blur-sm sm:p-7"
    >
      <input
        name="firstName"
        type="text"
        required
        placeholder="Prénom"
        className="w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Adresse e-mail"
        className="w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block pl-1 text-[13px] font-medium text-forest/80">
            Date de naissance
          </span>
          <input
            type="text"
            name="birthDate"
            required
            inputMode="numeric"
            placeholder="JJ / MM / AAAA"
            className="w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block pl-1 text-[13px] font-medium text-forest/80">
            Heure de naissance
          </span>
          <input
            type="text"
            name="birthTime"
            required
            inputMode="numeric"
            placeholder="HH:MM"
            className="w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
          />
        </label>
      </div>

      <input
        type="text"
        name="birthPlace"
        required
        placeholder="Lieu de naissance (avec code postal)"
        className="w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
      />

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Décrivez simplement votre situation ou votre besoin de clarification."
        className="min-h-[140px] w-full rounded-2xl border border-sage/38 bg-[#F8F6F1] px-4 py-3.5 text-sm text-forest outline-none placeholder:text-sage/78 transition focus:border-[#5D815D]/70 focus:bg-white focus:ring-2 focus:ring-[#5D815D]/10"
      />

      <label className="flex items-start gap-3 text-sm leading-7 text-umber/92">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border border-sage/40 accent-[#5D815D]"
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

      <div className="flex justify-center sm:justify-start">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:opacity-95 disabled:opacity-60"
        >
          {state === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
