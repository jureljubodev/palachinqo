import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Phone } from "lucide-react";
import LegalModal, { type LegalType } from "./LegalModal";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [modal, setModal] = useState<LegalType | null>(null);

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">Palachinqo</div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} REGNUM DECIMARUM j.d.o.o. — {t("footer.rights")}
            </p>

            <div className="footer-links">
              <button className="footer-policy-btn" onClick={() => setModal("cookies")}>Cookies</button>
              <button className="footer-policy-btn" onClick={() => setModal("privacy")}>Privacy</button>
              <button className="footer-policy-btn" onClick={() => setModal("terms")}>Terms</button>
            </div>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/palachinqo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.8} />
              </a>
              <a href="tel:+385924610263" aria-label="Phone">
                <Phone size={20} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={modal} onClose={() => setModal(null)} />
    </>
  );
}
