"use client";
import "swiper/css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainSlide from "@/components/MainSlide";
import Header from "@/components/Header";
import MainFoodSlide from "@/components/MainFoodSlide";
import Link from "next/link";
import { TailwindBgColor } from "@/tyoes/color";

export default function Home() {
  return (
    <div
      id="commonContainer"
      className="max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px] box-content"
    >
      <Header />
      <main className="min-h-screen">
        <MainSlide />
        <div className="p-3">
          <h1 className="text-lg font-semibold">운영시간</h1>
          <div className="flex gap-3 mt-3">
            <TimeCard
              title="점심"
              time="11:30 - 14:00"
              bgColor="bg-emerald-500"
            />
            <TimeCard title="예약" time="11:30 - 20:00" bgColor="bg-blue-400" />
          </div>
        </div>
        <div className="p-5 pb-0">
          <Link href="/food">
            <span className="font-semibold text-lg">
              음식 메뉴 확인하러 가기 {">"}
            </span>
          </Link>
        </div>
        <MainFoodSlide />
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

type TimeCardProps = {
  title: string;
  time: string;
  bgColor: TailwindBgColor;
};
function TimeCard({ title, time, bgColor }: TimeCardProps) {
  return (
    <div className="flex rounded-sm shadow flex-1">
      <div className="bg-white px-3 py-5">{title}</div>
      <div
        className={`${bgColor} text-white flex-1 font-semibold flex items-center p-5`}
      >
        {time}
      </div>
    </div>
  );
}
