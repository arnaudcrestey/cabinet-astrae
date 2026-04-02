import type { Question } from "./types";

export const QUESTION_SET: Question[] = [
  {
    id: "situation",
    label: "Quelle situation occupe le plus votre esprit en ce moment ?",
    placeholder: "Décrivez en quelques phrases ce que vous vivez."
  },
  {
    id: "tension",
    label: "Qu'est-ce qui crée le plus de tension ou d'incertitude pour vous ?",
    placeholder: "Ex: relation, décision, épuisement, répétition d'un schéma..."
  },
  {
    id: "repetition",
    label: "Avez-vous l'impression que cette dynamique se répète ?",
    placeholder: "Ce qui revient, ce que vous observez, ce qui se rejoue."
  },
  {
    id: "intention",
    label: "Qu'aimeriez-vous comprendre ou clarifier en priorité ?",
    placeholder: "La question centrale que vous aimeriez éclairer."
  },
  {
    id: "rythme",
    label: "Dans les prochaines semaines, quel changement juste serait déjà important ?",
    placeholder: "Un pas concret, réaliste, cohérent pour vous."
  }
];
