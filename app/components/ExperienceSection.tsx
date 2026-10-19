import { experience, type ExperienceEntry } from "../config/content";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="exp-card" aria-label={`${entry.role} at ${entry.company}`}>
      {/* Card header */}
      <header className="exp-card__header">
        <div className="exp-card__meta">
          <span className="exp-card__category">{entry.offerCategory}</span>
          <time className="exp-card__dates">{entry.dates}</time>
        </div>
        <h3 className="exp-card__role">{entry.role}</h3>
        <p className="exp-card__company">{entry.company}</p>
      </header>

      {/* Separator */}
      <div className="exp-card__divider" aria-hidden="true" />

      {/* Responsibilities */}
      {entry.responsibilities.length > 0 && (
        <div className="exp-card__block">
          <p className="exp-card__block-label">Responsibilities</p>
          <ul className="exp-card__list" role="list">
            {entry.responsibilities.map((item, i) => (
              <li key={i} className="exp-card__list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Verified results */}
      {entry.results.length > 0 && (
        <div className="exp-card__block exp-card__block--results">
          <p className="exp-card__block-label">Verified Results</p>
          <ul className="exp-card__list" role="list">
            {entry.results.map((result, i) => (
              <li key={i} className="exp-card__list-item exp-card__list-item--result">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function ExperienceSection() {
  const visibleEntries = experience.filter((e) => !e.hidden);

  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      <div className="section__inner">
        <p className="section__eyebrow" aria-hidden="true">EXPERIENCE</p>
        <h2 id="exp-heading" className="section__title">
          Where I&apos;ve sold.
        </h2>

        {visibleEntries.length > 0 ? (
          <div className="exp-list" role="list">
            {visibleEntries.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          /* Empty state — visible to the user until entries are configured */
          <div className="empty-state" aria-label="Experience not yet configured">
            <div className="empty-state__inner">
              <span className="empty-state__icon" aria-hidden="true">—</span>
              <p className="empty-state__text">
                Experience entries are being configured.
              </p>
              <p className="empty-state__sub">
                Add your roles to{" "}
                <code className="empty-state__code">app/config/content.ts</code>{" "}
                to populate this section.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
