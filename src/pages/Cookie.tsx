// src/pages/CookiesPolicy.tsx
import { type JSX } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/Cookies.scss";

export default function CookiesPolicy(): JSX.Element {
  const { t } = useTranslation();

  // optional last-updated can come from env or translation key
  const lastUpdated = t("cookies.lastUpdated", "2025-11-05");

  // sections: use t() with keys; fallback to English text if translation key missing
  const sections = [
    {
      heading: t("cookies.what_are_cookies.heading", "What are cookies?"),
      body: t(
        "cookies.what_are_cookies.body",
        "Cookies are small text files stored on your device (computer or mobile) by websites you visit. They help websites remember information about your visit — like language preference or items in your shopping cart — to improve your experience."
      ),
    },
    {
      heading: t("cookies.how_we_use.heading", "How we use cookies"),
      bodyList: t(
        "cookies.how_we_use.list",
        "We use cookies to:\n- Remember your language and preferences.\n- Maintain session state (keep you logged in during a visit).\n- Analyze site usage (anonymous analytics to improve content).\n- Provide basic functionality and performance improvements."
      ),
    },
    {
      heading: t("cookies.types.heading", "Types of cookies we use"),
      bodyList: t("cookies.types.list", 
        "Essential cookies — required for the site to work (e.g. session cookies).\n" +
        "Preference cookies — remember user choices (language, theme).\n" +
        "Analytics cookies — collect anonymous usage information (pageviews, errors).\n" +
        "Advertising cookies — (if used) to display relevant offers (third-party)."
      ),
    },
    {
      heading: t("cookies.your_choices.heading", "Your choices"),
      bodyList: t("cookies.your_choices.list", 
        "You can control or delete cookies using your browser settings. Most browsers let you:\n" +
        "- Block cookies completely (may break some features).\n" +
        "- Delete cookies manually.\n" +
        "- Block third-party cookies.\n" +
        "For specific instructions, check your browser's help pages."
      ),
    },
    {
      heading: t("cookies.contact_and_updates.heading", "Contact & updates"),
      body: t(
        "cookies.contact_and_updates.body",
        "If you have questions about our Cookies Policy or want to request data changes, contact us at info@example.com. We may update this policy occasionally; the 'last updated' date will be shown here."
      ),
    },
  ];

  return (
    <div className="cookies-page">
      <header className="policy-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft className="icon" /> {t("cookies.backToHome", "Back to Home")}
          </Link>
        </div>
      </header>

      <main className="container policy-main">
        <div className="policy-top">
          <h1>{t("cookies.title", "Cookies Policy")}</h1>
          <div className="meta">
            {t("cookies.lastUpdatedLabel", "Last updated:")} {lastUpdated}
          </div>
        </div>

        <article className="policy-content">
          {sections.map((s, i) => (
            <section key={i} className="policy-section">
              <h2>{s.heading}</h2>

              {s.bodyList ? (
                <ul>
                  {/* s.bodyList may be an array (if translated as object with returnObjects)
                      or a string if the key isn't present and fallback is the array value.
                      Ensure it's an array before mapping. */}
                  {Array.isArray(s.bodyList)
                    ? (s.bodyList as string[]).map((line, idx) => <li key={idx}>{line.replace(/^-?\s*/, "")}</li>)
                    : String(s.bodyList).split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
                </ul>
              ) : (
                <p>{s.body}</p>
              )}
            </section>
          ))}

          <section className="policy-section contact">
            <h2>{t("cookies.contactHeading", "Contact")}</h2>
            <p>{t("cookies.contactEmail", "Email: info@palachinqo.com")}</p>
          </section>
        </article>
      </main>
    </div>
  );
}
