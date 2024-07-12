import { ReactNode } from "react";
import { Programmer } from "../ui/image-svgs";

export default function Section(props: {
  id?: string;
  heading: ReactNode;
  children?: ReactNode;
}) {
  const { id, heading, children } = props;
  return (
    <section
      id={id}
      className="widescreen:section-min-height my-12 flex scroll-mt-24 flex-col justify-center"
    >
      <div>
        <h2 className="font-heading mb-6 items-center text-center text-4xl font-normal text-slate-900 sm:text-5xl md:font-light dark:text-white">
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function HeroSection(props: {
  id: string;
  heading: ReactNode;
  children?: ReactNode;
}) {
  const { id, heading, children } = props;
  return (
    <section
      id={id}
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-24 flex-col-reverse items-center justify-center gap-8 sm:flex-row"
    >
      <div className="flex flex-col items-center gap-8 text-slate-900 dark:text-white">
        <h1 className="text-3xl sm:text-5xl">
          Peter Strøiman
          <br />
          Software Development Expert
        </h1>
        <p className="font-heading text-center text-2xl font-normal sm:w-1/2 sm:text-left sm:text-4xl md:font-light">
          {heading}
        </p>
        <p className="text-1xl mt-4 max-w-md text-center text-slate-700 dark:text-slate-400">
          {children}
        </p>
      </div>
    </section>
  );
}
