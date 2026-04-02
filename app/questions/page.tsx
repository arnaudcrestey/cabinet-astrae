import { PageFrame } from "@/components/projection/PageFrame";
import { Questionnaire } from "@/components/projection/Questionnaire";

export default function QuestionsPage() {
  return (
    <PageFrame
      title="Questionnaire de diagnostic"
      intro="Ce questionnaire permet au Cabinet Astraé de produire une première lecture structurée de votre situation."
    >
      <Questionnaire />
    </PageFrame>
  );
}
