import type { Metadata } from "next";
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/yekan.ttf',
})
import "./globals.css";

console.log(myFont)

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
