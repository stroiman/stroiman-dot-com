"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Logo } from "./image-svgs";
import { Lang } from "../i18n";
import Links from "../[lng]/links";
import HamburgerButton from "./hamburger-button";

export default function Menu({
  lng,
  languageSwitcher,
  children,
  submenu,
  socialLinks,
  popup,
}: {
  lng: Lang;
  languageSwitcher: ReactNode;
  socialLinks: ReactNode;
  children?: ReactNode;
  submenu?: ReactNode;
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
    <header className="mask sticky top-0 z-10 bg-white bg-opacity-50 text-black backdrop-blur dark:bg-black dark:bg-opacity-20 dark:text-white">
      <div className="relative z-20 mx-auto px-4 py-2">
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
            >
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-2.5 before:rounded before:bg-white before:transition-all before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-2.5 after:rounded after:bg-white after:transition-all after:content-['']"></div>
            </button>
          </div>
          <nav className="hidden space-x-6 md:block">{children}</nav>
          <HamburgerButton onClick={onClick} showMenu={showMenu} />
        </section>
        <div className="flex flex-row">
          <div className="flex-grow space-x-6">{submenu}</div>
          <div className="flex justify-end">{languageSwitcher}</div>
        </div>
      </div>
      <section
        id="mobile-menu"
        onClick={menuClick}
        className={clsx(
          "justify-content-center absolute top-0 z-0 min-h-screen w-full origin-top animate-open-menu flex-col bg-black pt-20 text-5xl",
          {
            hidden: !showMenu,
            flex: showMenu,
          },
        )}
      >
        {popup}
      </section>
      <div className="h-8" />
    </header>
  );
}
