import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";

export default function NavbarBottom() {
    return (
        <div className="bg-secondry-600 sticky bottom-0 p-2 block lg:hidden">
            <div className="flex justify-between text-2xl md:mx-12 mx-4">
                <div className="navbar_menu_bottom_active">
                    <FaHome className="font2xl" />
                    Home
                </div>
                <div className="navbar_menu_bottom_non_active">
                    <MdOutlinePriceChange className="font2xl" />
                    Price
                </div>
                <div className="navbar_menu_bottom_non_active">
                    <FaSearchDollar className="font2xl" />
                    Check Order
                </div>
                <div className="navbar_menu_bottom_non_active">
                    <BsCreditCard2Front className="font2xl" />
                    About Store
                </div>
                <div className="navbar_menu_bottom_non_active">
                    <TbQuestionMark className="font2xl" />
                    Other
                </div>
            </div>
        </div>
    );
}
