"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Logo } from "./image-svgs";
import { Lang } from "../i18n";

export default function Menu({
  lng,
  switcher,
  children,
}: {
  lng: Lang;
  switcher: ReactNode;
  children?: ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    setShowMenu((x) => !x);
  };
  const menuClick = () => {
    setShowMenu(false);
  };
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <div className="mx-auto max-w-4xl px-4 py-2">
        <section className="flex items-center justify-between">
          <Link href={`/${lng}/#top`} className="text-3xl font-medium">
            <Logo className="mr-1 inline h-[1em]" />
            stroiman
          </Link>
          <div>
            <button
              id="mobile-open"
              className={clsx(
                "relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden",
                {
                  "[&>div::after]:translate-y-0 [&>div::after]:-rotate-45 [&>div::before]:translate-y-0 [&>div::before]:rotate-45 [&>div]:rotate-[720deg] [&>div]:bg-transparent":
                    showMenu,
                },
              )}
              onClick={onClick}
              // &#9776;
            >
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:content-['']"></div>
            </button>
            <nav
              className="hidden space-x-8 text-xl md:block"
              aria-label="main"
            >
              {children}
            </nav>
          </div>
        </section>
        <div className="flex justify-end">{switcher}</div>
      </div>
      <section
        id="mobile-menu"
        onClick={menuClick}
        className={clsx(
          "justify-content-center top-68 animate-open-menu absolute w-full origin-top flex-col bg-black text-5xl",
          {
            hidden: !showMenu,
            flex: showMenu,
          },
        )}
      >
        <nav className="py-16">
          <ul className="flex min-h-screen flex-col items-center gap-6 py-2">
            <li>
              <Link href="#top" className="w-full text-center hover:opacity-90">
                Hero
              </Link>
            </li>
            <li>
              <Link
                href="#mentoring"
                className="w-full text-center hover:opacity-90"
              >
                Mentor
              </Link>
            </li>
            <li>
              <Link
                href="#software-development"
                className="table-cell w-full text-center align-middle hover:opacity-90"
              >
                Software development
              </Link>
            </li>
            <li>
              <Link
                href="#footer"
                className="w-full text-center hover:opacity-90"
              >
                Legal
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
