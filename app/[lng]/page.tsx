import Image from "next/image";
import { ReactNode } from "react";
import { Programmer } from "../ui/image-svgs";
import { Lang, useTranslation } from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import Menu from "../ui/menu";
import Link from "next/link";

function HeroSection(props: {
  id: string;
  heading: ReactNode;
  children: ReactNode;
}) {
  const { id, heading, children } = props;
  return (
    <section
      id={id}
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-20 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
    >
      <article className="sm:w-1/2">
        <h2 className="text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
          {heading}
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400">
          {children}
        </p>
      </article>
      <Programmer className="text-slate-700 sm:w-1/2" />
    </section>
  );
}

function Section(props: {
  id?: string;
  heading: ReactNode;
  children?: ReactNode;
}) {
  const { id, heading, children } = props;
  return (
    <section
      id={id}
      className="widescreen:min-h-screen my-12 flex scroll-mt-20 flex-col items-center justify-center p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export default async function Page({ params }: { params: { lng: Lang } }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <Menu lng={lng}>
        <Link href="#mentoring" className="hover:opacity-90">
          {t("nav.mentoringLinkText")}
        </Link>
        <Link href="#software-development" className="hover:opacity-90">
          {t("nav.softwareDevelopmentLinkText")}
        </Link>
      </Menu>

      <main className="mx-auto max-w-4xl">
        <HeroSection
          id="hero-section"
          heading={
            <Trans
              t={t}
              i18nKey="frontpage.heroSection.headingText"
              components={[
                <span className="text-indigo-700 dark:text-indigo-300" />,
              ]}
            />
          }
        ></HeroSection>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <Section id="mentoring" heading={t("frontpage.mentoring.headingText")}>
          <p>{t("frontpage.mentoring.sectionText")}</p>
        </Section>

        <Section id="software-development" heading="Software Development">
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
          </ul>
        </Section>
      </main>
      <footer id="footer" className="bg-teal-800 text-xl text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address className="text-sm">
            <h2>Peter Strøiman ApS</h2>
            Email: <a href="mailto:info@stroiman.com">info@stroiman.com</a>
            <br />
          </address>
          <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
            <Link href="#hero-section" className="hover:opacity-90">
              Back up
            </Link>
          </nav>
        </section>
      </footer>
    </>
  );
}
