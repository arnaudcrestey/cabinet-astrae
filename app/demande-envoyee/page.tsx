import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function SentPage() {
  return (
    <PageFrame
      title="Votre demande a bien été envoyée"
      intro="Merci pour votre confiance. Nous revenons vers vous rapidement avec une réponse attentive et structurée."
    >
      <section className="max-w-2xl rounded-2xl border border-sage/30 bg-white p-8">
        <h2 className="text-xl font-semibold">Ce qui va se passer maintenant</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-umber/90">
          <li>Votre message est bien transmis à l'équipe du Cabinet.</li>
          <li>Un e-mail de confirmation vous a été envoyé.</li>
          <li>Vous recevrez un retour humain et contextualisé sous 48h ouvrées.</li>
        </ul>
        <Link href="/" className="mt-6 inline-flex rounded-full border border-pine/40 px-5 py-3 text-sm font-medium text-pine hover:bg-pine/5">
          Retour à l'accueil
        </Link>
      </section>
    </PageFrame>
  );
}
