import { createInstance, CustomTypeOptions } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLng, languages } from "./settings";
export const defaultNS = "translation";
export type Lang = (typeof languages)[number];
import translation from "./locales/da/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
    };
  }
}
type Namespace = keyof CustomTypeOptions["resources"];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

const initI18next = async (lng: Lang, ns?: Namespace | Namespace[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: Lang, namespace: Namespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      // debug: true,
      supportedLngs: languages,
      fallbackLng,
      lng: lng || fallbackLng,
      fallbackNS: defaultNS,
      defaultNS,
      ns: ns || defaultNS,
    });
  return i18nInstance;
};

export async function useTranslation(
  lng: Lang,
  ns?: Namespace | Namespace[] /*, options = {} */,
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      //options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
