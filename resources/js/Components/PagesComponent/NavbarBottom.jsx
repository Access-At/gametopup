import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";

export default function NavbarBottom() {
    return (
        <div className="bg-secondry-600 sticky bottom-0 p-2 block lg:hidden">
            <div className="flex justify-between text-2xl md:mx-12 mx-4">
                <div className="text-primary-500 flex flex-col items-center md:text-sm text-xs">
                    <FaHome className="text-base md:text-2xl" />
                    Home
                </div>
                <div className="flex flex-col items-center md:text-sm text-xs">
                    <MdOutlinePriceChange className="text-base md:text-2xl" />
                    Price
                </div>
                <div className="flex flex-col items-center md:text-sm text-xs">
                    <FaSearchDollar className="text-base md:text-2xl" />
                    Check Order
                </div>
                <div className="flex flex-col items-center md:text-sm text-xs">
                    <BsCreditCard2Front className="text-base md:text-2xl" />
                    About Store
                </div>
                <div className="flex flex-col items-center md:text-sm text-xs">
                    <TbQuestionMark className="text-base md:text-2xl" />
                    Other
                </div>
            </div>
        </div>
    );
}
