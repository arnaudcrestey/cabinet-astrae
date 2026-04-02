import Link from "next/link";

export function PageFrame({
  children,
  title,
  intro
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
}) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-sage/30 bg-sand/50">
        <div className="mx-auto flex w-full max-w-prosewide items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-pine">
            Cabinet Astraé
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="/analyse">Analyse</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/resultat">Résultat</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-prosewide px-6 py-12 md:py-16">
        <section className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-umber/90 md:text-lg">{intro}</p>
        </section>
        {children}
      </main>
    </div>
  );
}
