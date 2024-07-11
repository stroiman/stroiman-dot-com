import { Trans } from "react-i18next/TransWithoutContext";
import { Lang, useTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import Link from "next/link";

const SwitchToLng = async ({ lng }: { lng: Lang }) => {
  const { t } = await useTranslation(lng);
  return (
    <Link href={`/${lng}`}>
      <Trans
        t={t}
        i18nKey="nav.switchLanguage"
        components={[<span className="font-bold" />]}
      />
    </Link>
  );
};

export default async function LanguageSwitcher({ lng }: { lng: Lang }) {
  return languages
    .filter((lang) => lang !== lng)
    .map((lng) => <SwitchToLng key={lng} lng={lng} />);
}
