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
import SvgImageContainer from "./svg-image-container";

export default async function Page({ params }: { params: { lng: Lang } }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <Menu
        lng={lng}
        switcher={<LanguageSwitcher lng={lng} />}
        popup={
          <>
            <nav className="py-16">
              <ul className="flex flex-col items-center gap-6 py-2">
                <li>
                  <Link
                    href="#software-development"
                    className="table-cell w-full text-center align-middle hover:opacity-90"
                  >
                    {t("nav.softwareDevelopmentLinkText")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="w-full text-center hover:opacity-90"
                  >
                    {t("nav.coursesLinkText")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#training"
                    className="w-full text-center hover:opacity-90"
                  >
                    {t("nav.trainingLinkText")}
                  </Link>
                </li>
              </ul>
              <Links lng={lng} className="fixed bottom-4 right-4" />
            </nav>
          </>
        }
      >
        <Link href="#software-development" className="hover:opacity-90">
          {t("nav.softwareDevelopmentLinkText")}
        </Link>
        <Link href="#courses" className="hover:opacity-90">
          {t("nav.coursesLinkText")}
        </Link>
        <Link href="#training" className="hover:opacity-90">
          {t("nav.trainingLinkText")}
        </Link>
        <div className="inline space-x-2">
          <Links lng={lng} />
        </div>
      </Menu>

      <Main>
        <HeroSection
          id="top"
          heading={
            <Trans
              t={t}
              i18nKey="frontpage.heroSection.headingText"
              components={[
                <span
                  key={0}
                  className="text-indigo-700 dark:text-indigo-300"
                />,
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

            <SvgImageContainer
              component={ProgrammerWorking}
              className="sm:w-1/3"
            />
          </div>
          {/* Arrow forward
          <a
            href={`/${lng}/technical-skills`}
            className="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span>Læs mere om mine tekniske kompetencer</span>
            <ArrowForward />
          </a>

*/}
          {/*
          <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
            <li className="px2 flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Expore
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block">
                Here is some more information visible on larger screen.
              </p>
              <p className="mt-2 text-center text-3xl text-slate-500 sm:hidden">
                Here is some more information
              </p>
            </li>
            <li className="px2 flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Expore
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block">
                Here is some more information
              </p>
              <p className="mt-2 text-center text-3xl text-slate-500 sm:hidden">
                Here is some more information
              </p>
            </li>
          </ul> */}
        </Section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <Section id="courses" heading={t("frontpage.courses.headingText")}>
          <div className="flex flex-col gap-8 sm:flex-row">
            <figure className="sm:w-1/3">
              <Education
                title={t("frontpage.courses.imageCaption")}
                className="dark:bg-gradient-radial dark:from-zinc-500 dark:text-black"
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
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex flex-col gap-4 sm:w-2/3">
              <Para>{t("frontpage.training.paragraph1")}</Para>
            </div>
            <Programmer
              title={t("frontpage.training.imageTitle")}
              className="sm:w-1/3 dark:bg-gradient-radial dark:from-zinc-500 dark:text-black"
            />
          </div>
        </Section>
      </Main>
      <footer id="footer" className="bg-primary-800 text-xl text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address className="text-sm">
            <h2>Peter Strøiman ApS</h2>
            CVR: 32290671
            <br />
            Email: <a href="mailto:info@stroiman.com">info@stroiman.com</a>
            <br />
            Phone: <a href="tel:+4521902103">+45 21 90 21 03</a>
          </address>
          {/*
          <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
            <Link href={`${lng}/#top`} className="hover:opacity-90">
              Back up
            </Link>
          </nav>
          */}
        </section>
      </footer>
    </>
  );
}
