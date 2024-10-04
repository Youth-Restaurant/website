"use client";
import "swiper/css";
import MainSlide from "@/components/MainSlide";
import MainFoodSlide from "@/components/MainFoodSlide";
import Link from "next/link";
import TimeCard from "@/components/TimeCard";

export default function Home() {
  return (
    <>
      <MainSlide />
      <div className="p-3">
        <h1 className="text-lg font-semibold">운영시간</h1>
        <div className="flex gap-3 mt-3">
          <TimeCard
            title="점심"
            time="11:30 - 14:00"
            bgColor="bg-emerald-500"
          />
          <div className="relative flex-1">
            <TimeCard title="예약" time="11:30 - 20:00" bgColor="bg-blue-400" />
            <span className="text-red-300 text-sm absolute">
              *당일 예약 불가
            </span>
          </div>
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
    </>
  );
}
