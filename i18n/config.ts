export const locales = ["no", "en", "sv", "tr", "da", "de", "fr", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";

export const localeNames: Record<Locale, string> = {
  no: "Norsk",
  en: "English",
  sv: "Svenska",
  tr: "Türkçe",
  da: "Dansk",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  no: "NO",
  en: "EN",
  sv: "SV",
  tr: "TR",
  da: "DA",
  de: "DE",
  fr: "FR",
  es: "ES",
};
