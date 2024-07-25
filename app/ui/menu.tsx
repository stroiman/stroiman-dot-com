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
  switcher,
  children,
  submenu,
  socialLinks,
  popup,
}: {
  lng: Lang;
  switcher: ReactNode;
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
    <header className="sticky top-0 text-white">
      <div className="relative z-20 bg-primary-800">
        <div className="mx-auto max-w-4xl px-4 py-2">
          <section className="flex items-center justify-between">
            <Link href={`/${lng}/#top`} className="text-2xl font-medium">
              <Logo className="mr-1 inline h-[1em]" title="Logo" />
              stroiman.com
            </Link>
            <nav className="hidden space-x-6 md:block">{children}</nav>
            <HamburgerButton onClick={onClick} showMenu={showMenu} />
          </section>
          <div className="flex flex-row">
            <div className="flex-grow space-x-6">{submenu}</div>
            <div className="flex justify-end">{switcher}</div>
          </div>
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
    </header>
  );
}
