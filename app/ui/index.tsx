import clsx from "clsx";
import { ReactNode } from "react";

type HeadingProps = { className: string; children: ReactNode };

const components = {
  h1: function H1({ children, className }: HeadingProps) {
    return <h1 className={className}>{children}</h1>;
  },
  h2: function H1({ children, className }: HeadingProps) {
    return <h2 className={className}>{children}</h2>;
  },
  h3: function H1({ children, className }: HeadingProps) {
    return <h3 className={className}>{children}</h3>;
  },
};

export function Heading({
  component,
  className,
  children,
}: {
  component: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  const Component = components[component];
  return (
    <Component
      className={clsx(
        "text-4xl font-normal sm:text-5xl md:font-light",
        // text-slate-900 dark:text-white
        className,
      )}
    >
      {children}
    </Component>
  );
}
