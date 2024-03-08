export type StoreContext = {
  language: SupportedLanguages;
  theme: SupportedThemes;
};

export type SupportedLanguages = "PL" | "EN";

export type SupportedThemes = "DARK" | "LIGHT";
