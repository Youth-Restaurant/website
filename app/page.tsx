'use client';
import 'swiper/css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainSlide from '@/components/MainSlide';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div
      id='commonContainer'
      className='max-w-[600px] my-0 mx-auto border-x-[1px] min-w-[320px] box-content'
    >
      <Header />
      <main className='min-h-screen'>
        <MainSlide />
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}
