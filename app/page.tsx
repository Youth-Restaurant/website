'use client';
import 'swiper/css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainSlide from '@/components/MainSlide';
import Header from '@/components/Header';
import MainFoodSlide from '@/components/MainFoodSlide';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      id='commonContainer'
      className='max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px] box-content'
    >
      <Header />
      <main className='min-h-screen'>
        <MainSlide />
        <div className='p-5 pb-0'>
          <Link href='/food'>
            <span className='font-semibold text-lg'>
              음식 메뉴 확인하러 가기 {'>'}
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
