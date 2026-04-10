import { Link } from "react-router-dom";
import { ExternalLink, GlassWater } from "lucide-react";
import "../styles/MenuSection.scss";
import { useTranslation } from "react-i18next";
import slatkeSlika from "../assets/img/slatke.jpeg";

type MenuItem = {
  title: string;
  link: string;
} & (
  | { type: "image"; image: string }
  | { type: "gradient" }
);

export default function MenuSection() {
  const { t } = useTranslation();
  const menuItems: MenuItem[] = [
    {
      type: "image",
      title: t("menu.sweet"),
      image: slatkeSlika,
      link: "/menu/sweet",
    },
    {
      type: "gradient",
      title: t("menu.drinks"),
      link: "/menu/drinks",
    },
  ];
  return (
    <section id="menu">
      <div className="container">
        <h2>{t("menu.title")}</h2>
        <div className="grid">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className="menu-item">
              <div className="aspect-ratio">
                {item.type === "image" ? (
                  <img className="bottleImg" src={item.image} alt={item.title} />
                ) : (
                  <div className="drinks-bg">
                    <GlassWater size={64} strokeWidth={1.2} className="drinks-icon" />
                  </div>
                )}
                <div className="overlay"></div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <span className="view-btn">
                    <span>"view menu"</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
