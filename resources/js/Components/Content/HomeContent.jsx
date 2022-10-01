import { FaSearch } from "react-icons/fa";
import Carousel from "@/Components/Utils/Carousel";

import {
  Typography,
} from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import { SwiperSlide } from "swiper/react";
import SidebarMenu from "../PagesComponent/SidebarMenu";
import Template from "../PagesComponent/Template"
import CardContent from "@/Components/Utils/Card"

export default function HomeContent() {
  const images = [
    "https://xinnstore.com/assets/img/banner//741491675566558.png",
    "https://xinnstore.com/assets/img/banner//741491675566558.png",
    "https://xinnstore.com/assets/img/banner//741491675566558.png",
  ];

  // const images = ["satu", "dua", "tiga"];

  //className => resources->css->app.css
  return (
    <div className="max7xl">
      {/* sidebar */}
      <SidebarMenu />
      {/* sidebar */}

      {/* content */}
      {/* dibagain sini udh semua isi content */} {/* OK !!! */}
      <Template>
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
            <Typography variant="h5" className="">Topup your game</Typography>
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
      </Template>
    </div>
  );
}
