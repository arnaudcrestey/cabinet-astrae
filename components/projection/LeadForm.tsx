"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ProjectionResult } from "@/lib/projection/types";

export function LeadForm({ result }: { result: ProjectionResult }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
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
      result,
    };

    if (!payload.consent) {
      setLoading(false);
      setError("Votre consentement est nécessaire pour traiter votre demande.");
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Impossible d'envoyer votre demande pour le moment.");
      }

      event.currentTarget.reset();
      router.push("/demande-envoyee");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Erreur inattendue."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[1.9rem] border border-sage/30 bg-white/92 p-5 shadow-[0_14px_40px_rgba(69,89,72,0.08)] backdrop-blur-sm sm:p-7">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-3">
          <h2 className="text-[1.45rem] font-light tracking-[-0.02em] text-pine sm:text-[1.62rem]">
            Recevoir un premier approfondissement
          </h2>

          <p className="text-sm leading-7 text-umber/88">
            Si vous souhaitez aller plus loin, vous pouvez transmettre vos
            informations de naissance pour recevoir un premier éclairage
            complémentaire à partir de votre thème astral.
            <br className="hidden md:block" />
            Cette étape peut permettre de préciser certains éléments avant, si
            vous le souhaitez, un échange avec le Cabinet.
          </p>
        </div>

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
          placeholder="Si vous le souhaitez, précisez ce que vous souhaitez approfondir."
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
            J&apos;accepte que mes informations soient utilisées uniquement dans
            le cadre de ma demande auprès de Cabinet Astraé.
          </span>
        </label>

        {error && <p className="text-sm text-umber">{error}</p>}

        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </div>
      </form>

      <div className="mt-6 space-y-3 border-t border-sage/18 pt-6">
        <p className="text-sm font-medium leading-6 text-pine">
          Vous préférez un échange direct ?
        </p>

        <div className="flex justify-center sm:justify-start">
          <Link
            href="/reservation"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-ivory shadow-[0_10px_24px_rgba(46,62,53,0.14)] transition hover:opacity-95"
          >
            Prendre un rendez-vous visio
          </Link>
        </div>
      </div>
    </div>
  );
}
