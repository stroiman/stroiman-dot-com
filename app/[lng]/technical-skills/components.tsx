import clsx from "clsx";
import { ReactNode } from "react";
import JavaScriptLogo from "./js-logo";

export function A(props: any) {
  return (
    <a
      {...props}
      className={clsx("text-em dark:text-em-dark", props.className)}
    />
  );
}
export function H2({
  children,
  id,
  className,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className={clsx("font-heading text-3xl md:text-4xl", className)}
    >
      {children}
    </h2>
  );
}

export function SkillSection({
  heading,
  headingId,
  children,
  Logo,
}: {
  heading: string;
  headingId?: string;
  children: ReactNode;
  Logo?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <section className="rounded-md border border-current bg-white p-4 dark:bg-black">
      <h2
        id={headingId}
        className="mb-4 flex scroll-mt-24 border-b font-heading text-2xl md:text-3xl"
      >
        {Logo && (
          <span aria-hidden className="mr-3">
            <Logo className="w-[1em]" />
          </span>
        )}
        <span>{heading}</span>
      </h2>

      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
