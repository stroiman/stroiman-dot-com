import { ReactNode } from "react";

export default function PageLayout({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <h1 className="pb-4 text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
        {heading}
      </h1>
      {children}
    </>
  );
}
