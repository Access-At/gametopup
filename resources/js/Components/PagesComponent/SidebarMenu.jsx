import CardSideBar from "@/Components/Utils/CardSideBar";
import { FaArrowLeft, FaHome, FaSearchDollar, FaUserCog } from "react-icons/fa";
import { MdOutlinePriceChange, MdSpaceDashboard } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { usePage } from "@inertiajs/inertia-react";

export default function SidebarMenu({ Auth }) {
    const { url } = usePage();

    const urlList = ["/", "/price", "/check-invoice", "/about-store", "/other"];
    const urlListDashboard = [
        "/dashboard/user",
        "/dashboard/user/transaction",
        "/dashboard/user/settings",
    ];

    return (
        <>
            <div className="lg:w-2/12 lg:block hidden">
                {Auth.user !== null && urlList.includes(url) && (
                    <>
                        <CardSideBar
                            title="Home"
                            icon={<FaHome />}
                            active={url === "/"}
                            links={route("home")}
                        />
                        <CardSideBar
                            title="Price"
                            icon={<MdOutlinePriceChange />}
                            active={url === "/price"}
                            links={route("price")}
                        />
                        <CardSideBar
                            title="Check Order"
                            icon={<FaSearchDollar />}
                            active={url === "/check-invoice"}
                            links={route("invoice")}
                        />
                        <CardSideBar
                            title="About Store"
                            icon={<BsCreditCard2Front />}
                            active={url === "/about-store"}
                            links={route("about")}
                        />
                        <CardSideBar
                            title="Other"
                            active={url === "/other"}
                            icon={<TbQuestionMark />}
                            links={route("other")}
                        />
                    </>
                )}
                {Auth.user !== null && urlListDashboard.includes(url) && (
                    <>
                        <CardSideBar
                            title="Dashboard"
                            icon={<MdSpaceDashboard />}
                            active={url === "/dashboard/user"}
                            links={route("users.dashboard")}
                        />
                        <CardSideBar
                            title="Transaction"
                            icon={<MdOutlinePriceChange />}
                            active={url === "/dashboard/user/transaction"}
                            links={route("users.transaction")}
                        />
                        <CardSideBar
                            title="Settings"
                            icon={<FaUserCog />}
                            active={url === "/dashboard/user/settings"}
                            links={route("users.settings")}
                        />
                        <CardSideBar
                            title="Back Home"
                            icon={<FaArrowLeft />}
                            active={url === "/"}
                            links={route("home")}
                        />
                    </>
                )}
            </div>
        </>
    );
}
