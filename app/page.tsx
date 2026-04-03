import Link from "next/link";

const astraeMeaning = [
  {
    letter: "A",
    title: "Accueillir",
    text: "Créer un espace de confiance",
  },
  {
    letter: "S",
    title: "Situer",
    text: "Comprendre où vous en êtes",
  },
  {
    letter: "T",
    title: "Traduire",
    text: "Mettre des mots simples sur ce que vous vivez",
  },
  {
    letter: "R",
    title: "Relier",
    text: "Faire apparaître les liens entre les éléments",
  },
  {
    letter: "A",
    title: "Ajuster",
    text: "Faire émerger des pistes plus justes",
  },
  {
    letter: "É",
    title: "Éclairer",
    text: "Apporter de la clarté",
  },
];

export default function HomePage() {
  return (
    <main className="astrae-entry-page">
      <div className="astrae-entry-noise" />
      <div className="astrae-entry-halo astrae-entry-halo-1" />
      <div className="astrae-entry-halo astrae-entry-halo-2" />
      <div className="astrae-entry-orbit astrae-entry-orbit-1" />
      <div className="astrae-entry-orbit astrae-entry-orbit-2" />

      <section className="astrae-entry-shell">
        <div className="astrae-entry-frame">
          <div className="astrae-entry-card">
            <div className="astrae-entry-topline" />

            <div className="astrae-mark-wrap" aria-hidden="true">
              <div className="astrae-mark">
                <div className="astrae-mark-ring astrae-mark-ring-outer" />
                <div className="astrae-mark-ring astrae-mark-ring-inner" />
                <div className="astrae-mark-cross astrae-mark-cross-v" />
                <div className="astrae-mark-cross astrae-mark-cross-h" />
                <div className="astrae-mark-star" />
                <div className="astrae-mark-crescent" />
                <div className="astrae-mark-dot astrae-mark-dot-1" />
                <div className="astrae-mark-dot astrae-mark-dot-2" />
                <div className="astrae-mark-dot astrae-mark-dot-3" />
              </div>
            </div>

            <header className="astrae-entry-header">
  <div className="astrae-entry-symbol" />
  <p className="astrae-entry-kicker">Cabinet</p>
  <h1 className="astrae-entry-title">Astraé</h1>
  <div className="astrae-entry-divider" />
  <p className="astrae-entry-subtitle">
    Une lecture du thème astral pour y voir plus clair.
  </p>
</header>

            <div className="astrae-entry-actions">
              <Link href="/approche" className="astrae-entry-button">
                Accéder à votre lecture
              </Link>
            </div>

            <section className="astrae-meaning" aria-label="Signification d’Astraé">
              <div className="astrae-meaning-divider" />
              <ul className="astrae-meaning-list">
                {astraeMeaning.map((item) => (
                  <li key={`${item.letter}-${item.title}`} className="astrae-meaning-item">
                    <span className="astrae-meaning-letter">{item.letter}</span>
                    <span className="astrae-meaning-content">
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="astrae-meaning-divider astrae-meaning-divider-bottom" />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
