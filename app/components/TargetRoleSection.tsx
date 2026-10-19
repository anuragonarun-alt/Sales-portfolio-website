import { targetRole } from "../config/content";

type RowProps = { label: string; value: string };

function DetailRow({ label, value }: RowProps) {
  if (!value.trim()) return null;
  return (
    <div className="role-row">
      <dt className="role-row__label">{label}</dt>
      <dd className="role-row__value">{value}</dd>
    </div>
  );
}

export default function TargetRoleSection() {
  return (
    <section id="target-role" className="section" aria-labelledby="role-heading">
      <div className="section__inner">
        <p className="section__eyebrow" aria-hidden="true">OPEN TO WORK</p>
        <h2 id="role-heading" className="section__title">
          What I&apos;m looking for.
        </h2>

        {targetRole.summary && (
          <p className="role-summary">{targetRole.summary}</p>
        )}

        <dl className="role-details">
          <DetailRow
            label="Offer Category"
            value={targetRole.preferredOfferCategory}
          />
          <DetailRow
            label="Compensation"
            value={targetRole.compensationStructure}
          />
          <DetailRow label="Availability" value={targetRole.availability} />
          <DetailRow
            label="Work Preference"
            value={targetRole.remotePreference}
          />
          {targetRole.additionalNotes && (
            <DetailRow label="Notes" value={targetRole.additionalNotes} />
          )}
        </dl>
      </div>
    </section>
  );
}
