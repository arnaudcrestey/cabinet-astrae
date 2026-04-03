import type { Question } from "./types";

export const QUESTION_SET: Question[] = [
  {
    id: "situation",
    label: "Quelle situation appelle aujourd'hui le plus votre attention ?",
    placeholder:
      "Décrivez simplement ce que vous vivez en ce moment, avec vos mots."
  },
  {
    id: "tension",
    label: "Qu'est-ce qui, dans cette situation, vous pèse, vous freine ou vous laisse dans l'incertitude ?",
    placeholder:
      "Vous pouvez évoquer ce qui crée une tension, un flou, un blocage ou une hésitation."
  },
  {
    id: "repetition",
    label: "Avez-vous le sentiment qu'un schéma ou une dynamique se répète ?",
    placeholder:
      "Ce que vous voyez revenir, se rejouer, ou prendre une forme déjà connue."
  },
  {
    id: "intention",
    label: "Qu'aimeriez-vous mieux comprendre ou clarifier en priorité ?",
    placeholder:
      "La question, le point sensible ou le besoin d'éclairage qui vous semble central."
  },
  {
    id: "rythme",
    label: "Dans les prochaines semaines, qu'est-ce qui vous aiderait déjà à avancer de manière plus juste ?",
    placeholder:
      "Un déplacement concret, réaliste ou apaisant qui ferait une vraie différence pour vous."
  }
];
