import type {
  ContactInfoItem,
  FormValues,
  MenuGroup,
  NavLink,
  SocialLink,
} from "../types/landing";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Про нас", href: "#about" },
  { label: "Меню", href: "#menu" },
  { label: "Контакти", href: "#contact" },
] as const;

export const MENU: MenuGroup[] = [
  {
    title: "Кава",
    items: [
      { name: "Еспресо", price: "150 грн", desc: "подвійний шот, наша суміш" },
      {
        name: "Капучино",
        price: "220 грн",
        desc: "з молочною піною та сердечком",
      },
      {
        name: "Флет-вайт",
        price: "240 грн",
        desc: "для тих, хто не любить піну",
      },
      {
        name: "Карамельний раф",
        price: "260 грн",
        desc: "найулюбленіший напій у дворі",
        hit: true,
      },
      { name: "Дрип-кава", price: "130 грн", desc: "допомагаємо безкоштовно" },
    ],
  },
  {
    title: "Не лише кава",
    items: [
      {
        name: "Матча-латте",
        price: "280 грн",
        desc: "церемоніальна матча, молоко на вибір",
      },
      {
        name: "Гарячий шоколад",
        price: "240 грн",
        desc: "з домашніми маршмеллоу",
      },
      {
        name: "Яблучний сидр",
        price: "190 грн",
        desc: "з корицею та медом, зігріває по-справжньому",
      },
    ],
  },
  {
    title: "Випічка до семи ранку",
    items: [
      {
        name: "Круасан вершковий",
        price: "160 грн",
        desc: "з пекарні на іншому кінці двору",
      },
      {
        name: "Кіндл-рол",
        price: "180 грн",
        desc: "теплий, з корицею та цукром",
      },
      {
        name: "Кардамонова булочка",
        price: "170 грн",
        desc: "за рецептом бабусі Марії",
      },
      {
        name: "Пиріг дня",
        price: "250 грн",
        desc: "дізнаєтесь у баристи — щодня інший",
      },
    ],
  },
];

export const CONTACT_ITEMS: ContactInfoItem[] = [
  { label: "Адреса", value: "вул. Садова, 12 · під'їзд 3", icon: "pin" },
  { label: "Години роботи", value: "щодня · 7:00 — 21:00", icon: "clock" },
  {
    label: "Телефон",
    value: "+380 (97) 123-45-67",
    href: "tel:+380971234567",
    icon: "phone",
  },
  {
    label: "Пошта",
    value: "privet@udoma.coffee",
    href: "mailto:privet@udoma.coffee",
    icon: "mail",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Viber", href: "https://www.viber.com/ua/", kind: "viber" },
  { label: "Telegram", href: "https://t.me/coffee_udoma", kind: "telegram" },
];

export const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  phone: "",
  message: "",
};

export const MESSAGE_LIMIT = 500;

export const THEME_STORAGE_KEY = "coffee-theme";
