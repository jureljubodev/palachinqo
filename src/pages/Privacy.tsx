// src/pages/Privacy.tsx
import { type JSX } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/Privacy.scss";

export default function Privacy(): JSX.Element {
  const { t } = useTranslation();

  console.log(
  "TEST:",
  t("privacy.data_we_collect.list"),
  typeof t("privacy.data_we_collect.list")
);

  const lastUpdated = t("privacy.lastUpdated", "2025-11-05");

  const sections = [
    {
      heading: t("privacy.intro.heading", "Introduction"),
      body: t(
        "privacy.intro.body",
        "This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services."
      ),
    },
    {
      heading: t("privacy.data_we_collect.heading", "Data we collect"),
      bodyList: t("privacy.data_we_collect.list", {
        defaultValue: [
          "Information you give us directly — name, email, order details when you place an order or contact us.",
          "Automatically collected data — usage diagnostics, device and browser info, IP address, cookies and similar technologies.",
          "Third-party sources — payment processors, analytics providers or services you connect to (where applicable).",
        ],
      }),
    },
    {
      heading: t("privacy.how_we_use.heading", "How we use your data"),
      bodyList: t("privacy.how_we_use.list", {
        defaultValue: [
          "To provide and operate the services and fulfill orders.",
          "To communicate with you about orders, updates, and support requests.",
          "To improve our website and offerings via analytics and testing.",
          "To comply with legal obligations and prevent abuse or fraud.",
        ],
      }),
    },
    {
      heading: t("privacy.cookies.heading", "Cookies & tracking"),
      body: t(
        "privacy.cookies.body",
        "We use cookies and similar technologies to remember preferences, analyze usage, and provide certain features. See our Cookies Policy for details."
      ),
    },
    {
      heading: t(
        "privacy.data_sharing.heading",
        "Data sharing & third parties"
      ),
      bodyList: t("privacy.data_sharing.list", {
        defaultValue: [
          "We share data with service providers (payment processors, hosting, analytics) who perform services on our behalf.",
          "We may disclose information to comply with legal processes or protect rights and property.",
          "We do not sell your personal data to third parties.",
        ],
      }),
    },
    {
      heading: t("privacy.retention.heading", "Data retention"),
      body: t(
        "privacy.retention.body",
        "We retain personal data for as long as necessary to provide services, comply with legal obligations, and resolve disputes."
      ),
    },
    {
      heading: t("privacy.your_rights.heading", "Your rights"),
      bodyList: t("privacy.your_rights.list", {
        defaultValue: [
          "Access the personal data we hold about you.",
          "Request correction or deletion of your personal data (subject to legal exceptions).",
          "Object to or restrict processing where applicable.",
          "Withdraw consent where we rely on it.",
          "To exercise these rights, contact us at the email below.",
        ],
      }),
    },
    {
      heading: t("privacy.security.heading", "Security"),
      body: t(
        "privacy.security.body",
        "We implement reasonable technical and organizational measures to protect your personal data, but cannot guarantee absolute security."
      ),
    },
    {
      heading: t(
        "privacy.international_transfers.heading",
        "International transfers"
      ),
      body: t(
        "privacy.international_transfers.body",
        "Personal data may be processed in countries other than your country of residence; we take steps to ensure appropriate safeguards are in place."
      ),
    },
    {
      heading: t("privacy.changes.heading", "Changes to this policy"),
      bodyList: t("privacy.changes.list", {
        defaultValue: [
          "We may update this Privacy Policy from time to time. We will post the updated date at the top of this page.",
          "If changes are material, we may notify users by email or prominent notice on the site.",
        ],
      }),
    },
  ];

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft className="icon" />{" "}
            {t("privacy.backToHome", "Back to Home")}
          </Link>
        </div>
      </header>

      <main className="container privacy-main">
        <div className="privacy-top">
          <h1>{t("privacy.title", "Privacy Policy")}</h1>
          <div className="meta">
            {t("privacy.lastUpdatedLabel", "Last updated:")} {lastUpdated}
          </div>
        </div>

        <article className="privacy-content">
          {sections.map((s, i) => (
            <section key={i} className="privacy-section">
              <h2>{s.heading}</h2>

              {s.bodyList ? (
                <ul>
                  {Array.isArray(s.bodyList)
                    ? (s.bodyList as string[]).map((line, idx) => (
                        <li key={idx}>{line.replace(/^-?\s*/, "")}</li>
                      ))
                    : String(s.bodyList)
                        .split("\n")
                        .map((line, idx) => <p key={idx}>{line}</p>)}
                </ul>
              ) : (
                <p>{s.body}</p>
              )}
            </section>
          ))}

          <section className="privacy-section contact">
            <h2>{t("privacy.contactHeading", "Contact")}</h2>
            <p>{t("privacy.contactEmail", "Email: info@palachinqo.com")}</p>
          </section>
        </article>
      </main>
    </div>
  );
}
