import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: "청년식당",
  description: "청년식당 예약 및 소개 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
