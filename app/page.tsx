import { Bell, CookingPot, House, Map, MessageCircle } from "lucide-react";
import Link from "next/link";

const icons = [
  { name: "소개", icon: <House />, link: "/intro" },
  { name: "음식", icon: <CookingPot />, link: "/food" },
  { name: "공지", icon: <Bell />, link: "/notice" },
  { name: "FAQ", icon: <MessageCircle />, link: "/faq" },
  { name: "오시는 길", icon: <Map />, link: "map" },
];

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
        <nav>
          <ul className="flex gap-2 justify-around text-xs w-full">
            {icons.map((item) => (
              <li key={item.link}>
                <Link className="flex flex-col items-center" href={item.link}>
                  <div className="flex justify-center">{item.icon}</div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
