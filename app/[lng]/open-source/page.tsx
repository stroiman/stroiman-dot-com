import { LangParam, useTranslation } from "@/app/i18n";
import PageLayout from "@/app/ui/page-layout";
import { Trans } from "react-i18next/TransWithoutContext";
import { H2, H3, SkillSection } from "../technical-skills/components";
import { ReactNode } from "react";
import { ExternalLink } from "../components";

const P = ({ children }: { children: ReactNode }) => {
  return <p className="py-2">{children}</p>;
};

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
      <div className="flex flex-col gap-4">
        <SkillSection heading={t("obsidianPlugins.headingText")}>
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
              <P>
                <Trans
                  t={t}
                  i18nKey="obsidianPlugins.devPublish.paragraph1"
                  components={[<ExternalLink href="https://dev.to" />]}
                />
              </P>
              <P>
                <Trans
                  t={t}
                  i18nKey="obsidianPlugins.devPublish.paragraph2"
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
        </SkillSection>
        <SkillSection
          heading={
            <ExternalLink href="https://github.com/stroiman/opam-speed">
              {t("speed.headingText")}
            </ExternalLink>
          }
        >
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
        </SkillSection>
        <SkillSection
          heading={
            <ExternalLink href="https://github.com/stroiman/stroiman-dot-com">
              {t("stroimanDotCom.headingText")}
            </ExternalLink>
          }
        >
          <P>
            <Trans t={t} i18nKey="stroimanDotCom.paragraph1" />
          </P>
        </SkillSection>
      </div>
    </PageLayout>
  );
}
