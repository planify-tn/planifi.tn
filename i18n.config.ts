// i18n.config.ts
export type Locale = "en" | "fr" | "ar";

export const i18n = {
  defaultLocale: "en" as Locale,
  locales: ["en", "fr", "ar"] as Locale[],
  localeDetection: true,
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  fr: "🇫🇷",
  ar: "🇹🇳",
};

export type RouteKey = "home" | "pricing" | "faq" | "request" | "contact";

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: "/en",
    fr: "/fr",
    ar: "/ar",
  },
  pricing: {
    en: "/en/pricing",
    fr: "/fr/pricing",
    ar: "/ar/pricing",
  },
  faq: {
    en: "/en/faq",
    fr: "/fr/faq",
    ar: "/ar/faq",
  },
  request: {
    en: "/en/request",
    fr: "/fr/request",
    ar: "/ar/request",
  },
  contact: {
    en: "/en/contact",
    fr: "/fr/contact",
    ar: "/ar/contact",
  },
};

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
