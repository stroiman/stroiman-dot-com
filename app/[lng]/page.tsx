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
import { ReactChild } from "react";
import clsx from "clsx";

const ProgrammerWrapped = WrapSvg(Programmer);
const EducationWrapped = WrapSvg(Education);
const ProgrammerWorkingWrapped = WrapSvg(ProgrammerWorking);

const SectionDiv = () => <hr className="mx-auto w-1/2 border-current" />;

const TextAndImage = ({
  Image,
  imagePlacement,
  children,
}: {
  imagePlacement: "left" | "right";
  children: ReactChild;
  Image: React.ComponentType<{ className: string }>;
}) => (
  <div
    className={clsx("flex flex-col items-start gap-8", {
      "sm:flex-row": imagePlacement === "left",
      "sm:flex-row-reverse": imagePlacement === "right",
    })}
  >
    <Image className="sm:w-1/3" />
    <div className="flex flex-col gap-4 sm:w-2/3">{children}</div>
  </div>
);

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

      <SectionDiv />

      <Section
        id="software-development"
        heading={t("nav.softwareDevelopmentLinkText")}
      >
        <TextAndImage
          imagePlacement="right"
          Image={(props) => (
            <ProgrammerWorkingWrapped
              {...props}
              title={t("frontpage.softwareDevelopment.imageTitle")}
            />
          )}
        >
          <>
            <Para>{t("frontpage.softwareDevelopment.paragraph1")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph2")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph3")}</Para>
          </>
        </TextAndImage>
        <a
          href={`/${lng}/technical-skills`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span>Læs mere om mine tekniske kompetencer</span>
          <ArrowForward />
        </a>
      </Section>

      <SectionDiv />

      <Section id="courses" heading={t("frontpage.courses.headingText")}>
        <TextAndImage
          imagePlacement="left"
          Image={(props) => (
            <figure {...props}>
              <EducationWrapped title={t("frontpage.courses.imageCaption")} />
              <figcaption className="text-body mt-1 text-xs" aria-hidden>
                {t("frontpage.courses.imageCaption")}
              </figcaption>
            </figure>
          )}
        >
          <>
            <Para>{t("frontpage.courses.section1.paragraph1")}</Para>

            <Para>{t("frontpage.courses.section2.paragraph2")}</Para>
          </>
        </TextAndImage>
      </Section>

      <SectionDiv />

      <Section id="training" heading={t("frontpage.training.headingText")}>
        <TextAndImage
          Image={(props) => (
            <ProgrammerWrapped
              {...props}
              title={t("frontpage.training.imageTitle")}
            />
          )}
          imagePlacement="right"
        >
          <Para>{t("frontpage.training.paragraph1")}</Para>
        </TextAndImage>
      </Section>
    </>
  );
}
