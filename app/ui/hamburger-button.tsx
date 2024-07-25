import clsx from "clsx";
import { MouseEventHandler } from "react";

export default function HamburgerButton(props: {
  showMenu?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { showMenu, onClick } = props;
  return (
    <button
      id="mobile-open"
      className={clsx(
        "relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden",
        {
          "[&>div::after]:translate-y-0 [&>div::after]:-rotate-45 [&>div::before]:translate-y-0 [&>div::before]:rotate-45 [&>div]:rotate-[360deg] [&>div]:bg-transparent":
            showMenu,
        },
      )}
      onClick={onClick}
      // &#9776;
    >
      <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-2.5 before:rounded before:bg-white before:transition-all before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-2.5 after:rounded after:bg-white after:transition-all after:content-['']"></div>
    </button>
  );
}
