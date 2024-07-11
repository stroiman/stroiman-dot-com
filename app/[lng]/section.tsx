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
      className="widescreen:section-min-height my-12 flex scroll-mt-20 flex-col justify-center"
    >
      <div>
        <h2 className="mb-6 items-center text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
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
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-20 flex-col-reverse items-center justify-center gap-8 sm:flex-row"
    >
      <div className="sm:w-1/2">
        <h2 className="text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
          {heading}
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400">
          {children}
        </p>
      </div>
      <Programmer
        className="text-slate-700 sm:w-1/2"
        role="img"
        title="illustration of a programmer wearing headphones"
      />
    </section>
  );
}
