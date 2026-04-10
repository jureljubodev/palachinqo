import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();
  return (
    <section id="location" className="section">
      <div className="container grid-two">
        <div>
          {/* <h2 className="section-title">{t("location.title")}</h2> */}
          <p>Ilica 75, 10000, Zagreb</p>
          <p>
            <strong>{t("location.open")}:</strong> Pon-Sub 15:00–23:00
          </p>
          <p>
            <strong>Nedjeljom ne radimo</strong>
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=Palachinqo"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/your-handle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.8638025875175!2d15.961906976717234!3d45.812394310138586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e15f3934c7%3A0x593feb6fa5dfaff6!2sIlica%2075%2C%2010000%2C%20Zagreb!5e1!3m2!1shr!2shr!4v1762357525489!5m2!1shr!2shr"
          style={{ width: "100%", height: 360, border: 0, borderRadius: 20 }}
        />
      </div>
    </section>
  );
}
