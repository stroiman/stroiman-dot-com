import PageLayout from "@/app/ui/page-layout";
import { LangParam, useTranslation } from "../../i18n";
import Main from "@/app/ui/main";
import { ReactNode } from "react";
import { A, H2, SkillSection } from "./components";
import JavaScriptLogo from "./js-logo";

export default async function SkillsPage({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "skills-page");

  return (
    <PageLayout heading={t("headingText")}>
      <p className="mb-4">
        I have highlighted some specific skills on the top of the page.{" "}
        <A href="#list-of-skills">Scroll down</A>
        to see the full list of technical skills.
      </p>
      <div className="flex flex-col gap-4">
        <SkillSection heading="JavaScript/TypeScript" Logo={JavaScriptLogo}>
          <p>
            JavaScript can be a very{" "}
            <A href="#powerful-programming-languages">powerful language</A> when
            you understand it, and it's difficult avoiding having to deal with
            JavaScript as a developer today; as well as TypeScript, a type
            system build on top of JavaScript. But JavaScript is very different
            from other languages like C# or Java, although some things look
            deceptively similar.
          </p>
          <p>
            E.g. The <code>class</code> keyword makes object-oriented programmin
            look very similar to those two languages; but in JavaScript, classes
            really doesn't exist. The keyword is merely <em>syntactic sugar</em>{" "}
            on top of underlying mechanisms. The behaviours of classes and
            inheritance is
            <em>simulated</em> by the{" "}
            <a
              className="text-em dark:text-em-dark"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
              target="_blank"
            >
              prototype chain
            </a>
            .
          </p>
          <p>
            With more than 15 years of experience with JavaScript as well as C#
            I both understand how JavaScript works; but also how it's different
            from languages like C# and Java; both in terms of code, and code
            structure.
          </p>
          <p>
            This places me in a unique position to help already experienced
            teams that are starting a journey of web-application development.
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
            When I talk about a language being <em>powerful</em>, I do not talk
            about execution speed, but the ability for the developer has to
            quickly and succinctly express intent in executable code.
          </p>
          <p>
            Very few programs actually need the execution speed of C++ or Rust;
            so for most projects, the productivity penalty associated with these
            languages would make them a poor choice. Video games, or at least
            the graphics rendering engine, and training the humongous neural
            networks powering moden generative AI fall into this category.
          </p>
          <p>
            I personally prefer to choose languages that provide a sensible
            combination of productivity and the safety relevant for the project
            (or the ability to maintin the code over a long period of time).
          </p>
          <p>
            In Paul Graham's essay "Beating the Averages", he describes how they
            were able to beat the competition because they had written their
            system using the most powerful programming language, <em>LISP</em>.
            And interestingly, the risk assessment of a new competitor on the
            market was primarily based on their technical job listings:
          </p>
          <blockquote
            cite="https://paulgraham.com/avg.html"
            className="mx-8 my-4 border-l pl-4 text-gray-700 dark:text-gray-300"
          >
            <p className="mb-2">
              During the years we worked on Viaweb I read a lot of job
              descriptions. A new competitor seemed to emerge out of the
              woodwork every month or so. The first thing I would do, after
              checking to see if they had a live online demo, was look at their
              job listings. After a couple years of this I could tell which
              companies to worry about and which not to. The more of an IT
              flavor the job descriptions had, the less dangerous the company
              was. The safest kind were the ones that wanted Oracle experience.
              You never had to worry about those. You were also safe if they
              said they wanted C++ or Java developers. If they wanted Perl or
              Python programmers, that would be a bit frightening-- that's
              starting to sound like a company where the technical side, at
              least, is run by real hackers. If I had ever seen a job posting
              looking for Lisp hackers, I would have been really worried.
            </p>
            <cite>
              <A href="https://paulgraham.com/avg.html" target="_blank">
                Beating the Averages
              </A>{" "}
              by Paul Graham.
            </cite>
          </blockquote>
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
          <li>Cosmo DB </li>
        </ul>
        <p>{t("dataSection.cosmosDb")}</p>
      </div>
    </PageLayout>
  );
}
