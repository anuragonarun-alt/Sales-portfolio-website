import { contact, identity } from "../config/content";

export default function SiteFooter() {
  const year = identity.copyrightYear;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        {/* Left — identity */}
        <div className="site-footer__brand">
          <span className="site-footer__name">{identity.name}</span>
          <span className="site-footer__role">{identity.role}</span>
        </div>

        {/* Right — social links + copyright */}
        <div className="site-footer__right">
          <nav
            className="site-footer__social"
            aria-label="Social links"
          >
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            )}
            {contact.twitter && (
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="Twitter / X profile"
              >
                Twitter
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="site-footer__social-link"
                aria-label={`Email ${identity.name}`}
              >
                Email
              </a>
            )}
          </nav>
          <p className="site-footer__copy">
            &copy; {year} {identity.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
