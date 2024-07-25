import { ReactNode, JSX } from "react";
import React from "react";
import { Heading } from ".";

const H1 = ({ children }: { children: ReactNode }) => <h1>{children}</h1>;

export default function PageLayout({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Heading component="h1" className="pb-4 text-center sm:text-left">
        {heading}
      </Heading>{" "}
      {children}
    </>
  );
}
