import clsx from "clsx";

export const SectionDiv = (props: { className?: string }) => (
  <hr className={clsx("mx-auto w-1/2 border-current", props.className)} />
);

export const ExternalLink = ({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="cursor-pointer text-fuchsia-800 dark:text-fuchsia-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
