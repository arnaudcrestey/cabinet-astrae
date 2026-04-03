const result = {
  summary: "TEST VISIBLE ASTRAE 123",
  dominantDynamic: "TEST DYNAMIQUE 123",
  keyTension: "TEST TENSION 123",
  clarityPath: "TEST CLARIFICATION 123",
  deeperWork: "TEST APPROFONDISSEMENT 123",
  confidence: "high" as const,
  generatedAt: new Date().toISOString(),
};

return NextResponse.json({ result });
