import { Trans } from "react-i18next/TransWithoutContext";
import { Lang, useTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import LanguageLink from "./language-link";

const SwitchToLng = async ({ lng }: { lng: Lang }) => {
  const { t } = await useTranslation(lng);
  return (
    <LanguageLink lng={lng}>
      <Trans
        t={t}
        i18nKey="nav.switchLanguage"
        components={[<span key={0} className="font-bold" />]}
      />
    </LanguageLink>
  );
};

export default async function LanguageSwitcher({ lng }: { lng: Lang }) {
  return (
    <>
      {languages
        .filter((lang) => lang !== lng)
        .map((lng) => (
          <SwitchToLng key={lng} lng={lng} />
        ))}
    </>
  );
}
