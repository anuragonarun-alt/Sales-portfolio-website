import { contact } from "../config/content";

type ContactLinkProps = {
  href: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
};

function ContactLink({ href, label, sublabel, icon }: ContactLinkProps) {
  if (!href.trim()) return null;

  const isEmail = href.startsWith("mailto:");
  const isExternal = !isEmail;

  return (
    <a
      href={isEmail ? href : href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="contact-link"
      aria-label={`${label} — ${sublabel}`}
    >
      <span className="contact-link__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-link__text">
        <span className="contact-link__label">{label}</span>
        <span className="contact-link__sub">{sublabel}</span>
      </span>
      <span className="contact-link__arrow" aria-hidden="true">↗</span>
    </a>
  );
}

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactSection() {
  // Check if at least one contact method is configured
  const hasAnyContact =
    contact.email || contact.linkedin || contact.bookingLink || contact.twitter;

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="section__inner">
        <p className="section__eyebrow" aria-hidden="true">CONTACT</p>
        <h2 id="contact-heading" className="section__title">
          Let&apos;s connect.
        </h2>
        <p className="contact-intro">
          If you&apos;re looking for a driven sales professional, I&apos;d love
          to hear from you. Reach out through any of the channels below.
        </p>

        {hasAnyContact ? (
          <div className="contact-links">
            <ContactLink
              href={contact.email ? `mailto:${contact.email}` : ""}
              label="Email"
              sublabel={contact.email || ""}
              icon={<EmailIcon />}
            />
            <ContactLink
              href={contact.linkedin}
              label="LinkedIn"
              sublabel="Connect professionally"
              icon={<LinkedInIcon />}
            />
            <ContactLink
              href={contact.bookingLink}
              label="Book a Call"
              sublabel="Schedule a conversation"
              icon={<CalendarIcon />}
            />
            <ContactLink
              href={contact.twitter}
              label="Twitter / X"
              sublabel="Follow along"
              icon={<TwitterIcon />}
            />
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__inner">
              <span className="empty-state__icon" aria-hidden="true">—</span>
              <p className="empty-state__text">Contact details coming soon.</p>
              <p className="empty-state__sub">
                Add your email, LinkedIn, and booking link to{" "}
                <code className="empty-state__code">app/config/content.ts</code>.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
