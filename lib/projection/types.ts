export type Question = {
  id: string;
  label: string;
  placeholder: string;
};

export type ProjectionAnswers = Record<string, string>;

export type ProjectionResult = {
  summary: string;
  dominantDynamic: string;
  keyTension: string;
  clarityPath: string;
  deeperWork: string;
  confidence: "high" | "medium";
  generatedAt: string;
};

export type ProjectionPayload = {
  answers: ProjectionAnswers;
};

export type LeadPayload = {
  firstName: string;
  email: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  message?: string;
  consent: boolean;
  result: ProjectionResult;
};
