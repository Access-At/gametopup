import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { Link } from "@inertiajs/inertia-react";

export default function MenuSide({ setIsOpen }) {
    return (
        <>
            <button
                className="absolute flex justify-end px-5 py-7 right-6"
                onClick={() => setIsOpen(false)}
            >
                <FaTimes className="text-white h-5 w-5" />
            </button>
            <div className="flex flex-col gap-3 mr-3 sticky top-20">
                <Link className="flex items-center gap-2">
                    <FaHome className="w-6 h-6" />
                    <span className="font-semibold text-lg">Home</span>
                </Link>
                <Link className="flex items-center gap-2">
                    <MdOutlinePriceChange className="w-6 h-6" />
                    <span className="font-semibold text-lg">Price</span>
                </Link>
                <Link className="flex items-center gap-2">
                    <FaSearchDollar className="w-6 h-6" />
                    <span className="font-semibold text-lg">Check Order</span>
                </Link>
                <Link className="flex items-center gap-2">
                    <BsCreditCard2Front className="w-6 h-6" />
                    <span className="font-semibold text-lg">About Store</span>
                </Link>
                <Link className="flex items-center gap-2">
                    <TbQuestionMark className="w-6 h-6" />
                    <span className="font-semibold text-lg">Other</span>
                </Link>
            </div>
        </>
    );
}
