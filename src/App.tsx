import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import MenuSection from "./components/MenuSection";
import FadeInSection from "./components/FadeInSection";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import "./styles/fadein.scss"; // we will create this

export default function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Give 3D models + images time to load
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // adjust load duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader done={!loading} />
      <div className="page-content">
        <Navbar
          onLangChange={(lng) => i18n.changeLanguage(lng)}
          current={i18n.language}
        />
        <Hero />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <MenuSection />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
        <FadeInSection>
          <CookieBanner />
        </FadeInSection>
      </div>
    </>
  );
}
