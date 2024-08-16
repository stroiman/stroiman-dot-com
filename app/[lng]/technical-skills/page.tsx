import PageLayout from "@/app/ui/page-layout";
import { Trans } from "react-i18next/TransWithoutContext";
import { LangParam, useTranslation } from "../../i18n";
import Main from "@/app/ui/main";
import { ReactNode } from "react";
import { A, H2, SkillSection } from "./components";
import JavaScriptLogo from "./js-logo";
import { Translation } from "react-i18next";
import { SectionDiv } from "../components";

const ASup = ({ children }: any) => (
  <a className="text-em dark:text-em-dark" href="#footnote-electron">
    <sup>{children}</sup>
  </a>
);

export default async function SkillsPage({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "skills-page");

  return (
    <PageLayout heading={t("headingText")}>
      <p className="mb-4">
        <Trans
          t={t}
          i18nKey="leadingText"
          components={[<A href="#list-of-skills" />]}
        />
      </p>
      <div className="flex flex-col gap-4">
        <SkillSection heading="JavaScript/TypeScript" Logo={JavaScriptLogo}>
          <p>
            <Trans
              t={t}
              i18nKey="javascriptSection.p1"
              components={[
                <A href="#powerful-programming-languages" />,
                <a
                  className="text-em dark:text-em-dark"
                  href="https://www.electronjs.org/"
                  target="_blank"
                />,
                <ASup />,
              ]}
            />
          </p>
          <p>
            <Trans
              t={t}
              i18nKey="javascriptSection.p2"
              components={[
                <code />,
                <a
                  className="text-em dark:text-em-dark"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
                  target="_blank"
                />,
                <em />,
                <a
                  className="text-em dark:text-em-dark"
                  href="https://en.wikipedia.org/wiki/ECMAScript_version_history#6th_Edition_%E2%80%93_ECMAScript_2015"
                  target="_blank"
                />,
              ]}
            />
          </p>
          <p>
            <Trans t={t} i18nKey="javascriptSection.p3" />
          </p>
          <p>
            <Trans t={t} i18nKey="javascriptSection.p4" />
          </p>
        </SkillSection>

        <SkillSection heading={t("tddSection.headingText")}>
          <>
            <p>{t("tddSection.body")}</p>
            <p>{t("tddSection.body2")}</p>
            <p>{t("tddSection.body3")}</p>
          </>
        </SkillSection>

        <SkillSection
          heading="Powerful programming languages"
          headingId="powerful-programming-languages"
        >
          <p>
            <Trans t={t} i18nKey="powerfulSection.p1" components={[<em />]} />
          </p>
          <p>
            <Trans t={t} i18nKey="powerfulSection.p2" />
          </p>
          <p>
            <Trans t={t} i18nKey="powerfulSection.p3" />
          </p>
          <p>
            <Trans t={t} i18nKey="powerfulSection.p4" components={[<em />]} />
          </p>
          <figure className="mx-8 my-4 border-l pl-4 text-gray-700 dark:text-gray-300">
            <blockquote lang="en-US">
              <p className="mb-2">
                During the years we worked on Viaweb I read a lot of job
                descriptions. A new competitor seemed to emerge out of the
                woodwork every month or so. The first thing I would do, after
                checking to see if they had a live online demo, was look at
                their job listings. After a couple years of this I could tell
                which companies to worry about and which not to. The more of an
                IT flavor the job descriptions had, the less dangerous the
                company was. The safest kind were the ones that wanted Oracle
                experience. You never had to worry about those. You were also
                safe if they said they wanted C++ or Java developers. If they
                wanted Perl or Python programmers, that would be a bit
                frightening-- that's starting to sound like a company where the
                technical side, at least, is run by real hackers. If I had ever
                seen a job posting looking for Lisp hackers, I would have been
                really worried.
              </p>
            </blockquote>
            <figcaption>
              <A href="https://paulgraham.com/avg.html" target="_blank">
                Beating the Averages
              </A>{" "}
              by Paul Graham.
            </figcaption>
          </figure>
        </SkillSection>

        <H2 id="list-of-skills" className="scroll-mt-24">
          {t("langaugesSection.headingText")}
        </H2>
        <ul className="list-inside list-disc">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>node.js</li>
          <li>React</li>
          <li>OCaml</li>
          <li>next.js</li>
          <li>tailwindcss</li>
          <li>Go</li>
          <li>C#</li>
          <li>Java</li>
          <li>C++</li>
          <li>Delphi</li>
          <li>Unix scripting</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
        </ul>

        <H2>{t("dataSection.headingText")}</H2>
        <ul className="list-inside list-disc">
          <li>PostgreSQL</li>
          <li>PostGIS (postgres geographic data)</li>
          <li>MS SqlServer</li>
          <li>MySql</li>
          <li>MariaDB</li>
          <li>RabbitMQ</li>
          <li>CouchDB</li>
          <li>MongoDB</li>
          <li>Cosmos DB </li>
        </ul>
        <p>{t("dataSection.cosmosDb")}</p>
      </div>
      <SectionDiv className="my-6" />
      <span className="text-muted text-sm" id="footnote-electron">
        <b>1.</b> {t("electronSamples.electronExamplesHeading")}
        <ul className="inline list-disc [&>:not(:first-child)::before]:mr-2 [&>:not(:first-child)::before]:content-['\2022'] [&>:not(:first-child)]:ml-2">
          <li className="inline">Visual Studio Code</li>
          <li className="inline">Microsoft Teams</li>
          <li className="inline">Slack</li>
          <li className="inline">Obsidian</li>
          <li className="inline">Github Atom</li>
          <li className="inline">Discord</li>
          <li className="inline">Signal</li>
        </ul>
        <br />
        {t("electronSamples.atom")}
      </span>
    </PageLayout>
  );
}
