import { ReactNode } from "react";

export default function Para({ children }: { children: ReactNode }) {
  return <p className="text-body">{children}</p>;
}
