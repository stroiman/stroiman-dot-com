import { ReactNode } from "react";

export default function Para({ children }: { children: ReactNode }) {
  return <p className="text-body-800 dark:text-body-300">{children}</p>;
}
