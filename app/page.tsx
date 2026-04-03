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
            <span className="astrae-gate-text-line">
              Une lecture du thème astral
            </span>
            <span className="astrae-gate-text-line">
              pour y voir plus clair.
            </span>
          </p>

          <Link href="/cabinet" className="astrae-gate-button">
            Entrer
          </Link>

          <p className="astrae-gate-note">
            Accès confidentiel · Sans engagement
          </p>
        </div>
      </section>
    </main>
  );
}
