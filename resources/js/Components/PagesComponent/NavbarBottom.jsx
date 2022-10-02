import { FaHome, FaSearchDollar, FaTimes } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function NavbarBottom() {
  const { url } = usePage()

  return (
    <div className="bg-secondry-600 sticky bottom-0 p-2 block lg:hidden">
      <div className="flex justify-between text-2xl md:mx-12 mx-4">
        <Link href={route('home')} className={url === '/' ? "navbarMenuBottomActive" : "navbarMenuBottomNonActive"}>
          <FaHome className="font2xl" />
          Home
        </Link>
        <Link href={route('price')} className={url === '/price' ? "navbarMenuBottomActive" : "navbarMenuBottomNonActive"}>
          <MdOutlinePriceChange className="font2xl" />
          Price
        </Link>
        <Link href={route('invoice')} className={url === '/check-invoice' ? "navbarMenuBottomActive" : "navbarMenuBottomNonActive"}>
          <FaSearchDollar className="font2xl" />
          Check Order
        </Link>
        <Link href={route('about')} className={url === '/about-store' ? "navbarMenuBottomActive" : "navbarMenuBottomNonActive"}>
          <BsCreditCard2Front className="font2xl" />
          About Store
        </Link>
        <Link className={url === '/other' ? "navbarMenuBottomActive" : "navbarMenuBottomNonActive"}>
          <TbQuestionMark className="font2xl" />
          Other
        </Link>
      </div>
    </div >
  );
}
