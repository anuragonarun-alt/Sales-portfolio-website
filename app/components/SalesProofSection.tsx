import { proofItems, type ProofItem } from "../config/content";

function ProofCard({ item }: { item: ProofItem }) {
  const typeLabel: Record<ProofItem["type"], string> = {
    loom: "INTRODUCTION",
    recording: "CALL RECORDING",
    "case-study": "CASE STUDY",
    testimonial: "TESTIMONIAL",
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="proof-card"
      aria-label={`${typeLabel[item.type]}: ${item.title} — opens in new tab`}
    >
      {/* Type badge */}
      <span className="proof-card__type">{typeLabel[item.type]}</span>

      {/* Icon placeholder */}
      <div className="proof-card__icon-wrap" aria-hidden="true">
        {item.type === "loom" || item.type === "recording" ? (
          /* Play icon */
          <svg
            className="proof-card__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
          </svg>
        ) : (
          /* Doc icon */
          <svg
            className="proof-card__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        )}
      </div>

      <h3 className="proof-card__title">{item.title}</h3>
      {item.description && (
        <p className="proof-card__description">{item.description}</p>
      )}

      {/* Arrow */}
      <span className="proof-card__arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export default function SalesProofSection() {
  const visibleItems = proofItems.filter(
    (item) => item.visible && item.url.trim() !== ""
  );

  // Hide entire section if nothing is configured
  if (visibleItems.length === 0) return null;

  return (
    <section id="proof" className="section" aria-labelledby="proof-heading">
      <div className="section__inner">
        <p className="section__eyebrow" aria-hidden="true">SALES PROOF</p>
        <h2 id="proof-heading" className="section__title">
          See it in action.
        </h2>

        <div className="proof-grid">
          {visibleItems.map((item) => (
            <ProofCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
