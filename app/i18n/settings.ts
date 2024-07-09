export const fallbackLng = "da";
export const languages = [fallbackLng, "en"] as const;
export const cookieName = "i18next";
export type Lang = (typeof languages)[number];
