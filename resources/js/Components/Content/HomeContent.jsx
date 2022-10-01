import { FaSearch } from "react-icons/fa";
import Carousel from "@/Components/Utils/Carousel";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import { SwiperSlide } from "swiper/react";
import SidebarMenu from "../PagesComponent/SidebarMenu";

export default function HomeContent() {
    const images = [
        "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg",
        "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg",
        "https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg",
    ];

    // const images = ["satu", "dua", "tiga"];

    //className => resources->css->app.css
    return (
        <div className="max7xl">
            {/* sidebar */}
            <SidebarMenu/>
            {/* sidebar */}

            {/* content */}
            {/* dibagain sini udh semua isi content */}
            <main className="lg:w-10/12 w-full">
                <Carousel>
                    {images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={image}
                                style={{ height: "50vh" }}
                                className="relative w-full rounded-b-md"
                                alt={image}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>

                <section className="flex flex-col">
                    <div className="flex justify-between mt-10 items-center">
                        <Typography variant="h5">Topup your game</Typography>
                        <div className="flex justify-end lg:w-72">
                            <Input label="Search game..." icon={<FaSearch />} />
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="card"></div> 
                            <div className="card"></div> 
                            <div className="card"></div> 
                            <div className="card"></div> 
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    );
}
