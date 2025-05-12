import { Lang, useTranslation } from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import Section, { HeroSection } from "./section";
import ProgrammerWorking from "../ui/image-svgs/programmer-working";
import Education from "../ui/image-svgs/education";
import Para from "./para";
import { Programmer } from "../ui/image-svgs";
import { WrapSvg } from "./svg-image-container";
import { ReactChild } from "react";
import clsx from "clsx";
import { SectionDiv } from "./components";

const ProgrammerWrapped = WrapSvg(Programmer);
const EducationWrapped = WrapSvg(Education);
const ProgrammerWorkingWrapped = WrapSvg(ProgrammerWorking);

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
  const { t } = await useTranslation(lng, ["translation", "home-page"]);
  const { t: ts } = await useTranslation(lng, "home-page");
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
        <Box>
          {/*
          <TextAndImage
            imagePlacement="right"
            Image={(props) => (
              <ProgrammerWorkingWrapped
                {...props}
                title={t("frontpage.softwareDevelopment.imageTitle")}
              />
            )}
          >*/}
          <>
            <Para>{t("frontpage.softwareDevelopment.paragraph1")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph2")}</Para>
            <Para>{t("frontpage.softwareDevelopment.paragraph3")}</Para>
          </>
          {/*</TextAndImage>*/}
        </Box>
      </Section>

      <SectionDiv />

      <Section id="skills" heading={t("home-page:skillsSection.heading")}>
        <Box>
          I have extensive experience building complex systems, particularly web
          applications as well as automation of business processes through
          system integrations.
          <ul className="list-disc pl-4 marker:text-sky-400">
            <LI name="Designing maintainable systems"></LI>
            <LI name="JavaScript/ECMAScript and TypeScript">
              <p>
                I have extensive knowledge JavaScript fundamentals, and
                experience with advanced TypeScript features, such as generating
                new types from infered type.
              </p>
            </LI>
            <LI name="Node.JS">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>Building a system serving 7mio users</li>
                <li>
                  Building systems accessible to users with disabilities without
                  extra work
                </li>
                <li>Building server-side rendered web applications</li>
                <li>Building services in an event-driven architecture</li>
                <li>
                  Building backends for React-based SPAs taking advantage of
                  TypeScript to gauarantee a consistent contract between the two
                </li>
                <li>
                  Building public APIs compliant to OpenAPI specifications,
                  autogenerating TypeScript types and server request validation
                  based on api specifications
                </li>
              </ul>
            </LI>
            <LI name="React">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  Building advanced web applications supporting advanced
                  business features
                </li>
                <li>
                  Accomodate variations in web capability based on brand and
                  market
                </li>
                <li>
                  Building systems reacting to live updates from servers based
                  on web-socket messages
                </li>
                <li>
                  Building advanced UI interaction with complex drag-n-drop
                  utilitising multiple types of elements draggable to multiple
                  different types of targets
                </li>
              </ul>
            </LI>
            <LI name="C# / .NET">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>More than 15 years of experience developing apps in C#.</li>
                <li>
                  Building web applications using WebForms, ASP.NET MVC with
                  Razor pages, and APIs in ASP.NET Core serving React
                  applications
                </li>
              </ul>
            </LI>
            <LI name="Go">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  Building{" "}
                  <a href="https://github.com/gost-dom/browser">Gost-DOM</a>, a
                  headless browser written in Go to test Go web apps
                </li>
                <li>
                  Integrating the V8 JavaScript engine, and contributing to{" "}
                  <a href="https://github.com/tommie/v8go">v8go</a>
                </li>
                <li>
                  Building micro services in an event-driven architecture,
                  integrating with RabbitMQ
                </li>
              </ul>
            </LI>
            <LI name="OCaml">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  I'm the author of{" "}
                  <a href="https://github.com/stroiman/opam-speed">Speed</a>, a
                  unit test framework for OCaml.
                </li>
              </ul>
            </LI>
            <LI name="C / C++">
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  In addition to some rather old projects, integrating V8
                  requires a significant amount of C++ knowledge.
                </li>
              </ul>
            </LI>
          </ul>
          {/*
          <ul className="list-disc pl-4 marker:text-sky-400">
            <LI name="Web Application Development">
              <p>
                For most of my career, I've build web applications interacting
                in complex environments.
              </p>
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  Intimate knowledge of the semantics of the web, building
                  applications that work as users expect.
                </li>
                <li>
                  Understanding of accessibility standards, building
                  applications supporting users with disabilities, without any
                  necessary extra work.
                </li>
                <li>Lead developer on a node.js server serving 7mio users</li>
                <li>
                  Building both applications rendering HTML on the server, as
                  well as highly complex SPA UIs accomodating differences in
                  features based on brands and markets.
                </li>
              </ul>
            </LI>
            <LI name="JavaScript/ECMAScript and TypeScript">
              <p>Having </p>
            </LI>
            <LI name="Building a headless browser">
              <p>
                I am the author of{" "}
                <a href="https://github.com/gost-dom/browser">Gost-DOM</a> a
                headless browser written in Go designed to test web applications
                written in Go. This avoids the overhead of existing solutions
                and provides a solution more than fast enough for a TDD
                workflow.
              </p>
            </LI>
            <LI name="Embedding JavaScript using V8">
              <p>
                For Gost-DOM, I embedded a V8 engine using the existing{" "}
                <a href="https://github.com/tommie/v8go">v8go</a> package; but
                during the process I have contributed significant additions to
                this project, gaining intimate knowledge of embedding JavaScript
                engines, and V8 in particular.
              </p>
            </LI>
            <LI name="Microservices and Event-Driven Architectures">
              <p>
                I have extensive experience building micro services and
                event-driven monolights, gaining understanding of the advantages
                of decoupling vs. complexity through integrations. I have
                successfully applied event-driven mechanisms to:
              </p>
              <ul className="list-disc pl-4 marker:text-sky-400">
                <li>
                  Decoupling separate business rules; separating route planning
                  from invoicing, and CO<sub>2</sub> reporting.
                </li>
                <li>
                  Protect the system against outages in external systems,
                  allowing it to continue operating at reduced capabiligies
                </li>
              </ul>
            </LI>
            <LI name="C# and .NET">
              <p>I have more than 15 years of C# experience</p>
            </LI>
          </ul>
          */}
        </Box>
      </Section>
    </>
  );
}

const LI = (props: { name: string; children?: React.ReactNode }) => (
  <li>
    <span className="font-bold">{props.name}</span>
    {props.children}
  </li>
);

const Box = (props: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-slate-300 bg-slate-50 p-4 dark:bg-slate-950">
    {props.children}
  </div>
);
