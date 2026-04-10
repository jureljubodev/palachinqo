import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Pancake3D = lazy(() => import("./Pancake3D"));

export default function Hero() {
  const { t } = useTranslation();
  useEffect(() => {
    useGLTF.preload("/models/pancake.glb");
  }, []);
  return (
    <header className="hero" id="hero">
      <div className="hero-overlay" />
      <Suspense fallback={null}>
        <Pancake3D />
      </Suspense>
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
