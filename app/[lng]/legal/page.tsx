import { LangParam, useTranslation } from "@/app/i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import PageLayout from "@/app/ui/page-layout";

export default async function Legal({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "legal-page");
  return (
    <PageLayout heading={t("headingText")}>
      <div className="flex flex-col gap-4">
        <p>{t("bodyText")}</p>
        <address>
          Peter Strøiman ApS
          <br />
          c/o Peter Strøiman
          <br />
          Stenbrudsvej 27
          <br />
          DK-3730 Nexø
          <br />
          <Trans
            t={t}
            i18nKey="regNo"
            tOptions={{ regNo: "DK 32290671" }}
            components={[
              <span id="company-registration-no-desc" />,
              <span aria-describedby="company-registration-no-desc" />,
            ]}
          />
        </address>
      </div>
    </PageLayout>
  );
}
