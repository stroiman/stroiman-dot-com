import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-4xl flex-grow px-4 py-6">
      {children}
    </main>
  );
}
