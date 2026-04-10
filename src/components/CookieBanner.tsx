import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("cookies-ok")) setVisible(true);
  }, []);
  if (!visible) return null;
  return (
    <div className="cookie-banner">
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <span className="cookiesText">
          Koristimo kolačiće kako bismo poboljšali vaše iskustvo pregledavanja i
          u marketinške svrhe.
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="btn"
            onClick={() => {
              localStorage.setItem("cookies-ok", "1");
              setVisible(false);
            }}
          >
            Prihvati
          </button>
          <a className="btn" href="/cookies">
            Postavke kolačića
          </a>
        </div>
      </div>
    </div>
  );
}
