import { LangParam, useTranslation } from "@/app/i18n";
import PageLayout from "@/app/ui/page-layout";

export default async function Legal({ params }: { params: LangParam }) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "legal-page");
  return (
    <PageLayout heading={t("headingText")}>
      <p>
        I operate from a Danish registered company. Peter Strøiman ApS
        <span id="company-registration-no-desc">
          Danish company registration no.:
        </span>{" "}
        <span aria-describedby="company-registration-no-desc">32290671</span>
      </p>
      <address>
        Peter Strøiman ApS
        <br />
        c/o Peter Strøiman
        <br />
        Stenbrudsvej 27
        <br />
        DK-3730 Nexø
        <br />
        {t("regNo", { regNo: "DK 32290671" })}
      </address>
    </PageLayout>
  );
}
