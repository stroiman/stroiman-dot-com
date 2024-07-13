import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";
import { languages } from "../i18n/settings";
import { Lang } from "../i18n";

const inter = Inter({ subsets: ["latin"] });
const sourceSefif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--source-serif",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Peter Strøiman - Freelance Software Developer",
  description: "Freelance software udvikler med mere end 25 års erfaring",
  openGraph: {
    title: "Peter Strøiman",
    description: "Freelance Software Udvikler",
    url: "https://stroiman.com/da",
    siteName: "stroiman.com",
    locale: "da-DK",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    //shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    //other: [
    //  {
    //    rel: "apple-touch-icon-precomposed",
    //    url: "/apple-touch-icon-precomposed.png",
    //  },
    //],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lng: Lang };
}>) {
  const { lng } = params;
  return (
    <html lang={lng} dir={dir(lng)} className="sm:scroll-smooth">
      <head>
        <title>Peter Strøiman - Freelance Software Developer</title>
      </head>
      <body
        className={clsx(
          inter.className,
          sourceSefif.className,

          "min-h-screen bg-slate-50 font-light dark:bg-black dark:text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
