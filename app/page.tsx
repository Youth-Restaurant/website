'use client';
import { Bell, CookingPot, House, Map, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const icons = [
  { name: '소개', icon: <House />, link: '/intro' },
  { name: '음식', icon: <CookingPot />, link: '/food' },
  { name: '공지', icon: <Bell />, link: '/notice' },
  { name: 'FAQ', icon: <MessageCircle />, link: '/faq' },
  { name: '오시는 길', icon: <Map />, link: 'map' },
];

export default function Home() {
  return (
    <div
      id='commonContainer'
      className='max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px]'
    >
      <header className='bg-white'>
        <div className='p-2 border-b-[1px]'>
          <h1 className='font-bold whitespace-nowrap'>청년식당</h1>
        </div>
      </header>
      <main className='min-h-screen'>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <SwiperSlide key={item}>
              <Image
                src={`/images/view_${item}.jpeg`}
                alt={`image-${item}`}
                width={600}
                height={400}
                objectFit='cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <nav className='min-w-[320px] max-w-[600px] fixed bottom-0 border-t-[1px] border-t-slate-100 pt-3 w-full'>
        <ul className='flex gap-2 justify-around text-xs w-full min-h-[52px]'>
          {icons.map((item) => (
            <li key={item.link}>
              <Link className='flex flex-col items-center' href={item.link}>
                <div className='flex justify-center'>{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
