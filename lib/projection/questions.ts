import type { Question } from "./types";

export const QUESTION_SET: Question[] = [
  {
    id: "situation",
    label: "Si vous deviez décrire la situation que vous traversez aujourd’hui, qu’est-ce qui vous vient en premier ?",
    placeholder:
      "Décrivez simplement ce que vous vivez en ce moment : contexte, personnes impliquées, et ce qui vous marque le plus."
  },
  {
    id: "ressenti",
    label: "Qu’est-ce que cette situation génère en vous, intérieurement ?",
    placeholder:
      "Parlez de ce que vous ressentez : émotions, doutes, tensions, fatigue, confusion ou tiraillement."
  },
  {
    id: "tension",
    label: "Qu’est-ce qui, dans cette situation, vous semble le plus difficile à gérer ou à comprendre ?",
    placeholder:
      "Ce qui bloque, résiste, vous échappe ou vous empêche d’avancer comme vous le souhaiteriez."
  },
  {
    id: "repetition",
    label: "Avez-vous le sentiment que quelque chose se rejoue ou se répète dans ce que vous vivez ?",
    placeholder:
      "Une situation, un type de relation, une réaction ou un schéma que vous avez déjà connu auparavant."
  },
  {
    id: "clarification",
    label: "Si cette situation pouvait s’éclairer, qu’aimeriez-vous comprendre en priorité ?",
    placeholder:
      "La question centrale pour vous aujourd’hui : ce qui vous aiderait vraiment à y voir plus clair."
  },
  {
    id: "mouvement",
    label: "Qu’est-ce qui changerait concrètement pour vous si vous y voyiez plus clair ?",
    placeholder:
      "Ce que cela débloquerait, modifierait ou apaiserait dans votre manière d’agir, de décider ou de vous positionner."
  }
];
