import PageLayout from "@/app/ui/page-layout";

export default function Legal() {
  return (
    <PageLayout heading="Company Information">
      <p>
        I operate from a Danish registered company. Peter Strøiman ApS
        <span id="company-registration-no-desc">
          Danish company registration no.:
        </span>{" "}
        <span aria-describedby="company-registration-no-desc">32290671</span>
      </p>
    </PageLayout>
  );
}
