// src/pages/Terms.tsx
import { type JSX } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/Terms.scss"

export default function Terms(): JSX.Element {
  const { t } = useTranslation();

  const lastUpdated = t("terms.lastUpdated", "2025-11-05");

  const sections = [
    {
      heading: t("terms.intro.heading", "Introduction"),
      body: t(
        "terms.intro.body",
        "These Terms of Service govern your use of our website and services. By accessing or using the site you agree to be bound by these terms. If you do not agree, please do not use the site."
      ),
    },
    {
      heading: t("terms.use_of_service.heading", "Use of the service"),
      bodyList: [
        t(
          "terms.use_of_service.list.item1",
          "You must be at least 16 years old to use our services (or the minimum age required in your jurisdiction)."
        ),
        t(
          "terms.use_of_service.list.item2",
          "You agree to use the site lawfully and not to engage in abusive or fraudulent activity."
        ),
        t(
          "terms.use_of_service.list.item3",
          "We may suspend or terminate accounts that violate these terms."
        ),
      ],
    },
    {
      heading: t("terms.pricing_and_payments.heading", "Pricing & Payments"),
      bodyList: [
        t(
          "terms.pricing_and_payments.list.item1",
          "Prices displayed on the site are in EUR and may include or exclude taxes as indicated."
        ),
        t(
          "terms.pricing_and_payments.list.item2",
          "We reserve the right to change prices, and correct errors. Confirm the final price at checkout."
        ),
      ],
    },
    {
      heading: t("terms.disclaimer.heading", "Disclaimer of warranties"),
      body: t(
        "terms.disclaimer.body",
        "The service is provided \"as is\" and we disclaim all warranties to the fullest extent permitted by law."
      ),
    },
    {
      heading: t("terms.changes.heading", "Changes to these terms"),
      bodyList: [
        t(
          "terms.changes.list.item1",
          "We may update these Terms occasionally. We will post the updated date at the top of this page."
        ),
        t(
          "terms.changes.list.item2",
          "Continued use after changes constitutes acceptance of the updated Terms."
        ),
      ],
    },
    {
      heading: t("terms.privacy.heading", "Privacy"),
      body: t(
        "terms.privacy.body",
        "Our Privacy Policy describes how we collect and use personal data. By using the site you also consent to the practices described there."
      ),
    },
    {
      heading: t("terms.governing_law.heading", "Governing law"),
      body: t(
        "terms.governing_law.body",
        "These Terms are governed by the laws of the jurisdiction where our business is established, unless otherwise required by mandatory local law."
      ),
    },
  ];

  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft className="icon" /> {t("terms.backToHome", "Back to Home")}
          </Link>
        </div>
      </header>

      <main className="container terms-main">
        <div className="terms-top">
          <h1>{t("terms.title", "Terms of Service")}</h1>
          <div className="meta">
            {t("terms.lastUpdatedLabel", "Last updated:")} {lastUpdated}
          </div>
        </div>

        <article className="terms-content">
          {sections.map((s, i) => (
            <section key={i} className="terms-section">
              <h2>{s.heading}</h2>

              {s.bodyList ? (
                <ul>
                  {Array.isArray(s.bodyList)
                    ? (s.bodyList as string[]).map((line, idx) => <li key={idx}>{line.replace(/^-?\s*/, "")}</li>)
                    : String(s.bodyList).split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
                </ul>
              ) : (
                <p>{s.body}</p>
              )}
            </section>
          ))}

          <section className="terms-section contact">
            <h2>{t("terms.contactHeading", "Contact")}</h2>
            <p>{t("terms.contactEmail", "Email: info@example.com")}</p>
          </section>
        </article>
      </main>
    </div>
  );
}
