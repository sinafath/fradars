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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
