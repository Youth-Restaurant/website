import { Bell, CalendarClock, House, Map } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <footer className="absolute bottom-0 w-full border-t-[1px] border-t-slate-100 pt-3">
          <ul className="flex gap-2 justify-around">
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
    </>
  );
}
