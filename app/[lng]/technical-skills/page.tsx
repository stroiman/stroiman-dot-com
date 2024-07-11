import Menu from "@/app/ui/menu";
import { LangParam } from "../../i18n";
import Main from "@/app/ui/main";

export default function ({ params }: { params: LangParam }) {
  const { lng } = params;
  return (
    <>
      <Menu lng={lng} />
      <Main>
        <h1 className="text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
          Tekniske Kompetencer
        </h1>
      </Main>
    </>
  );
}
