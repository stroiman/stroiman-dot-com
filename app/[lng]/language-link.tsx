"use client";

import { ReactNode } from "react";
import type { Lang } from "../i18n";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function LanguageLink({
  lng,
  children,
}: {
  lng: Lang;
  children: ReactNode;
}) {
  const onClick = (e: React.SyntheticEvent) => {
    const parts = window.location.pathname.split("/");
    parts[1] = lng;
    const hash = window.location.hash;
    window.location.assign(`${parts.join("/")}${hash}`);
    e.preventDefault();
  };
  return (
    <Link href={`/${lng}`} onClick={onClick}>
      {children}
    </Link>
  );
}
