import { FaSearch } from "react-icons/fa";
import Carousel from "@/Components/Utils/Carousel";

import { Typography } from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import { SwiperSlide } from "swiper/react";
import CardContent from "@/Components/Utils/Card";
import ContentTemplate from "../PagesComponent/ContentTemplate";

export default function HomeContent() {
  const images = [
    "https://via.placeholder.com/1024x528",
    "https://via.placeholder.com/1024x528",
    "https://via.placeholder.com/1024x528",
  ];

  //className => resources->css->app.css
  return (
    <ContentTemplate>
      <Carousel>
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              className="relative w-full rounded-b-md"
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      <section className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-y-3 md:justify-between mt-10 md:items-center">
          <Typography variant="h5" className="">
            Topup your game
          </Typography>
          <div className="flex justify-end lg:w-72">
            <Input label="Search game..." icon={<FaSearch />} />
          </div>
        </div>

        <div className="mt-10">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 md:gap-y-12 gap-x-3">
            <CardContent />
            <CardContent />
            <CardContent />
          </div>
        </div>
      </section>
    </ContentTemplate>
  );
}
