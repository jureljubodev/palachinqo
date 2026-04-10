import React, { Suspense, lazy, useEffect } from "react";
import "./styles/globals.scss";
import "./styles/navbar.scss";
import "./i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const App = lazy(() => import("./App"));
const CookiesPolicy = lazy(() => import("./pages/Cookie"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const MenuPage = lazy(() => import("./components/MenuPage").then((m) => ({ default: m.MenuPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu/:category" element={<MenuPage />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
