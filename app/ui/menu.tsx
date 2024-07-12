"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Logo } from "./image-svgs";
import { Lang } from "../i18n";
import Links from "../[lng]/links";

export default function Menu({
  lng,
  switcher,
  children,
  popup,
}: {
  lng: Lang;
  switcher: ReactNode;
  children?: ReactNode;
  popup?: ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    setShowMenu((x) => !x);
  };
  const menuClick = () => {
    setShowMenu(false);
  };
  return (
    <header className="bg-primary-800 sticky top-0 z-10 text-white">
      <div className="bg-primary-800 relative z-20 mx-auto max-w-4xl px-4 py-2">
        <section className="flex items-center justify-between">
          <Link href={`/${lng}/#top`} className="text-2xl font-medium">
            <Logo className="mr-1 inline h-[1em]" title="Logo" />
            stroiman.com
          </Link>
          <div>
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
            <nav className="hidden space-x-6 md:block">{children}</nav>
          </div>
        </section>
        <div className="flex justify-end">{switcher}</div>
      </div>
      <section
        id="mobile-menu"
        onClick={menuClick}
        className={clsx(
          "justify-content-center animate-open-menu absolute top-0 z-0 min-h-screen w-full origin-top flex-col bg-black pt-20 text-5xl",
          {
            hidden: !showMenu,
            flex: showMenu,
          },
        )}
      >
        {popup}
      </section>
    </header>
  );
}
