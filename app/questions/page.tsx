import { PageFrame } from "@/components/projection/PageFrame";
import { Questionnaire } from "@/components/projection/Questionnaire";

export default function QuestionsPage() {
  return (
    <PageFrame
      title="Questionnaire de clarification"
      intro="Répondez avec simplicité. Vos réponses servent à produire une lecture initiale fiable et nuancée."
    >
      <Questionnaire />
    </PageFrame>
  );
}
