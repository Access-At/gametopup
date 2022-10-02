import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";

export default function NavbarBottom() {
    return (
        <div className="bg-secondry-600 sticky bottom-0 p-2 block lg:hidden">
            <div className="flex justify-between text-2xl md:mx-12 mx-4">
                <div className="navbarMenuBottomActive">
                    <FaHome className="font2xl" />
                    Home
                </div>
                <div className="navbarMenuBottomNonActive">
                    <MdOutlinePriceChange className="font2xl" />
                    Price
                </div>
                <div className="navbarMenuBottomNonActive">
                    <FaSearchDollar className="font2xl" />
                    Check Order
                </div>
                <div className="navbarMenuBottomNonActive">
                    <BsCreditCard2Front className="font2xl" />
                    About Store
                </div>
                <div className="navbarMenuBottomNonActive">
                    <TbQuestionMark className="font2xl" />
                    Other
                </div>
            </div>
        </div>
    );
}
