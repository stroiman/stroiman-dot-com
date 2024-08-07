import { Lang, useTranslation } from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import Menu from "../ui/menu";
import Link from "next/link";
import Main from "../ui/main";
import Section, { HeroSection } from "./section";
import ProgrammerWorking from "../ui/image-svgs/programmer-working";
import Education from "../ui/image-svgs/education";
import LanguageSwitcher from "./language-switcher";
import Links from "./links";
import Para from "./para";
import { Programmer } from "../ui/image-svgs";
import { WrapSvg } from "./svg-image-container";
import ArrowForward from "../ui/icons";

const ProgrammerWrapped = WrapSvg(Programmer);
const EducationWrapped = WrapSvg(Education);
const ProgrammerWorkingWrapped = WrapSvg(ProgrammerWorking);

export default async function Page({ params }: { params: { lng: Lang } }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <HeroSection
        id="top"
        heading={
          <Trans
            t={t}
            i18nKey="frontpage.heroSection.headingText"
            components={[
              <span key={0} className="text-indigo-700 dark:text-indigo-300" />,
            ]}
          />
        }
      ></HeroSection>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <Section
        id="software-development"
        heading={t("nav.softwareDevelopmentLinkText")}
      >
        <div className="flex flex-col-reverse gap-8 sm:flex-row">
          <div className="flex flex-col gap-4 sm:w-2/3">
            <Para>{t("frontpage.softwareDevelopment.paragraph1")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph2")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph3")}</Para>
          </div>

          <ProgrammerWorkingWrapped className="sm:w-1/3" />
        </div>
        <a
          href={`/${lng}/technical-skills`}
          className="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span>Læs mere om mine tekniske kompetencer</span>
          <ArrowForward />
        </a>
      </Section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <Section id="courses" heading={t("frontpage.courses.headingText")}>
        <div className="flex flex-col gap-8 sm:flex-row">
          <figure className="sm:w-1/3">
            <Education
              title={t("frontpage.courses.imageCaption")}
              className="sm:w-1/3 dark:bg-gradient-radial dark:from-orange-400 dark:text-slate-900"
            />
            <figcaption className="text-body text-xs" aria-hidden>
              {t("frontpage.courses.imageCaption")}
            </figcaption>
          </figure>
          <div className="flex flex-col gap-4 sm:w-2/3">
            <Para>{t("frontpage.courses.section1.paragraph1")}</Para>

            <Para>{t("frontpage.courses.section2.paragraph2")}</Para>
          </div>
        </div>
      </Section>

      <Section id="training" heading={t("frontpage.training.headingText")}>
        <div className="flex flex-col-reverse gap-8 sm:flex-row">
          <div className="flex flex-col gap-4 sm:w-2/3">
            <Para>{t("frontpage.training.paragraph1")}</Para>
          </div>
          <Programmer
            title={t("frontpage.training.imageTitle")}
            className="sm:w-1/3 dark:bg-gradient-radial dark:from-orange-400 dark:text-slate-900"
          />
        </div>
      </Section>
    </>
  );
}
