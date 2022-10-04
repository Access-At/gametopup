import {
    FaArrowLeft,
    FaHome,
    FaSearchDollar,
    FaTimes,
    FaUserCog,
} from "react-icons/fa";
import { MdOutlinePriceChange, MdSpaceDashboard } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function NavbarBottom({ Auth }) {
    const { url } = usePage();

    const urlList = ["/", "/price", "/check-invoice", "/about-store", "/other"];
    const urlListDashboard = [
        "/dashboard/user",
        "/dashboard/user/transaction",
        "/dashboard/user/settings",
    ];

    return (
        <div className="bg-secondry-600 fixed w-full bottom-0 p-2 block lg:hidden">
            {Auth.user !== null && urlList.includes(url) && (
                <div className="flex justify-between text-2xl md:mx-12 mx-4">
                    <Link
                        href={route("home")}
                        className={
                            url === "/"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <FaHome className="font2xl" />
                        Home
                    </Link>
                    <Link
                        href={route("price")}
                        className={
                            url === "/price"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <MdOutlinePriceChange className="font2xl" />
                        Price
                    </Link>
                    <Link
                        href={route("invoice")}
                        className={
                            url === "/check-invoice"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <FaSearchDollar className="font2xl" />
                        Check Order
                    </Link>
                    <Link
                        href={route("about")}
                        className={
                            url === "/about-store"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <BsCreditCard2Front className="font2xl" />
                        About Store
                    </Link>
                    <Link
                        href={route("other")}
                        className={
                            url === "/other"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <TbQuestionMark className="font2xl" />
                        Other
                    </Link>
                </div>
            )}
            {Auth.user !== null && urlListDashboard.includes(url) && (
                <div className="flex justify-between text-2xl md:mx-12 mx-4">
                    <Link
                        href={route("users.dashboard")}
                        className={
                            url === "/dashboard/user"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <MdSpaceDashboard className="font2xl" />
                        Dashboard
                    </Link>
                    <Link
                        href={route("users.transaction")}
                        className={
                            url === "/dashboard/user/transaction"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <MdOutlinePriceChange className="font2xl" />
                        Transaction
                    </Link>
                    <Link
                        href={route("users.settings")}
                        className={
                            url === "/dashboard/user/settings"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <FaUserCog className="font2xl" />
                        Settings
                    </Link>
                    <Link
                        href={route("home")}
                        className={
                            url === "/"
                                ? "navbarMenuBottomActive"
                                : "navbarMenuBottomNonActive"
                        }
                    >
                        <FaArrowLeft className="font2xl" />
                        Back Home
                    </Link>
                </div>
            )}
        </div>
    );
}
