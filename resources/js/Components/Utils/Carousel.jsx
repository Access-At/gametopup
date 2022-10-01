import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ children }) {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination
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
