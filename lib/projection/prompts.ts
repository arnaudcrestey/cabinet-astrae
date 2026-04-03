import type { ProjectionAnswers } from "./types";

function formatAnswers(answers: ProjectionAnswers) {
  return Object.entries(answers)
    .map(([key, value]) => `- ${key}: ${String(value ?? "").trim()}`)
    .join("\n");
}

export function buildPrompt(answers: ProjectionAnswers) {
  return `
Tu rédiges une première lecture de situation pour Cabinet Astraé.

Contexte :
Cabinet Astraé propose un premier éclairage sur une situation personnelle à partir des éléments librement transmis par la personne. Cette lecture doit être sérieuse, sobre, humaine, structurée et crédible. Elle n'est ni une prédiction, ni un diagnostic psychologique, ni une interprétation excessive.

Objectif :
Produire une première lecture claire et nuancée, qui aide la personne à mieux comprendre ce qu'elle traverse, sans dramatiser ni simplifier à l'excès.

Style attendu :
- Écrire en français.
- S'adresser directement à la personne avec "vous".
- Ton calme, posé, professionnel, humain.
- Formulations fluides, naturelles, élégantes.
- Aucune phrase creuse, aucun jargon, aucune grandiloquence.
- Aucun ton mystique, ésotérique ou commercial.
- Ne jamais surinterpréter.
- Ne jamais faire de promesse.
- Ne jamais employer un vocabulaire technique inutile.
- Le texte doit donner la sensation d'une vraie lecture humaine, pas d'un résumé automatique.

Contraintes de contenu :
- Partir uniquement des éléments fournis.
- Faire émerger ce qui semble central.
- Rester nuancé.
- Montrer une compréhension fine de la situation.
- Aider à mettre un peu d'ordre, de recul et de clarté.

Contraintes par champ :
- summary :
  420 à 650 caractères environ.
  Donner une vision d'ensemble de la situation.
  Ce bloc doit être le plus qualitatif et le plus incarné.

- dominantDynamic :
  140 à 220 caractères environ.
  Formuler ce qui organise principalement la situation actuelle.

- keyTension :
  140 à 220 caractères environ.
  Nommer avec tact ce qui crée le nœud, la tension ou l'inconfort principal.

- clarityPath :
  140 à 240 caractères environ.
  Ouvrir une piste de clarification simple, juste et utile, sans donner de recette toute faite.

- deeperWork :
  220 à 420 caractères environ.
  Ouvrir vers la possibilité d'un approfondissement plus personnalisé. Mentionner naturellement qu'un travail plus approfondi peut s'appuyer sur le thème astral, sans effet mystique.

Réponse attendue :
Retourne uniquement un JSON valide, sans aucun texte avant ni après, avec exactement cette structure :

{
  "summary": "string",
  "dominantDynamic": "string",
  "keyTension": "string",
  "clarityPath": "string",
  "deeperWork": "string"
}

Éléments transmis :
${formatAnswers(answers)}
`.trim();
}
