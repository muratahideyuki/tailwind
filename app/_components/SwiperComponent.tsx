"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // フェードエフェクトのスタイル
import { Autoplay, EffectFade } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000, // スライドが切り替わるまでの遅延（ミリ秒）
        disableOnInteraction: false,
      }}
      effect="fade" // フェードエフェクトを使用
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
      speed={3000} // フェードのトランジション時間（ミリ秒）
    >
      <SwiperSlide>
        <div className="rounded-2xl  flex justify-center items-center py-10 md:py-60 xl:py-80 mb-10 z-1 min-h-[200px] md:min-h-[500px] ">
          <Image
            src="/p01.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl  flex justify-center items-center py-10 md:py-60 xl:py-80 mb-10 z-1 min-h-[200px] md:min-h-[500px] ">
          <Image
            src="/p02.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl flex justify-center items-center py-10 md:py-60 xl:py-80 mb-10 z-1 min-h-[200px] md:min-h-[500px] ">
          <Image
            src="/p03.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
