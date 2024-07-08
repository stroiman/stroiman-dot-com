"use client";

import { clsx } from "clsx";
import { useState } from "react";

function Nav() {
  return (
    <>
      <a href="#mentoring" className="hover:opacity-90">
        Mentoring
      </a>
      <a href="#software-development" className="hover:opacity-90">
        Development
      </a>
      <a href="#" className="hover:opacity-90">
        rocket
      </a>
      <a href="#" className="hover:opacity-90">
        rocket
      </a>
    </>
  );
}

export default function Menu() {
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
        <a href="#hero-section" className="text-3xl font-medium">
          stroiman
        </a>
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
            <Nav />
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={menuClick}
        className={clsx(
          "justify-content-center animate-open-menu top-68 absolute w-full origin-top flex-col bg-black text-5xl",
          {
            hidden: !showMenu,
            flex: showMenu,
          },
        )}
      >
        <nav className="flex min-h-screen flex-col items-center py-8">
          <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
            Hero
          </a>
          <a
            href="#mentoring"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Mentor
          </a>
          <a
            href="#software-development"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Software development
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
}
