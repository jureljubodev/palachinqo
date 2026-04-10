import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Phone } from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const html = t("about.text");
  const [expanded, setExpanded] = useState(false);

  const [previewHTML, fullHTML] = html.split("<!--break-->");
  return (
    <section id="about" className="section">
      <div className="container grid-two">
        <div>
          <h2 className="section-title">{t("about.title")}</h2>
          {/* <p>{t("about.text")}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: expanded ? previewHTML : previewHTML + "...",
            }}
          />
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="expanded-text"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              >
                <div dangerouslySetInnerHTML={{ __html: fullHTML }} />
              </motion.div>
            )}
          </AnimatePresence>
          {fullHTML && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? t("about.readLess") : t("about.readMore")}
            </button>
          )}
        </div>
        <div>
          {/* <h2 className="section-title">{t("location.title")}</h2> */}
          <p>
            <strong>{t("location.open")}:</strong> {t("location.days")} <br></br>{" "}
            {t("location.hours")}
            {/* <br></br> {t("location.hoursLater")} */}
          </p>
          {/* <p>{t("location.taste")}</p> */}
          <p>
            <strong>{t("location.closedSunday")}</strong>
          </p>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.8638025875175!2d15.961906976717234!3d45.812394310138586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e15f3934c7%3A0x593feb6fa5dfaff6!2sIlica%2075%2C%2010000%2C%20Zagreb!5e1!3m2!1shr!2shr!4v1762357525489!5m2!1shr!2shr"
            style={{ width: "100%", height: 260, border: 0, borderRadius: 16, marginBottom: "0.25rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p style={{ fontSize: "0.75rem", opacity: 0.6, marginBottom: "0.5rem" }}>Ilica 75, 10000, Zagreb</p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <a
              href="https://www.instagram.com/palachinqo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={1.8} />
            </a>
            <a href="tel:+385924610263" aria-label="Phone">
              <Phone size={22} strokeWidth={1.8} />
            </a>
          </div>
        </div>
        {/* <img
          src="/src/assets/img/about.jpg"
          alt="Palachinqo interior"
          style={{
            width: "100%",
            borderRadius: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        /> */}
      </div>
    </section>
  );
}
