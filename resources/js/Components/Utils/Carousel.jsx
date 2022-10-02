import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

export default function Carousel({ children }) {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Lazy]}
            slidesPerView={1}
            loop={false}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            onSwiper={(swiper) => swiper}
            scrollbar={{ draggable: true }}
        >
            {/* Carousel Wrapper */}
            {children}
        </Swiper>
    );
}
