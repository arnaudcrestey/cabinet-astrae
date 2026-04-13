import LegalPage from "@/components/legal/LegalPage";

export default function CookiesPage() {
  return (
    <LegalPage title="Politique de cookies">
      <h2 className="text-xl font-medium text-[#4F6F52]">1. Utilisation des cookies</h2>
      <p>
        Le site Cabinet Astraé peut utiliser des cookies afin d’assurer son bon
        fonctionnement, d’améliorer l’expérience utilisateur et, le cas échéant,
        de mesurer l’audience.
      </p>

      <h2 className="text-xl font-medium text-[#4F6F52]">2. Cookies nécessaires</h2>
      <p>
        Certains cookies sont strictement nécessaires au fonctionnement du site et
        ne peuvent pas être désactivés.
      </p>

      <h2 className="text-xl font-medium text-[#4F6F52]">3. Cookies optionnels</h2>
      <p>
        Lorsque des cookies de mesure d’audience ou autres cookies non essentiels
        sont utilisés, leur dépôt est soumis au consentement préalable de
        l’utilisateur.
      </p>

      <h2 className="text-xl font-medium text-[#4F6F52]">4. Gestion du consentement</h2>
      <p>
        L’utilisateur peut accepter, refuser ou modifier ses préférences via le
        bandeau de gestion des cookies affiché sur le site.
      </p>

      <h2 className="text-xl font-medium text-[#4F6F52]">5. Contact</h2>
      <p>
        Pour toute question relative à l’utilisation des cookies, vous pouvez
        écrire à : demande@arnaudcrestey.com
      </p>
    </LegalPage>
  );
}
