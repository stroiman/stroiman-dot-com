import { clsx } from "clsx";

export default function SvgImageContainer({
  component,
  className,
}: {
  component: React.JSXElementConstructor<{ className: string }>;
  className?: string;
}) {
  const Component = component;
  return (
    <Component
      className={clsx(
        "rounded-xl border-2 border-current bg-gradient-radial dark:border-gray-600 dark:from-zinc-500 dark:text-black",
        className,
      )}
    />
  );
}
