import { metrics } from "../config/content";

export default function MetricsSection() {
  // Only show metrics with a non-empty value
  const visibleMetrics = metrics.filter((m) => m.value.trim() !== "");

  // If nothing is configured, render nothing
  if (visibleMetrics.length === 0) return null;

  return (
    <section id="metrics" className="section" aria-labelledby="metrics-heading">
      <div className="section__inner">
        {/* Section label */}
        <p className="section__eyebrow" aria-hidden="true">
          PERFORMANCE
        </p>
        <h2 id="metrics-heading" className="section__title">
          Results at a glance.
        </h2>

        {/* Metric cards grid */}
        <ul
          className="metrics-grid"
          role="list"
          aria-label="Performance metrics"
        >
          {visibleMetrics.map((metric) => (
            <li key={metric.id} className="metric-card">
              <span className="metric-card__value">{metric.value}</span>
              <span className="metric-card__label">{metric.label}</span>
              {metric.subtext && (
                <span className="metric-card__subtext">{metric.subtext}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
