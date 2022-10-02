import CardSideBar from "@/Components/Utils/CardSideBar";
import { FaHome, FaSearchDollar } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
import { usePage } from "@inertiajs/inertia-react";

export default function SidebarMenu() {

  const { url } = usePage()

  return (
    <>
      <div className="lg:w-2/12 lg:block hidden">
        <CardSideBar title="Home" icon={<FaHome />} active={url === "/"} links={route('home')} />
        <CardSideBar title="Price" icon={<MdOutlinePriceChange />} active={url === "/price"} links={route('price')} />
        <CardSideBar title="Check Order" icon={<FaSearchDollar />} active={url === "/check-invoice"} links={route('invoice')} />
        <CardSideBar
          title="About Store"
          icon={<BsCreditCard2Front />}
          active={url === "/about-store"}
          links={route('about')}
        />
        <CardSideBar title="Other" active={url === "/other"} icon={<TbQuestionMark />} />
      </div>
    </>
  );
}
