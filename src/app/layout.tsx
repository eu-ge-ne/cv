import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import cls from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eugene Pobochny",
  description: "Eugene Pobochny's CV",
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cls(
          inter.className,
          "container",
          "mx-auto",
          "max-w-prose",
          "bg-slate-950"
        )}
      >
        <div className={cls("prose", "max-w-none", "m-4", "md:mx-0")}>
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-0XK3TKNJMZ" />
    </html>
  );
}
