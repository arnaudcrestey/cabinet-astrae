import { PageFrame } from "@/components/projection/PageFrame";
import { Questionnaire } from "@/components/projection/Questionnaire";

export default function QuestionsPage() {
  return (
    <PageFrame
      title="Faire un point sur votre situation"
      intro="Ce questionnaire permet au Cabinet Astraé de poser une première lecture claire de votre situation, avant un éventuel échange plus approfondi."
    >
      <Questionnaire />
    </PageFrame>
  );
}
