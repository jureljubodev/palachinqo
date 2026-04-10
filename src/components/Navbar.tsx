import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  onLangChange,
  current,
}: {
  onLangChange: (lng: string) => void;
  current: string;
}) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}${mobileOpen ? " navbar--mobile-open" : ""}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-brand">PalachinqO</a>

        <div className="nav-links">
          <a href="#about" onClick={() => setMobileOpen(false)}>{t("nav.about")}</a>
          <a href="#menu" onClick={() => setMobileOpen(false)}>{t("nav.menu")}</a>
          <select
            className="language-selector"
            aria-label="language"
            value={current?.startsWith("en") ? "en" : "hr"}
            onChange={(e) => onLangChange(e.target.value)}
          >
            <option value="hr">HR</option>
            <option value="en">EN</option>
          </select>
        </div>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`nav-hamburger-icon nav-hamburger-icon--menu${mobileOpen ? " is-hidden" : " is-visible"}`}>
            <Menu size={24} />
          </span>
          <span className={`nav-hamburger-icon nav-hamburger-icon--close${mobileOpen ? " is-visible" : " is-hidden"}`}>
            <X size={24} />
          </span>
        </button>
      </div>

      <div className={`nav-mobile${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        <a href="#about" tabIndex={mobileOpen ? 0 : -1} onClick={() => setMobileOpen(false)}>{t("nav.about")}</a>
        <a href="#menu" tabIndex={mobileOpen ? 0 : -1} onClick={() => setMobileOpen(false)}>{t("nav.menu")}</a>
        <select
          className="language-selector language-selector--mobile"
          aria-label="language"
          tabIndex={mobileOpen ? 0 : -1}
          value={current?.startsWith("en") ? "en" : "hr"}
          onChange={(e) => { onLangChange(e.target.value); setMobileOpen(false); }}
        >
          <option value="hr">HR</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
}
