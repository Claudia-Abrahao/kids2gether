'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const CarouselHero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {/* Slide 1 – Comunidade */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/comunidade.jpg"
              alt="Comunidade Kids2gether"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Junte-se à Comunidade Kids2gether
              </h2>
              <p className="text-white text-lg mb-6">
                Aqui cada viagem vira memória real. Feita pela Nathália e sua família!
              </p>
              <a
                href="/comunidade"
                className="bg-[#f0b922] text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition"
              >
                Fazer Parte da Comunidade
              </a>
            </div>
          </div>
        </SwiperSlide>

        
       {/* Slide 2 – Parceria com Stella Barros */}
<SwiperSlide>
  <div className="relative w-full h-full">
    <Image
      src="/parceriakids.jpg"
      alt="Parceria Kids2gether e Stella Barros"
      fill
      className="object-cover"
    />
  </div>
</SwiperSlide>

        {/* Slide 3 – Kids in Rio */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/kidsinrio.jpg"
              alt="Kids in Rio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-lg mb-6">
  Roteiros incríveis, experiências kids friendly e memórias para toda a família.
</p>

              <a
                href="/kidsinrio"
                className="bg-[#f0b922] text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition"
              >
                Explorar Kids in Rio
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarouselHero;

