import { useTranslation } from "react-i18next";

type Item = {
  name_hr: string;
  name_en: string;
  price: number;
  type: "sweet" | "savory";
};
const items: Item[] = [
  {
    name_hr: "Nutella & banane",
    name_en: "Nutella & banana",
    price: 4.5,
    type: "sweet",
  },
  {
    name_hr: "Šećer i cimet",
    name_en: "Sugar & cinnamon",
    price: 3.5,
    type: "sweet",
  },
  {
    name_hr: "Sir i šunka",
    name_en: "Cheese & ham",
    price: 5.5,
    type: "savory",
  },
];

export default function Menu() {
  const { t, i18n } = useTranslation();
  const isHR = i18n.language?.startsWith("en") ? false : true;
  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section-title">{t("menu.title")}</h2>
        <div className="menu-grid">
          {items.map((it, idx) => (
            <div className="card" key={idx}>
              <h4>{isHR ? it.name_hr : it.name_en}</h4>
              <p>{t("menu.from", { price: it.price.toFixed(2) })}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
