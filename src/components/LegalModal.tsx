import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

export type LegalType = "cookies" | "privacy" | "terms";

interface Section {
  heading: string;
  body?: string;
  bodyList?: string | string[];
}

function renderSection(s: Section, i: number) {
  return (
    <section key={i} className="lmodal-section">
      <h3>{s.heading}</h3>
      {s.bodyList ? (
        <ul>
          {Array.isArray(s.bodyList)
            ? s.bodyList.map((line, idx) => (
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
  );
}

function CookiesContent() {
  const { t } = useTranslation();
  const sections: Section[] = [
    {
      heading: t("cookies.what_are_cookies.heading", "What are cookies?"),
      body: t(
        "cookies.what_are_cookies.body",
        "Cookies are small text files stored on your device by websites you visit. They help websites remember information about your visit to improve your experience."
      ),
    },
    {
      heading: t("cookies.how_we_use.heading", "How we use cookies"),
      bodyList: t(
        "cookies.how_we_use.list",
        "We use cookies to:\n- Remember your language and preferences.\n- Maintain session state.\n- Analyze site usage (anonymous analytics).\n- Provide basic functionality and performance improvements."
      ),
    },
    {
      heading: t("cookies.types.heading", "Types of cookies we use"),
      bodyList: t(
        "cookies.types.list",
        "Essential cookies — required for the site to work.\nPreference cookies — remember user choices.\nAnalytics cookies — collect anonymous usage information.\nAdvertising cookies — (if used) to display relevant offers."
      ),
    },
    {
      heading: t("cookies.your_choices.heading", "Your choices"),
      bodyList: t(
        "cookies.your_choices.list",
        "You can control or delete cookies via browser settings:\n- Block cookies completely.\n- Delete cookies manually.\n- Block third-party cookies."
      ),
    },
    {
      heading: t("cookies.contact_and_updates.heading", "Contact & updates"),
      body: t(
        "cookies.contact_and_updates.body",
        "Questions? Contact us at info@palachinqo.com. We may update this policy occasionally."
      ),
    },
  ];
  return (
    <>
      <h2>{t("cookies.title", "Cookies Policy")}</h2>
      <p className="lmodal-meta">{t("cookies.lastUpdatedLabel", "Last updated:")} {t("cookies.lastUpdated", "2025-11-05")}</p>
      {sections.map(renderSection)}
    </>
  );
}

function PrivacyContent() {
  const { t } = useTranslation();
  const sections: Section[] = [
    {
      heading: t("privacy.intro.heading", "Introduction"),
      body: t("privacy.intro.body", "This Privacy Policy explains how we collect, use, disclose, and protect your personal information."),
    },
    {
      heading: t("privacy.data_we_collect.heading", "Data we collect"),
      bodyList: t("privacy.data_we_collect.list", {
        defaultValue: [
          "Information you give us directly — name, email, order details.",
          "Automatically collected data — usage diagnostics, device info, IP address, cookies.",
          "Third-party sources — payment processors, analytics providers.",
        ],
      }) as string | string[],
    },
    {
      heading: t("privacy.how_we_use.heading", "How we use your data"),
      bodyList: t("privacy.how_we_use.list", {
        defaultValue: [
          "To provide and operate the services and fulfill orders.",
          "To communicate with you about orders, updates, and support.",
          "To improve our website via analytics and testing.",
          "To comply with legal obligations.",
        ],
      }) as string | string[],
    },
    {
      heading: t("privacy.cookies.heading", "Cookies & tracking"),
      body: t("privacy.cookies.body", "We use cookies to remember preferences and analyze usage. See our Cookies Policy for details."),
    },
    {
      heading: t("privacy.data_sharing.heading", "Data sharing & third parties"),
      bodyList: t("privacy.data_sharing.list", {
        defaultValue: [
          "We share data with service providers who perform services on our behalf.",
          "We may disclose information to comply with legal processes.",
          "We do not sell your personal data to third parties.",
        ],
      }) as string | string[],
    },
    {
      heading: t("privacy.your_rights.heading", "Your rights"),
      bodyList: t("privacy.your_rights.list", {
        defaultValue: [
          "Access the personal data we hold about you.",
          "Request correction or deletion of your data.",
          "Object to or restrict processing where applicable.",
          "Withdraw consent where we rely on it.",
        ],
      }) as string | string[],
    },
    {
      heading: t("privacy.security.heading", "Security"),
      body: t("privacy.security.body", "We implement reasonable measures to protect your personal data, but cannot guarantee absolute security."),
    },
  ];
  return (
    <>
      <h2>{t("privacy.title", "Privacy Policy")}</h2>
      <p className="lmodal-meta">{t("privacy.lastUpdatedLabel", "Last updated:")} {t("privacy.lastUpdated", "2025-11-05")}</p>
      {sections.map(renderSection)}
    </>
  );
}

function TermsContent() {
  const { t } = useTranslation();
  const sections: Section[] = [
    {
      heading: t("terms.intro.heading", "Introduction"),
      body: t("terms.intro.body", "These Terms of Service govern your use of our website. By accessing the site you agree to be bound by these terms."),
    },
    {
      heading: t("terms.use_of_service.heading", "Use of the service"),
      bodyList: [
        t("terms.use_of_service.list.item1", "You must be at least 16 years old to use our services."),
        t("terms.use_of_service.list.item2", "You agree to use the site lawfully."),
        t("terms.use_of_service.list.item3", "We may suspend accounts that violate these terms."),
      ],
    },
    {
      heading: t("terms.pricing_and_payments.heading", "Pricing & Payments"),
      bodyList: [
        t("terms.pricing_and_payments.list.item1", "Prices are displayed in EUR and may include or exclude taxes as indicated."),
        t("terms.pricing_and_payments.list.item2", "We reserve the right to change prices and correct errors."),
      ],
    },
    {
      heading: t("terms.disclaimer.heading", "Disclaimer of warranties"),
      body: t("terms.disclaimer.body", "The service is provided \"as is\" and we disclaim all warranties to the fullest extent permitted by law."),
    },
    {
      heading: t("terms.changes.heading", "Changes to these terms"),
      bodyList: [
        t("terms.changes.list.item1", "We may update these Terms occasionally."),
        t("terms.changes.list.item2", "Continued use after changes constitutes acceptance."),
      ],
    },
    {
      heading: t("terms.governing_law.heading", "Governing law"),
      body: t("terms.governing_law.body", "These Terms are governed by the laws of the jurisdiction where our business is established."),
    },
  ];
  return (
    <>
      <h2>{t("terms.title", "Terms of Service")}</h2>
      <p className="lmodal-meta">{t("terms.lastUpdatedLabel", "Last updated:")} {t("terms.lastUpdated", "2025-11-05")}</p>
      {sections.map(renderSection)}
    </>
  );
}

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [type, onClose]);

  if (!type) return null;

  return createPortal(
    <div className="lmodal-overlay" onClick={onClose}>
      <div className="lmodal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="lmodal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <div className="lmodal-body">
          {type === "cookies" && <CookiesContent />}
          {type === "privacy" && <PrivacyContent />}
          {type === "terms" && <TermsContent />}
        </div>
      </div>
    </div>,
    document.body
  );
}
