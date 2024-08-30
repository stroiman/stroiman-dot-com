import { LangParam, useTranslation } from "@/app/i18n";
import PageLayout from "@/app/ui/page-layout";
import { Trans } from "react-i18next/TransWithoutContext";
import { H2, H3 } from "../technical-skills/components";
import { ReactNode } from "react";

const P = ({ children }: { children: ReactNode }) => {
  return <p className="py-2">{children}</p>;
};

const ExternalLink = ({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="text-teal-700 dark:text-teal-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default async function OpenSourcePage({
  params,
}: {
  params: LangParam;
}) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "open-source-page");
  return (
    <PageLayout heading={t("headingText")}>
      <P>{t("paragraph1")}</P>
      <P>{t("paragraph2")}</P>
      <P>{t("paragraph3")}</P>
      <H2>{t("obsidianPlugins.headingText")}</H2>
      <P>
        <Trans
          t={t}
          i18nKey="obsidianPlugins.paragraph1"
          components={[<ExternalLink href="https://obsidian.md" />]}
        />
        <P>{t("obsidianPlugins.paragraph2")}</P>
        <P>{t("obsidianPlugins.paragraph3")}</P>
      </P>

      <ul className="list-disc ps-4">
        <li>
          <H3 className="mb-2 mt-3 inline">
            <ExternalLink href="https://github.com/stroiman/obsidian-title-sync">
              {t("obsidianPlugins.titleSync.headingText")}
            </ExternalLink>
          </H3>
          <P>{t("obsidianPlugins.titleSync.paragraph1")}</P>
          <P>{t("obsidianPlugins.titleSync.paragraph2")}</P>
        </li>
        <li>
          <H3 className="mb-2 mt-3">
            <ExternalLink href="https://github.com/stroiman/obsidian-dev-publish">
              {t("obsidianPlugins.devPublish.headingText")}
            </ExternalLink>
          </H3>
          <P>{t("obsidianPlugins.devPublish.paragraph1")}</P>
          <P>
            <Trans
              t={t}
              i18nKey="obsidianPlugins.titleSync.paragraph2"
              components={[
                <em />,
                <ExternalLink href="https://dev.to/stroiman/writing-an-obsidian-plugin-driven-by-tests-1b35" />,
              ]}
            />
          </P>
        </li>
        <li>
          <H3>
            <ExternalLink href="https://github.com/stroiman/obsidian-frontmatter-smith">
              {t("obsidianPlugins.frontmatterSmith.headingText")}
            </ExternalLink>
          </H3>
          <P>{t("obsidianPlugins.frontmatterSmith.paragraph1")}</P>
        </li>
        <li>
          <H3>
            <ExternalLink href="https://github.com/stroiman/obsidian-sample-plugin-with-tests">
              {t("obsidianPlugins.templateWithTests.headingText")}
            </ExternalLink>
          </H3>
          <P>
            <Trans
              t={t}
              i18nKey="obsidianPlugins.templateWithTests.paragraph1"
              components={[
                <ExternalLink href="https://github.com/obsidianmd/obsidian-sample-plugin" />,
              ]}
            />
          </P>
        </li>
      </ul>

      <H2>
        <ExternalLink href="https://github.com/stroiman/opam-speed">
          {t("speed.headingText")}
        </ExternalLink>
      </H2>
      <P>
        <Trans t={t} i18nKey="speed.paragraph1" components={[<em />]} />
      </P>
      <P>
        <Trans
          t={t}
          i18nKey="speed.paragraph2"
          components={[
            <ExternalLink href="https://medium.com/@stroiman/stop-writing-unit-tests-932ce499e9e2" />,
          ]}
        />
      </P>
      <P>
        <Trans
          t={t}
          i18nKey="speed.paragraph3"
          components={[
            <ExternalLink href="https://ocaml.org/manual/5.2/gadts-tutorial.html" />,
            <ExternalLink href="https://ocaml.org/manual/5.2/gadts-tutorial.html" />,
            <ExternalLink href="https://ocaml.org/docs/metaprogramming" />,
          ]}
        />
      </P>
    </PageLayout>
  );
}
