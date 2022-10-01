import { FaHome, FaSearchDollar, FaSearch } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";

import CardSideBar from "@/Components/Utils/CardSideBar";
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

export default function HomeContent() {
    // const images = [
    //     "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg",
    //     "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg",
    //     "https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg",
    // ];

    const images = ["satu", "dua", "tiga"];

    return (
        <div className="container flex max-w-7xl mx-auto px-3 mt-5 ">
            {/* sidebar */}
            <div className="flex gap-3">
                <div className="hidden lg:block">
                    <CardSideBar title="Home" icon={<FaHome />} active={true} />
                    <CardSideBar
                        title="Price"
                        icon={<MdOutlinePriceChange />}
                    />
                    <CardSideBar
                        title="Check Order"
                        icon={<FaSearchDollar />}
                    />
                    <CardSideBar
                        title="About Store"
                        icon={<BsCreditCard2Front />}
                    />
                    <CardSideBar title="Other" icon={<TbQuestionMark />} />
                </div>

                <main className="max-w-5xl">
                    <Carousel>
                        {images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <span className="flex justify-center rounded-t-md py-2 bg-blue-500 text-white text-md md:text-xl font-semibold">
                                    {image}
                                </span>
                                <img
                                    src={image}
                                    style={{ height: "50vh" }}
                                    className="relative w-full rounded-b-md"
                                    alt={image}
                                />
                            </SwiperSlide>
                        ))}
                    </Carousel>
                    <div className="flex justify-between mt-16">
                        <Typography variant="h5">Topup your game</Typography>
                        <div className="flex justify-end w-72">
                            <Input label="Search game..." icon={<FaSearch />} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
