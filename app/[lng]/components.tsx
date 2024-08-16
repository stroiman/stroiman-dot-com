import clsx from "clsx";

export const SectionDiv = (props: { className?: string }) => (
  <hr className={clsx("mx-auto w-1/2 border-current", props.className)} />
);
