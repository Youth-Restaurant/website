import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainSlide() {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {Array.from({ length: 3 }).map((v, i) => (
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
  );
}
