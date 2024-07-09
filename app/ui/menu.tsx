"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Lang, useTranslation } from "../i18n";
import { Logo } from "./image-svgs";

async function Nav({ params }: { params: { lng: Lang } }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <Link href="#mentoring" className="hover:opacity-90">
        {t("nav.heroLinkText")}
      </Link>
      <Link href="#software-development" className="hover:opacity-90">
        Development
      </Link>
      <Link href="#" className="hover:opacity-90">
        rocket
      </Link>
      <Link href="#" className="hover:opacity-90">
        rocket
      </Link>
    </>
  );
}

export default function Menu({ params }: { params: { lng: string } }) {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    setShowMenu((x) => !x);
  };
  const menuClick = () => {
    setShowMenu(false);
  };
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="#hero-section" className="text-3xl font-medium">
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
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <Nav params={params} />
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={menuClick}
        className={clsx(
          "justify-content-center top-68 absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl",
          {
            hidden: !showMenu,
            flex: showMenu,
          },
        )}
      >
        <nav className="flex min-h-screen flex-col items-center py-8">
          <Link
            href="#hero"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Hero
          </Link>
          <Link
            href="#mentoring"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Mentor
          </Link>
          <Link
            href="#software-development"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Software development
          </Link>
          <Link
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </Link>
        </nav>
      </section>
    </header>
  );
}
