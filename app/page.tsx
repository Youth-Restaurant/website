import { Bell, CalendarClock, House, Map } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px]">
        <header className="bg-white min-h-[52px]">
          <div className="p-2 border-b-[1px]">
            <h1 className="font-bold whitespace-nowrap">청년식당</h1>
          </div>
        </header>
        <main className="min-h-screen">
          {/* <Swiper
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
        
          </Swiper> */}
        </main>
        <footer className="fixed bottom-0 border-t-[1px] min-w-[320px] max-w-[600px] w-full border-t-slate-100 pt-3">
          <ul className="flex gap-2 justify-around text-sm w-full">
            <li className="flex-col gap-2 items-center">
              <div className="flex justify-center">
                <House />
              </div>
              <span>소개</span>
            </li>
            <li className="flex-col gap-2 items-center">
              <div className="flex justify-center">
                <CalendarClock />
              </div>
              <span>
                예약
              </span>
            </li>
            <li className="flex-col gap-2 items-center">
              <div className="flex justify-center">
                <Bell />
              </div>
              <span>공지</span>
            </li>
            <li className="flex-col gap-2 items-center">
              <div className="flex justify-center">
                <Map />
              </div>
              <span>
                오시는 길
                </span>
              </li>
          </ul>
        </footer>
    </div>
  );
}
