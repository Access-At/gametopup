import { Navigation, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Carousel({ images }) {
    return (
        <Swiper
            modules={[Navigation, EffectFade]}
            navigation={true}
            // spaceBetween={50}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            effect="fade"
        >
            {images.map((image, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img
                            className="object-fill w-full h-96"
                            src={image}
                            alt={`image slide ${i + 1}`}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
