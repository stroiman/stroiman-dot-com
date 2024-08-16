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
    <>
      <header className="mask sticky top-0 z-10 bg-white bg-opacity-50 text-black backdrop-blur dark:bg-black dark:bg-opacity-20 dark:text-white">
        <div className="relative z-20 mx-auto px-4 py-2">
          <section className="flex items-center justify-between">
            <Link href={`/${lng}/#top`} className="text-2xl font-medium">
              <Logo className="mr-1 inline h-[1em]" title="Logo" />
              stroiman.com
            </Link>
            <nav className="hidden space-x-6 md:block">{children}</nav>
            <HamburgerButton onClick={onClick} showMenu={showMenu} />
          </section>
          <div className="flex flex-row">
            <div className="flex-grow">{submenu}</div>
            <div className="flex justify-end">{languageSwitcher}</div>
          </div>
        </div>
        <div className="h-8" />
      </header>
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
    </>
  );
}
