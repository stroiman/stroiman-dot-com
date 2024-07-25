import PageLayout from "@/app/ui/page-layout";
import { LangParam, useTranslation } from "../../i18n";
import Main from "@/app/ui/main";
import { ReactNode } from "react";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-heading text-3xl md:text-4xl">{children}</h2>;
}

export default async function SkillsPage({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "skills-page");

  return (
    <PageLayout heading={t("headingText")}>
      <div className="flex flex-col gap-4">
        <H2>{t("tddSection.headingText")}</H2>
        <p>{t("tddSection.body")}</p>
        <p>{t("tddSection.body2")}</p>
        <p>{t("tddSection.body3")}</p>
        <H2>{t("langaugesSection.headingText")}</H2>
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
