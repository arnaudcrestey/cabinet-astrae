import LegalPage from "@/components/legal/LegalPage";

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Données collectées</h2>
      <p>
        Cabinet Astraé peut collecter des informations telles que le prénom,
        l’email, ainsi que des données liées à la naissance (date, heure, lieu).
      </p>

      <h2>Finalité</h2>
      <p>
        Ces données permettent de fournir une analyse personnalisée, de répondre
        aux demandes et d’assurer le suivi des échanges.
      </p>

      <h2>Partage</h2>
      <p>
        Les données peuvent être traitées via des outils sécurisés comme Gmail,
        n8n, Calendly, Stripe ou l’hébergeur du site.
      </p>

      <h2>Conservation</h2>
      <p>
        Les données ne sont conservées que pour la durée strictement nécessaire
        à la finalité pour laquelle elles sont collectées.
      </p>

      <h2>Transfert hors UE</h2>
      <p>
        Certains services impliquent un transfert de données hors Union
        Européenne, notamment vers les États-Unis, encadré par des garanties
        appropriées.
      </p>

      <h2>Droits</h2>
      <p>
        Vous pouvez demander l’accès, la modification ou la suppression de vos
        données à l’adresse suivante : contact@cabinet-astrae.fr
      </p>
    </LegalPage>
  );
}
