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

export default function HomeContent() {
    return (
        <>
            <div className="container flex justify-between max-w-7xl mx-auto items-center px-3 mt-5 ">
                <div className="flex gap-3">
                    <div>
                        <CardSideBar
                            title="Home"
                            icon={<FaHome />}
                            active={true}
                        />
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
                    <div className="mt-3 bg-green-500">
                        <div className="max-w-[67.5rem]">
                            <Carousel
                                images={[
                                    "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg",
                                    "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg",
                                    "https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg",
                                ]}
                            />
                        </div>
                        <div className="flex justify-between mt-16">
                            <Typography variant="h5">
                                Topup your game
                            </Typography>
                            <div className="flex justify-end w-72">
                                <Input
                                    label="Search game..."
                                    icon={<FaSearch />}
                                />
                            </div>
                        </div>

                        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                            <Card className="w-72 ">
                                <CardHeader
                                    color="blue"
                                    className="relative h-56"
                                >
                                    <img
                                        src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=3840&q=75"
                                        alt="img-blur-shadow"
                                        className="h-full w-full"
                                    />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h5" className="mb-2">
                                        Cozy 5 Stars Apartment
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach
                                        and bus stop just 2 min by walk and near
                                        to "Naviglio" where you can enjoy the
                                        main night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter
                                    divider
                                    className="flex items-center justify-between py-3"
                                >
                                    <Typography variant="small">
                                        $899/night
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex gap-1"
                                    >
                                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                        Barcelona, Spain
                                    </Typography>
                                </CardFooter>
                            </Card>
                            <Card className="w-72">
                                <CardHeader
                                    color="blue"
                                    className="relative h-56"
                                >
                                    <img
                                        src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=3840&q=75"
                                        alt="img-blur-shadow"
                                        className="h-full w-full"
                                    />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h5" className="mb-2">
                                        Cozy 5 Stars Apartment
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach
                                        and bus stop just 2 min by walk and near
                                        to "Naviglio" where you can enjoy the
                                        main night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter
                                    divider
                                    className="flex items-center justify-between py-3"
                                >
                                    <Typography variant="small">
                                        $899/night
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex gap-1"
                                    >
                                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                        Barcelona, Spain
                                    </Typography>
                                </CardFooter>
                            </Card>
                            <Card className="w-72">
                                <CardHeader
                                    color="blue"
                                    className="relative h-56"
                                >
                                    <img
                                        src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=3840&q=75"
                                        alt="img-blur-shadow"
                                        className="h-full w-full"
                                    />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h5" className="mb-2">
                                        Cozy 5 Stars Apartment
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach
                                        and bus stop just 2 min by walk and near
                                        to "Naviglio" where you can enjoy the
                                        main night life in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter
                                    divider
                                    className="flex items-center justify-between py-3"
                                >
                                    <Typography variant="small">
                                        $899/night
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex gap-1"
                                    >
                                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                        Barcelona, Spain
                                    </Typography>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
