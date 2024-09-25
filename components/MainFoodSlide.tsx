import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainFoodSlide() {
  const foodImages = [
    '기본 도시락',
    '프리미엄 도시락',
    '무왕 밥상',
    '사골우거지탕',
    '서동밥상',
    '수육정식',
    '왕의비빔밥',
    '집밥',
    '출장 뷔페',
  ];
  const prices = [
    '10,000',
    '15,000',
    '20,000',
    '25,000',
    '30,000',
    '35,000',
    '40,000',
    '45,000',
    '50,000',
  ];

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className='mySwiper'
      style={{
        paddingLeft: 50,
        paddingBottom: 50,
      }}
    >
      {foodImages.map((item, index) => (
        <SwiperSlide key={item + index} style={{ width: 300, height: 400 }}>
          <div className='rounded-lg relative p-3 h-80 shadow-2xl overflow-hidden'>
            <div className='relative h-64 overflow-hidden'>
              <Image
                src={`/images/food/${index}.png`}
                alt={`image-${item}`}
                width={600}
                height={100}
                priority
              />
            </div>
            <div className='flex gap-3'>
              <span className='font-semibold'>{item}</span>
              <div>
                <span className='text-red-500'>{prices[index]}</span>
                <span>원</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
