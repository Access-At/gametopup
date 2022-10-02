import { Link } from "@inertiajs/inertia-react";
import { Chip, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import ContentTemplate from "../PagesComponent/ContentTemplate";

export default function Price() {
  return (
    <ContentTemplate>
      <div className="flex flex-col gap-5">
        {/* breadcrumbs */}

        <div className="flex gap-4">
          <Link href={route("home")}>
            <Chip value="Homepage" className="bg-white text-primary-500" />
          </Link>
          <Link>
            <Chip value="Price" className="bg-primary-500 text-white" />
          </Link>
        </div>

        <section className="flex flex-col gap-5">
          <div className="flex justify-end lg:w-72">
            <Input label="Search" icon={<FaSearch />} />
          </div>
          <div>
            <div className="bg-white h-screen w-full"></div>
          </div>
        </section>

      </div>
    </ContentTemplate >

  )
}
