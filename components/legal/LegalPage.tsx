// components/legal/LegalPage.tsx

import React from "react";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#FAF9F6] px-6 py-16">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif text-[#4F6F52] text-center mb-12">
          {title}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-[#3A3A3A] leading-relaxed text-sm md:text-base">

          {children}

        </div>

      </div>
    </main>
  );
}
