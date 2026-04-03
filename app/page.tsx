import Link from "next/link";

export default function HomePage() {
  return (
    <main className="astrae-gate">
      <section className="astrae-gate-card">
        <div className="astrae-gate-card-inner">
          <p className="astrae-gate-kicker">Cabinet</p>

          <h1 className="astrae-gate-title">Astraé</h1>

          <div className="astrae-gate-divider" />

          <p className="astrae-gate-text">
            Une lecture du thème astral pour y voir plus clair.
          </p>

          <Link href="/cabinet" className="astrae-gate-button">
            Entrer
          </Link>
        </div>
      </section>
    </main>
  );
}
