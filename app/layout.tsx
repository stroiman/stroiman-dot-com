import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stroiman.com"),
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
