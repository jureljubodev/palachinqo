// data/menuItemsBilingual.ts
import nutellaImg from "../assets/img/nutella.jpeg";
import nutellaGoldImg from "../assets/img/nutella_gold.jpeg";
import biancoImg from "../assets/img/bianco.jpeg";
import oroBiancoImg from "../assets/img/oro_bianco.jpeg";
import auroraImg from "../assets/img/aurora.jpeg";
import cherryImg from "../assets/img/cherry.jpeg";
import goldenQueenImg from "../assets/img/golden_queen.jpeg";
import pistachioMagicImg from "../assets/img/pistachio_magic.jpeg";
import pistachioCrunchImg from "../assets/img/pistachio_crunch.jpeg";
import cherryCrownImg from "../assets/img/cherry_crown.jpeg";
import cocaColaImg from "../assets/img/coca-cola.avif";
import cocaColaZeroImg from "../assets/img/cocacolazero.avif";
import icedTeaImg from "../assets/img/icetea.avif";
import janaImg from "../assets/img/jana.avif";
import chocolateMilkImg from "../assets/img/cokmlijeko.avif";
import milkImg from "../assets/img/mlijekoo.avif";
import slanaSlika from "../assets/img/slaneSlike.jpg";
import slanaSlika2 from "../assets/img/slaneAkcija.jpeg";
// import slanaSlika2Mobile from "../assets/img/slaneAkcija-mobile.jpeg"; // Used for responsive images in MenuPage


export const menuItems: Record<
  string,
  {
    name: { en: string; hr: string };
    price: string;
    description: { en: string; hr: string };
    beforePrice?: string;
    image?: string;
    popular?: boolean;
  }[]
> = {
  sweet: [
    {
      name: { hr: "Nutella", en: "Nutella" },
      price: "1.30€",
      description: {
        hr: "Nutella",
        en: "Nutella",
      },
      image: nutellaImg,
      popular: true,
    },
    {
      name: { hr: "Nutella Gold", en: "Nutella Gold" },
      price: "1.30€",
      description: {
        hr: "Nutella s keksom",
        en: "Nutella with biscuits",
      },
      image: nutellaGoldImg,
    },
    {
      name: { hr: "Bianco", en: "Bianco" },
      price: "1.20€",
      description: {
        hr: "Bijela linolada",
        en: "White linolada (white spread)",
      },
      image: biancoImg,
    },
    {
      name: { hr: "Oro Bianco", en: "Oro Bianco" },
      price: "1.20€",
      description: {
        hr: "Bijela linolada s keksom",
        en: "White linolada with biscuits",
      },
      image: oroBiancoImg,
    },
    {
      name: { hr: "Aurora", en: "Aurora" },
      price: "1.10€",
      description: {
        hr: "Marmelada od marelica",
        en: "Apricot marmalade",
      },
      image: auroraImg,
    },
    {
      name: { hr: "Cherry", en: "Cherry" },
      price: "1.10€",
      description: {
        hr: "Marmelada od višanja",
        en: "Cherry marmalade",
      },
      image: cherryImg,
    },

    // right column specialty items (also sweet)
    {
      name: { hr: "Cherry Crown", en: "Cherry Crown" },
      price: "1.30€",
      description: {
        hr: "Marmelada od višanja s bijelom linoladom i keksom",
        en: "Cherry marmalade with white linolada and biscuits",
      },
      popular: true,
      image: cherryCrownImg,
    },
    {
      name: { hr: "Pistachio Magic", en: "Pistachio Magic" },
      price: "1.40€",
      description: {
        hr: "Premium pistacio namaz s keksom i bijelom linoladom",
        en: "Premium pistachio spread with biscuits and white linolada",
      },
      image: pistachioMagicImg,
    },
    {
      name: { hr: "Pistachio Crunch", en: "Pistachio Crunch" },
      price: "1.50€",
      description: {
        hr: "Premium pistacio namaz s komadićima pistacija i bijelom linoladom",
        en: "Premium pistachio spread with pistachio pieces and white linolada",
      },
      image: pistachioCrunchImg,
    },
    {
      name: { hr: "Golden Queen", en: "Golden Queen" },
      price: "1.80€",
      description: {
        hr: "Nutella s bananom i keksom",
        en: "Nutella with banana and biscuits",
      },
      popular: true,
      image: goldenQueenImg,
    },
  ],

  salty: [
    {
      name: { hr: "Šunka-sir", en: "Ham & Cheese" },
      price: "7.60€",
      beforePrice: "9.50€",
      popular: true,
      image: slanaSlika,
      description: {
        hr: "Pureća šunka i mozzarella, 1 umak po izboru (ketchup, majoneza, tartar, ajvar)",
        en: "Turkey ham & mozzarella cheese",
      },
    },
    {
      name: { hr: "Akcija za dvoje", en: "Ham & Cheese" },
      price: "15.20€",
      popular: true,
      image: slanaSlika2,
      description: {
        hr: "2 šunka-sir palačinke + 2 umaka po izboru + 2 soka gratis po izboru",
        en: "Turkey ham & mozzarella cheese",
      },
    },
  ],

  drinks: [
    {
      name: { hr: "Coca-Cola 0.5L", en: "Coca-Cola 0.5L" },
      price: "2.50€",
      description: { hr: "Coca Cola", en: "Coca Cola" },
      image: cocaColaImg,
    },
    {
      name: { hr: "Coca-Cola Zero 0.5L", en: "Coca-Cola Zero 0.5L" },
      price: "2.50€",
      description: { hr: "Coca Cola Zero", en: "Coca Cola Zero" },
      image: cocaColaZeroImg,
    },
    {
      name: { hr: "Ledeni čaj 0.5L", en: "Iced Tea 0.5L" },
      price: "2.50€",
      description: { hr: "Ledeni čaj", en: "Iced tea" },
      image: icedTeaImg,
    },
    {
      name: { hr: "Jana 0.5L", en: "Jana 0.5L" },
      price: "2.00€",
      description: { hr: "Prirodna voda", en: "Natural mineral water" },
      image: janaImg,
    },
    {
      name: { hr: "Čok. mlijeko 0.2L", en: "Chocolate milk 0.2L" },
      price: "2.00€",
      description: { hr: "Čokoladno mlijeko", en: "Chocolate milk" },
      image: chocolateMilkImg,
    },
    {
      name: { hr: "Mlijeko 0.2L", en: "Milk 0.2L" },
      price: "2.00€",
      description: { hr: "Mlijeko", en: "Milk" },
      image: milkImg,
    },
  ],
};
