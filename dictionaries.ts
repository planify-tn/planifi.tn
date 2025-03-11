import "server-only";
import { Locale } from "./i18n.config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    pricing: string;
    faq: string;
    tryFree: string;
    tagline: string;
  };
  // Add other sections as needed
  [key: string]: any;
};

// Define dictionaries as functions that return a Promise
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

// Default fallback dictionary in case loading fails
const defaultDictionary: Dictionary = {
  meta: {
    title: "PLANIFI - Tender Management Platform",
    description: "Affordable SAAS for small and medium businesses",
  },
  nav: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    tryFree: "Try Free",
    tagline: "Tender Management Platform",
  },
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  console.log("locale", locale);

  try {
    // Make sure the locale is valid
    if (!dictionaries[locale]) {
      console.warn(
        `No dictionary available for locale: ${locale}, falling back to default`
      );
      return defaultDictionary;
    }

    // Call the function to import the dictionary
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error);
    return defaultDictionary;
  }
}
