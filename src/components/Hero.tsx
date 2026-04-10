import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect, useState } from "react";

const Pancake3D = lazy(() => import("./Pancake3D"));

export default function Hero() {
  const { t } = useTranslation();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = "connection" in navigator && Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

    if (isMobile || reducedMotion || saveData) {
      setEnable3D(false);
      return;
    }

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    let timeoutId = 0;
    if (idle) {
      timeoutId = idle(() => setEnable3D(true), { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(() => setEnable3D(true), 700);
    }

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <header className="hero" id="hero">
      <div className="hero-overlay" />
      {enable3D && (
        <Suspense fallback={null}>
          <Pancake3D />
        </Suspense>
      )}
      <div className="hero-content container">
        <p className="tagline">{t("hero.tagline")}</p>
        <div className="cta-row">
          <a className="btn" href="#menu">
            {t("hero.ctaMenu")}
          </a>
          <a
            className="btn"
            href="https://wolt.com/hr/hrv/zagreb/restaurant/palachinqo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.ctaOrder")}
          </a>
        </div>
      </div>
    </header>
  );
}
