import { ReactNode } from "react";
import { Programmer } from "../ui/image-svgs";
import { Heading } from "../ui";

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
        <Heading component="h2" className="mb-6 items-center text-center">
          {heading}
        </Heading>
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
        <Heading component="h1">
          Peter Strøiman
          <br />
          <span className="text-2xl sm:text-3xl">
            Software Development Expert
          </span>
        </Heading>
        <p className="text-center font-heading text-2xl font-normal sm:w-1/2 sm:text-4xl sm:font-light">
          {heading}
        </p>
        <p className="text-1xl mt-4 max-w-md text-center text-slate-700 dark:text-slate-400">
          {children}
        </p>
      </div>
    </section>
  );
}
