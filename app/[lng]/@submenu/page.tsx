import Link from "next/link";
import { Lang, LangParam, useTranslation } from "../../i18n";
import Links from "../links";

export default async function Submenu({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <Link href="#software-development" className="hover:opacity-90">
        {t("nav.softwareDevelopmentLinkText")}
      </Link>
      <Link href="#courses" className="hover:opacity-90">
        {t("nav.coursesLinkText")}
      </Link>
      <Link href="#training" className="hover:opacity-90">
        {t("nav.trainingLinkText")}
      </Link>
    </>
  );
}
