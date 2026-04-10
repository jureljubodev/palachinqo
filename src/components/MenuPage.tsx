import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import "../styles/MenuPage.scss"; // SCSS import
import { useTranslation } from "react-i18next";
import { menuItems } from "../data/menuItemsBilingual";

export const MenuPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const { t, i18n } = useTranslation();
  // const items = menuItems[category ?? "sweet"] ?? [];

  const lang = (i18n.language?.split("-")[0] ?? "en") as "en" | "hr";

  // const getCategoryIcon = () => {
  //   switch (category) {
  //     case "sweet":
  //       return <IceCream className="icon" />;
  //     case "drinks":
  //       return <Coffee className="icon" />;
  //     default:
  //       return <Utensils className="icon" />;
  //   }
  // };

  const getTitleKey = () => {
    switch (category) {
      case "sweet":
        return t("menu.sweet");
      case "salty":
        return "menu.salty";
      case "drinks":
        return "menu.drinks";
      default:
        return "Menu";
    }
  };

  return (
    <div className="menu-page bottom-padding">
      <main className="container py-12">
        <div className="category-title">
          {/* {getCategoryIcon()} */}
          <h1>{t(getTitleKey())}</h1>
        </div>

        <div className="menu-grid">
          {menuItems[category as keyof typeof menuItems]?.map((item, index) => (
            <div key={index} className="menu-card">
              {item.beforePrice && (
                <div className="discount-badge">
                  20%
                  <br />
                  OFF
                </div>
              )}
              <div className="menu-card-image">
                <img src={item.image} loading="lazy" />
                {item.popular && (
                  <div className="popular-badge">
                    <Star className="icon" /> Popular
                  </div>
                )}
              </div>
              <div className="menu-card-body">
                <div className="menu-card-header">
                  <h3>{item.name[lang] || item.name.en}</h3>
                  <span className="price">{item.price}</span>
                </div>
                {item.beforePrice ? (
                  <span className="beforePrice">{item.beforePrice}</span>
                ) : (
                  ""
                )}
                <p>{item.description[lang] || item.description.en}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
