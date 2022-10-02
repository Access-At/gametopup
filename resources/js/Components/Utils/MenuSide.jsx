import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { Link, usePage } from "@inertiajs/inertia-react";


export default function MenuSide({ setIsOpen }) {
  const { url } = usePage()
  return (
    <>
      <button
        className="absolute flex justify-end px-5 py-7 right-6"
        onClick={() => setIsOpen(false)}
      >
        <FaTimes className="text-white h-5 w-5" />
      </button>
      <div className="flex flex-col gap-3 mr-3 sticky top-20">
        <Link href={route('home')} className={`${url === '/' ? "bg-primary-500 p-2 md:bg-secondry-500 md:text-primary-500" : ""} flex items-center gap-2`}>
          <FaHome className="font2xl" />
          <span className="font-semibold text-lg">Home</span>
        </Link>
        <Link href={route('price')} className={`${url === '/price' ? "bg-primary-500 p-2 md:bg-secondry-500 md:text-primary-500" : ""} flex items-center gap-2`}>
          <MdOutlinePriceChange className="font2xl" />
          <span className="font-semibold text-lg">Price</span>
        </Link>
        <Link href={route('invoice')} className={`${url === '/check-invoice' ? "bg-primary-500 p-2 md:bg-secondry-500 md:text-primary-500" : ""} flex items-center gap-2`}>
          <FaSearchDollar className="font2xl" />
          <span className="font-semibold text-lg">Check Order</span>
        </Link>
        <Link href={route('about')} className={`${url === '/about-store' ? "bg-primary-500 p-2 md:bg-secondry-500 md:text-primary-500" : ""} flex items-center gap-2`}>
          <BsCreditCard2Front className="font2xl" />
          <span className="font-semibold text-lg">About Store</span>
        </Link>
        <Link className={`${url === '/other' ? "bg-primary-500 p-2 md:bg-secondry-500 md:text-primary-500" : ""} flex items-center gap-2`}>
          <TbQuestionMark className="font2xl" />
          <span className="font-semibold text-lg">Other</span>
        </Link>
      </div>
    </>
  );
}
