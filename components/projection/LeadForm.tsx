"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProjectionResult } from "@/lib/projection/types";

export function LeadForm({ result }: { result: ProjectionResult }) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!consent) {
      setError("Votre consentement est nécessaire pour traiter votre demande.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, message, consent, result })
      });

      if (!response.ok) {
        throw new Error("Impossible d'envoyer votre demande pour le moment.");
      }

      router.push("/demande-envoyee");
    } catch (submitError) {
      const messageText = submitError instanceof Error ? submitError.message : "Erreur inconnue.";
      setError(messageText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-sage/30 bg-sand/40 p-6">
      <h2 className="text-lg font-semibold">Aller plus loin avec Cabinet Astraé</h2>
      <p className="text-sm text-umber/90">
        Recevez une réponse personnalisée pour engager un approfondissement de votre situation.
      </p>
      <input
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="Prénom"
        className="w-full rounded-xl border border-sage/40 bg-white px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Adresse e-mail"
        className="w-full rounded-xl border border-sage/40 bg-white px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <textarea
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Si vous le souhaitez, précisez ce que vous souhaitez approfondir."
        className="w-full rounded-xl border border-sage/40 bg-white px-4 py-3 text-sm outline-none ring-pine/40 focus:ring"
      />
      <label className="flex items-start gap-2 text-sm text-umber/90">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1" />
        J'accepte que mes informations soient utilisées pour être recontacté par Cabinet Astraé.
      </label>
      {error && <p className="text-sm text-umber">{error}</p>}
      <button
        disabled={loading}
        className="rounded-full bg-pine px-5 py-3 text-sm font-medium text-ivory disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Envoi en cours..." : "Prendre contact avec Cabinet Astraé"}
      </button>
    </form>
  );
}
