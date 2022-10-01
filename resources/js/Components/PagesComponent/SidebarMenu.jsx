import CardSideBar from "@/Components/Utils/CardSideBar";
import { FaHome, FaSearchDollar } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbQuestionMark } from "react-icons/tb";
export default function SidebarMenu(){
  return(
    <>
      <div className="lg:w-2/12 lg:block hidden">
          <CardSideBar title="Home" icon={<FaHome />} active={true} />
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
    </>
  )
}