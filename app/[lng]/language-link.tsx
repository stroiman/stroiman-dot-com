"use client";

import { ReactNode } from "react";
import type { Lang } from "../i18n";
import Link from "next/link";

export default function LanguageLink({
  lng,
  children,
}: {
  lng: Lang;
  children: ReactNode;
}) {
  const onClick = (e: React.SyntheticEvent) => {
    const hash = window.location.hash;
    window.location.assign(`/${lng}${hash}`);
    e.preventDefault();
  };
  return (
    <Link href={`/${lng}`} onClick={onClick}>
      {children}
    </Link>
  );
}
