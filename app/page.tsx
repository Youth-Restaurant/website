'use client';
import { Bell, CookingPot, House, Map, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const icons = [
  { name: '소개', icon: <House />, link: '/intro' },
  { name: '음식', icon: <CookingPot />, link: '/food' },
  { name: '공지', icon: <Bell />, link: '/notice' },
  { name: 'FAQ', icon: <MessageCircle />, link: '/faq' },
  { name: '오시는 길', icon: <Map />, link: 'map' },
];

const imagesCount = 3;

export default function Home() {
  return (
    <div
      id='commonContainer'
      className='max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px] box-content'
    >
      <header className='bg-white'>
        <div className='p-2 border-b-[1px] flex items-center'>
          <Image src='/images/logo.png' alt='logo' width={100} height={100} />
          <h1 className='font-bold whitespace-nowrap'>
            {process.env.NEXT_PUBLIC_BUSINESS_NAME}
          </h1>
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
          {Array.from({ length: imagesCount }).map((v, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/${process.env.NEXT_PUBLIC_IMAGE_PATH}/main_slide_${
                  i + 1
                }.png`}
                alt={`image-${0}`}
                width={600}
                height={400}
                priority
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <nav className='min-w-[320px] max-w-[600px] fixed bottom-0 border-t-[1px] bg-white border-t-slate-100 pt-3 w-full'>
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
      <footer className='pb-32 pt-4 bg-neutral-100'>
        <div className='px-3'>
          <h1 className='font-bold'>사업자 정보</h1>
          <p className='text-sm pb-3'>
            {process.env.NEXT_PUBLIC_BUSINESS_NAME} | 대표자 :{' '}
            {process.env.NEXT_PUBLIC_OWNER} | 주소 :{' '}
            {process.env.NEXT_PUBLIC_ADDRESS} | 전화 :{' '}
            {process.env.NEXT_PUBLIC_PHONE} | 사업자등록번호 :{' '}
            {process.env.NEXT_PUBLIC_BUSINESS_NUMBER}
          </p>
          <p className='text-sm'>
            ©2024 {process.env.NEXT_PUBLIC_BUSINESS_NAME} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
