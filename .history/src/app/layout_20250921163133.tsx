import type { Metadata } from "next";
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
})

import "./globals.css";


export const metadata: Metadata = {
  title: "Fradars",
  description: "tutoring website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={myFont.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
