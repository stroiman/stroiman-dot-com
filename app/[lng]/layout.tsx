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
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";
import { languages } from "../i18n/settings";
import { Lang, LangParam, useTranslation } from "../i18n";

const inter = Inter({ subsets: ["latin"] });
const sourceSefif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--source-serif",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params }: { params: LangParam }) {
  switch (params.lng) {
    case "en":
      return {
        title:
          "Peter Strøiman - Freelance software developer with 25+ years of experience",
        description:
          "Freelance software developer with 25+ years of experience",
        openGraph: {
          title:
            "Peter Strøiman - Freelance software developer with 25+ years of experience",
          description:
            "Freelance software developer with 25+ years of experience, and a specialty in the field of test-driven development. I offer custom development services, courses, mentoring, training.",
          url: "https://stroiman.com/en/",
          siteName: "stroiman.com",
          locale: "en-UK",
          type: "website",
        },
        icons: {
          icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
          ],
          //shortcut: ["/shortcut-icon.png"],
          apple: [
            {
              url: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
            },
          ],
          //other: [
          //  {
          //    rel: "apple-touch-icon-precomposed",
          //    url: "/apple-touch-icon-precomposed.png",
          //  },
          //],
        },
      };
    default:
      return {
        title:
          "Peter Strøiman - Freelance software udvikler med mere end 25 års erfaring",
        description: "Freelance software udvikler med mere end 25 års erfaring",
        openGraph: {
          title:
            "Peter Strøiman - Freelance software udvikler med mere end 25 års erfaring",
          description:
            "Freelance software, der tilbyder udvikling, kurser, mentorordninger. Med stort speciale indenfor test-driven development",
          url: "https://stroiman.com/da/",
          siteName: "stroiman.com",
          locale: "da-DK",
          type: "website",
        },
        icons: {
          icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
          ],
          //shortcut: ["/shortcut-icon.png"],
          apple: [
            {
              url: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
            },
          ],
          //other: [
          //  {
          //    rel: "apple-touch-icon-precomposed",
          //    url: "/apple-touch-icon-precomposed.png",
          //  },
          //],
        },
      };
  }
}

export default async function RootLayout({
  children,
  submenu,
  params,
}: Readonly<{
  children: React.ReactNode;
  submenu: React.ReactNode;
  params: { lng: Lang };
}>) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "translation");
  return (
    <html lang={lng} dir={dir(lng)} className="sm:scroll-smooth">
      <head>
        <title>Peter Strøiman - Freelance Software Developer</title>
      </head>
      <body
        className={clsx(
          inter.className,
          sourceSefif.className,

          "flex min-h-screen flex-col items-stretch bg-slate-50 font-light dark:bg-black dark:text-white",
        )}
      >
        <Menu
          lng={lng}
          submenu={submenu}
          switcher={<LanguageSwitcher lng={lng} />}
          socialLinks={<Links lng={lng} />}
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
          <nav
            aria-label={t("pageNav.navLabel")}
            className="hidden flex-grow space-x-6 md:block"
          >
            <Link
              href={`/${lng}/technical-skills`}
              className="hover:opacity-90"
            >
              {t("nav.technicalSkillsLinkText")}
            </Link>
            <Link href={`/${lng}/legal`} className="hover:opacity-90">
              {t("nav.legalLinkText")}
            </Link>
            <div className="inline space-x-2">
              <Links lng={lng} />
            </div>
          </nav>
        </Menu>

        <Main>{children}</Main>
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
      </body>
    </html>
  );
}
