import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

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
      <body className={`${pretendard.className} antialiased`}>
        <div
          id="commonContainer"
          className="max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px] box-content"
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Navbar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
